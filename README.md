☀️ Weather Dashboard
A sleek, responsive, and dynamic weather application built with HTML, Tailwind CSS, and Vanilla JavaScript. This dashboard allows users to quickly retrieve the current and a 3-day forecast for any city worldwide, utilizing the WeatherAPI.

<br>
  
  <img src="weatherDashboard.png.png" width="100%" />

<br>

🌟 Features
Real-time Weather: Displays the current temperature, weather condition, humidity, and wind speed.

Search Functionality: Easily look up the weather for any city globally.

3-Day Forecast: Provides a snapshot of the maximum and minimum temperatures for the upcoming three days.

Astro Information: Includes Sunrise time, Sunset time, and Day Length.

Dynamic UI: Modern, visually appealing interface with gradient backgrounds, backdrop blur effects, and smooth CSS animations (e.g., fade-in, gentle floating icons).

Responsive Design: Optimized for display on various screen sizes using Tailwind CSS utility classes.

🛠️ Technologies Used
HTML5: Structure and content.

Tailwind CSS: Modern, utility-first CSS framework for rapid styling.

Vanilla JavaScript (ES6+): Logic for fetching data, processing, and updating the UI.

WeatherAPI: Used as the external service to fetch weather data.

Font Awesome: For the search icon.

Google Fonts (Outfit): For a clean and modern typography.

🚀 Getting Started
Follow these instructions to set up and run the project locally.

Prerequisites
You will need a web browser and a code editor.

Installation
Clone the repository:

Bash

git clone [YOUR_REPOSITORY_URL]
cd weather-dashboard
Obtain an API Key:

Sign up for a free account at WeatherAPI.

Obtain your personal API key.

Update the API Key in script.js: Open the script.js file and replace the placeholder API key with your actual key:

JavaScript

// script.js
const WEATHERAPI_KEY = 'YOUR_WEATHERAPI_KEY'; // <--- Update this
const DEFAULT_CITY = "colombo";
// ... rest of the code
Open in Browser: Simply open the index.html file in your preferred web browser. Since all resources (HTML, CSS, JS) are local and the API call is made via HTTPS, no local server is strictly required for this simple setup.

⚙️ Project Structure
The project is organized with clear separation of concerns:

weather-dashboard/
├── index.html          # Main structure and layout
├── script.js           # JavaScript logic (fetch, UI updates)
└── style.css           # Custom CSS (animations, variables)
💡 Code Highlights
JavaScript (script.js)
API Fetching: The fetchWeather(city) function handles the asynchronous request to the WeatherAPI and error handling.

JavaScript

// Example of the fetch logic
function fetchWeather(city = DEFAULT_CITY) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(WEATHERAPI_KEY)}&q=${encodeURIComponent(city)}&days=4&aqi=yes&alerts=no`;
    fetch(url)
        // ... error checking and JSON parsing
        .then(data => {
            updateWeatherUI(data);
        })
        // ... catch block
}
Dynamic UI Update: The updateWeatherUI(data) function parses the returned JSON data and injects it into the respective HTML elements.

Time Difference Calculation: The calculateTimeDifference(startTimeStr, endTimeStr) function is used to calculate the duration of the day from the sunrise and sunset times provided by the API.

Styling (index.html and style.css)
Tailwind Utility: The design relies heavily on Tailwind's utility classes for layout, color, spacing, and responsiveness (e.g., bg-gradient-to-br, backdrop-blur-lg, sm:max-w-md).

Custom Animations: The style.css file contains custom @keyframes for subtle animations, enhancing the user experience:

@keyframes fadeInUp: For elements loading in from the bottom.

@keyframes gentleBob: For a floating icon effect.

🤝 Contribution
Feel free to fork the repository and submit pull requests. Any suggestions or improvements are welcome!
