# 🌤️ Status Weather - Aplicación del Clima

Una aplicación web interactiva que muestra el clima actual de cualquier ciudad del mundo con iconos visuales según las condiciones meteorológicas.

## 🌐 Language / Idioma

- [English](README.md) (Current)
- [Español](README_ES.md)

## 🚀 Features

- **Consulta del clima en tiempo real** usando la API de OpenWeatherMap
- **Iconos visuales dinámicos** que cambian según el estado del clima
- **4 estados meteorológicos**: Clear (Despejado), Clouds (Nublado), Rain (Lluvia), Drizzle (Llovizna)
- **Diseño responsive** adaptable a dispositivos móviles
- **Interfaz moderna** con gradientes y animaciones
- **Información detallada**: temperatura, viento, presión atmosférica

## 📁 Project Structure

```
status-weather/
├── assets/                     # Static assets
│   ├── weather-clear.png      # Icon for clear sky ☀️
│   ├── weather-clouds.png     # Icon for cloudy ☁️
│   ├── weather-rain.png       # Icon for rain 🌧️
│   └── weather-drizzle.png    # Icon for drizzle 🌦️
├── docs/                       # Documentation
├── src/                        # Source files
│   ├── css/
│   │   └── main.css           # Main stylesheet
│   └── js/
│       └── weather.js         # Weather app logic
├── index.html                  # Main HTML file
├── INSTRUCCIONES_IMAGENES.md  # Image setup instructions
├── package.json                # NPM configuration and scripts
└── README.md                   # Project documentation
```

## 🛠️ Installation

1. **Clone or download the project**
2. **Add weather icons** (see instructions below)
3. **Open `index.html`** in your browser

### ⚠️ Important: Weather Icons Setup

The application requires 4 PNG images in the `assets/` folder. Rename them as follows:

- 🌞 **Sun icon** → `weather-clear.png`
- ☁️ **Clouds icon** → `weather-clouds.png`
- 🌧️ **Heavy rain icon** → `weather-rain.png`
- 🌦️ **Light rain with sun icon** → `weather-drizzle.png`

See `INSTRUCCIONES_IMAGENES.md` for detailed instructions.

## 🛠️ Installation (for developers)

1. **Ensure Node.js is installed** (version specified in .nvmrc)
2. **Install dependencies:**
   ```bash
   npm install
   ```

````

## 📝 Available Scripts

### Linting

- `npm run lint` - Run all linters
- `npm run lint:html` - Lint HTML files
- `npm run lint:css` - Lint CSS files
- `npm run lint:js` - Lint JavaScript files

### Formatting

- `npm run format` - Format all files
- `npm run format:check` - Check formatting without modifying

### Development

- `npm start` or `npm run dev` - Development information

## 🎨 Customization

### CSS Variables

The `src/css/main.css` file includes customizable CSS variables:

```css
:root {
  --primary-color: #007bff;
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --spacing-md: 1rem;
  /* ... more variables */
}
```

### Linting Configuration

- **ESLint**: `eslint.config.js` - JavaScript rules
- **Prettier**: `.prettierrc` - Code formatting
- **HTMLHint**: `.htmlhintrc` - HTML validation
- **Stylelint**: `.stylelintrc.json` - CSS rules

## 📱 Responsive Design

The template includes responsive breakpoints:

- **Desktop**: > 768px
- **Tablet**: ≤ 768px
- **Mobile**: ≤ 480px

## 🔧 Development Tools

### Requirements

- Node.js (version in .nvmrc)
- npm or yarn

### Editor Configuration

Recommended VS Code extensions:

- ESLint
- Prettier
- HTMLHint
- Stylelint

## 📄 License

MIT - You can use this template freely for personal and commercial projects.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

If you have questions or need help:

- Open an issue in the repository
- Contact the project maintainer

---

Happy coding! 🎉
