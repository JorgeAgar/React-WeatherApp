import api from "./scripts/api.js"
import WeatherCardBig from "./components/WeatherCardBig";

const currentWeather = await api.getCurrentWeather();

console.log(currentWeather);

export default function App() {
  return (
    <WeatherCardBig weather={currentWeather} />
  );
}
