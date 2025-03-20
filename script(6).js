// app.js
const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeather API key

async function getWeather() {
  const city = document.getElementById("city-input").value;

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    // Display the weather information
    document.getElementById("city-name").textContent = `${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("weather-description").textContent = `Condition: ${data.weather[0].description}`;

    // Set the weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById("weather-icon").src = iconUrl;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Something went wrong. Please try again later.");
  }
}