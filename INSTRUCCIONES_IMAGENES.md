# 📸 Instrucciones para las Imágenes del Clima

## Imágenes Necesarias

Para que la aplicación funcione correctamente, necesitas colocar las 4 imágenes proporcionadas en el directorio `assets/` con los siguientes nombres:

### 1. **weather-clear.png** 
- Representa: Cielo despejado (Clear)
- Imagen: Sol brillante 🌞
- Ubicación: `assets/weather-clear.png`

### 2. **weather-clouds.png**
- Representa: Nublado (Clouds)
- Imagen: Nubes 🌥️
- Ubicación: `assets/weather-clouds.png`

### 3. **weather-rain.png**
- Representa: Lluvia (Rain)
- Imagen: Lluvia intensa 🌧️
- Ubicación: `assets/weather-rain.png`

### 4. **weather-drizzle.png**
- Representa: Llovizna (Drizzle)
- Imagen: Lluvia ligera con sol 🌦️
- Ubicación: `assets/weather-drizzle.png`

## Pasos para Añadir las Imágenes

1. Copia las 4 imágenes proporcionadas
2. Pégalas en la carpeta `assets/` del proyecto
3. Asegúrate de que tengan los nombres exactos mencionados arriba
4. Las imágenes deben ser en formato PNG para mejor calidad

## Estructura de Archivos Final

```
status-weather/
├── assets/
│   ├── weather-clear.png    ← Sol
│   ├── weather-clouds.png   ← Nubes
│   ├── weather-rain.png     ← Lluvia
│   └── weather-drizzle.png  ← Llovizna
├── src/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── weather.js
└── index.html
```

## Cómo Funciona el Sistema de Imágenes

El código JavaScript en `src/js/weather.js` contiene una función llamada `obtenerImagenClima()` que:

1. Recibe el estado del clima desde la API (d.weather[0].main)
2. Compara el valor con los 4 estados posibles:
   - `'Clear'` → muestra weather-clear.png
   - `'Clouds'` → muestra weather-clouds.png
   - `'Rain'` → muestra weather-rain.png
   - `'Drizzle'` → muestra weather-drizzle.png
3. Si el estado no coincide con ninguno, muestra weather-clouds.png por defecto

### Código Relevante

```javascript
function obtenerImagenClima(estadoClima) {
  const imagenes = {
    'Clear': 'assets/weather-clear.png',
    'Clouds': 'assets/weather-clouds.png',
    'Rain': 'assets/weather-rain.png',
    'Drizzle': 'assets/weather-drizzle.png'
  };
  
  return imagenes[estadoClima] || 'assets/weather-clouds.png';
}
```

## Probar la Aplicación

1. Abre `index.html` en tu navegador
2. Escribe el nombre de una ciudad (por ejemplo: "Madrid", "Londres", "Tokyo")
3. Haz clic en "🌤️ Ver clima"
4. Deberías ver la imagen correspondiente según el clima actual de esa ciudad

## Estados del Clima

La API de OpenWeatherMap devuelve estos estados principales:
- **Clear**: Cielo despejado
- **Clouds**: Nublado (pocos o muchas nubes)
- **Rain**: Lluvia
- **Drizzle**: Llovizna
- **Thunderstorm**: Tormenta (se mostrará la imagen de nubes por defecto)
- **Snow**: Nieve (se mostrará la imagen de nubes por defecto)
- **Mist/Fog**: Niebla (se mostrará la imagen de nubes por defecto)
