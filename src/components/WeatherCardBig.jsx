import WeatherCardDetails from "./WeatherCardDetails.jsx";
import WeatherDescription from "./WeatherDescription.jsx";
import TemperatureDisplay from "./TemperatureDisplay.jsx"

export default function WeatherCardBig({ weather }) {

  return (
    <div className="weather-card-big">
      <header>
        <WeatherDescription
          city={weather.location.name}
          weatherText={weather.current.condition.text}
          weatherIconUrl={weather.current.condition.icon}
        />
        <TemperatureDisplay
          temp_c={weather.current.temp_c}
          temp_f={weather.current.temp_c}
          feelslike_c={weather.current.feelslike_c}
          feelslike_f={weather.current.feelslike_f}
        />
      </header>
      <footer>
        <WeatherCardDetails
          humidity={weather.current.humidity}
          wind_kph={weather.current.wind_kph}
          wind_mph={weather.current.wind_mph}
        />
      </footer>
    </div>
  );
}
