WEATHERAPI_KEY = 'bfab859368a54fbca7e155216251811';
DEFAULT_CITY = "colombo";


/* Fetch weather
*/
function fetchWeather(city = DEFAULT_CITY) {

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(WEATHERAPI_KEY)}&q=${encodeURIComponent(city)}&days=4&aqi=yes&alerts=no`;
    fetch(url)
        .then(res => {
            if (!res.ok) {

                return res.json().then(errorData => {
                    throw new Error(errorData.error.message || `HTTP දෝෂය! තත්ත්වය: ${res.status}`);
                });
            }
            return res.json();
        })
        .then(data => {
            updateWeatherUI(data);
            console.log(data);
        })
        .catch(err => {
            console.error('Fetch error:', err);
            updateWeatherUI({ error: { message: err.message } });
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // initial load
    fetchWeather(DEFAULT_CITY);

    // search
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const city = searchInput.value.trim();
            if (city) fetchWeather(city);
        });
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const city = searchInput.value.trim();
                if (city) fetchWeather(city);
            }
        });
    }
});



function getDayName(dateString, index) {
    if (index === 0) {

        return "Today";
    }
    const date = new Date(dateString);
    const options = { weekday: 'short' };

    const dayName = date.toLocaleDateString('En-LK', options);
    return dayName;
}


function getWeatherIconEmoji(conditionCode) {

    if (conditionCode >= 1000 && conditionCode < 1003) {
        return "☀️";
    } else if (conditionCode >= 1003 && conditionCode < 1007) {
        return "⛅";
    } else if (conditionCode >= 1063 && conditionCode < 1180) {
        return "🌧️";
    } else if (conditionCode >= 1183 && conditionCode < 1195) {
        return "⛈️";
    } else if (conditionCode >= 1114 && conditionCode < 1117) {
        return "🌫️";
    }
    return "🌡️";
}



function updateWeatherUI(data) {
    const forecastContainer = document.getElementById('weather-forecast');

    if (!data || data.error) {
        console.error('Weather fetch error:', data ? data.error : 'no data');
        document.getElementById('location').textContent = 'Location Not Found';
        document.getElementById('temperature').textContent = '—°C';


        ['uv-index-value', 'wind-speed', 'sunrise-time', 'sunset-time', 'humidity-value', 'visibility-value', 'air-quality-value', 'precipitationChance', 'sunriseTime', 'sunsetTime', 'day-length', 'datetime', 'humidity', 'windSpeed'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '—';
        });



        return;
    }


    const current = data.current;
    const location = data.location;
    const forecastDay = data.forecast?.forecastday?.[0] || {};
    const astro = forecastDay.astro || {};

    document.getElementById('location').textContent = `${location.name}, ${location.country}`;
    document.getElementById('temperature').textContent = `${Math.round(current.temp_c)}°C`;
    document.getElementById('precipitationChance').textContent = current.condition?.text || '—';
    document.getElementById('sunriseTime').textContent = astro.sunrise || '—';
    document.getElementById('sunsetTime').textContent = astro.sunset || '—';
    const difference = calculateTimeDifference(astro.sunrise, astro.sunset);

    document.getElementById('day-length').textContent = difference.hours + " h " + difference.minutes + " m";
    const localTime = new Date(location.localtime);
    document.getElementById('datetime').textContent = localTime.toLocaleDateString('en-US', { weekday: 'long', hour: '2-digit', minute: '2-digit' });
    document.getElementById('humidity').textContent = "Humidity: " + current.humidity + "%";
    document.getElementById('windSpeed').textContent = "Wind: " + current.wind_kph + " kp/h";

    // Icon
    let iconUrl = current.condition?.icon || '';
    if (iconUrl.startsWith('//')) iconUrl = 'https:' + iconUrl;
    if (!iconUrl) iconUrl = 'https://cdn-icons-png.flaticon.com/512/1163/1163624.png';
    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('weather-icon1').src = iconUrl;





    if (forecastContainer && data.forecast && data.forecast.forecastday) {

        forecastContainer.innerHTML = '';

        const forecastDays = data.forecast.forecastday;


        forecastDays.forEach((dayData, index) => {

            const date = dayData.date;
            const dayName = getDayName(date, index);
            const maxTemp = Math.round(dayData.day.maxtemp_c);
            const minTemp = Math.round(dayData.day.mintemp_c);
            const conditionCode = dayData.day.condition.code;
            const icon = getWeatherIconEmoji(conditionCode);

            const boxHtml = `
        <div 
            class="forecast-day bg-white/5 backdrop-blur-sm rounded-xl p-3 w-20 text-center border border-white/10 shadow-sm hover:bg-white/10 transition-all duration-200 cursor-pointer transform hover:-translate-y-1 animate-fadeInUp delay-500">
            <div class="day-name text-xs font-medium mb-1 opacity-80 text-white">${dayName}</div>
            <div class="forecast-icon text-2xl my-1 drop-shadow-md">${icon}</div>
            <div
                class="high-temp text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
                ${maxTemp}°</div>
            <div class="low-temp text-xs opacity-70 text-slate-400">${minTemp}°</div>
        </div>
    `;
            forecastContainer.innerHTML += boxHtml;
        });
    }


}

/**
 * @param {string} startTimeStr 
 * @param {string} endTimeStr 
 * @returns {object} 
 */
function calculateTimeDifference(startTimeStr, endTimeStr) {

    const today = new Date().toDateString();

    const startTime = new Date(`${today} ${startTimeStr}`);
    const endTime = new Date(`${today} ${endTimeStr}`);
    const timeDifferenceMs = endTime - startTime;
    const totalMinutes = Math.floor(timeDifferenceMs / (1000 * 60));
    const hours = Math.floor(totalMinutes / 60);

    const minutes = totalMinutes % 60;
    return {
        hours: hours,
        minutes: minutes
    };
}