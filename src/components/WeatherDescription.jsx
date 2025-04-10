export default function WeatherDescription({
  city,
  weatherText,
  weatherIconUrl,
}) {
  return (
    <div className="weather-description">
      <h1>{city}</h1>
      <div className="weather-display">
        <img src={weatherIconUrl} alt="Weather icon" />
        <h2>{weatherText}</h2>
      </div>
    </div>
  );
}
