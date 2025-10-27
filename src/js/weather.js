const apiKey = '';
const resultBox = document.getElementById('resultado');

const getWeather = () => {
  const city = document.getElementById('pais').value.trim();

  if (!city) {
    alert('Por favor, introduce el nombre de una ciudad');
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`,
  )
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        renderWeather(data);
      } else {
        alert('Ciudad no encontrada');
      }
    })
    .catch(error => {
      console.error('Error al obtener el clima:', error);
      alert('Error al obtener el clima. Por favor, intenta de nuevo.');
    });
};

const getWeatherImage = weatherStatus => {
  const images = {
    Clear: 'assets/weather-clear.png',
    Clouds: 'assets/weather-clouds.png',
    Rain: 'assets/weather-rain.png',
    Drizzle: 'assets/weather-drizzle.png',
  };

  return images[weatherStatus] || 'assets/weather-clouds.png';
};

const renderWeather = data => {
  const weatherStatus = data.weather[0].main;
  const weatherImage = getWeatherImage(weatherStatus);

  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <div class="weather-card">
      <img src="${weatherImage}" alt="${weatherStatus}" class="weather-icon">
      <h3>Clima en ${data.name}</h3>
      <p>☁️ Estado: ${data.weather[0].description}</p>
      <p>🌡️ Temperatura: ${Math.round(data.main.temp)}ºC</p>
      <p>🍃 Viento: ${data.wind.speed} m/s</p>
      <p>🔽 Presión: ${data.main.pressure} hPa</p>
    </div>
  `;
};
