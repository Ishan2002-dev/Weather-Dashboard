Weather Dashboard 🌤️

A sleek, responsive, and dynamic weather application built with HTML, Tailwind CSS, and Vanilla JavaScript. This dashboard allows users to quickly retrieve the current weather and a 3-day forecast for any city worldwide, utilizing the WeatherAPI.

<br>
  
  <img src="weatherDashboard.png" width="100%" alt="Matrix Code Animation Banner"/>

<br>

🚀 Features

Real-time Weather: Displays the current temperature, weather condition, humidity, and wind speed.

Search Functionality: Easily search for weather data of any city across the globe.

3-Day Forecast: Provides a snapshot of the maximum and minimum temperatures for the next three days.

Astro Information: Includes sunrise time, sunset time, and day length.

Dynamic UI: Modern, visually appealing interface with gradient backgrounds, backdrop blur effects, and smooth CSS animations (e.g., fade-in, gentle floating icons).

Responsive Design: Optimized for different screen sizes using Tailwind CSS utility classes.

🛠️ Technologies Used

HTML5: Markup and structure.

Tailwind CSS: Utility-first CSS framework for rapid styling.

Vanilla JavaScript (ES6+): Logic for fetching data, processing, and updating the UI.

WeatherAPI: External service to fetch weather data.

Font Awesome: For the search icon.

Google Fonts: (Outfit) For modern typography.

🚀 Getting Started

Follow these instructions to get the project up and running locally.

Prerequisites

A web browser (Chrome, Firefox, etc.)

A code editor (VS Code, Sublime Text, etc.)

Installation

Clone the repository:

git clone [YOUR_REPOSITORY_URL]
cd weather-dashboard


Obtain an API Key:

Sign up for a free account at WeatherAPI
.

Obtain your personal API key.

Update the API Key:

Open the script.js file and replace the placeholder API key with your actual key:

// script.js
const WEATHERAPI_KEY = 'YOUR_WEATHERAPI_KEY_HERE'; // <--- Update this
const DEFAULT_CITY = "colombo"; // default city if no search is made


Open in Browser:

Simply open the index.html file in your preferred web browser.

⚙️ Project Structure

The project follows a clean and organized structure:

weather-dashboard/
├── index.html          # Main structure and layout
├── script.js           # JavaScript logic (fetching data, UI updates)
└── style.css           # Custom CSS (animations, variables)

💡 Code Highlights
JavaScript (script.js)

API Fetching: The fetchWeather(city) function handles the asynchronous request to the WeatherAPI with error handling.

Dynamic UI Update: The updateWeatherUI(data) function parses the returned JSON data and dynamically updates the UI.

Time Difference Calculation: The calculateTimeDifference(startTimeStr, endTimeStr) function calculates the length of the day using sunrise and sunset times.

Styling (index.html & style.css)

Tailwind Utility: The design extensively uses Tailwind CSS utility classes for efficient styling, responsiveness (e.g., sm:max-w-md), and modern visual effects (e.g., backdrop-blur-lg).

Custom Animations: The style.css file includes custom @keyframes for subtle visual effects:

fadeInUp: Smooth element transitions when they load.

gentleBob: A continuous floating effect for key icons.

🤝 Contribution

Feel free to fork the repository, submit pull requests, or suggest improvements. Contributions are always welcome!

📄 License

This project is licensed under the MIT License - see the LICENSE
 file for details.

📱 Demo

View Live Demo
 (add demo link here if available)