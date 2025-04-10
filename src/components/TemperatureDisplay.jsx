import { useState } from "react";

export default function TemperatureDisplay({
  temp_c,
  temp_f,
  feelslike_c,
  feelslike_f,
}) {
  const [useFarenheit, setUseFarenheit] = useState(false);

  const degreeValue = useFarenheit ? temp_f : temp_c;

  const degreeFeels = useFarenheit ? (feelslike_f + "°F") : (feelslike_c + "°C");

  function clickFarenheit() {
    setUseFarenheit(true);
  }

  function clickCelsius() {
    setUseFarenheit(false);
  }

  const btnCelsiusClass = useFarenheit ? "" : "active";
  const btnFarenheitClass = useFarenheit ? "active" : "";

  return (
    <div className="temperature-display">
      <header>
        <h2>{degreeValue}</h2>
        <div className="units-buttons">
          <button className={btnCelsiusClass} onClick={clickCelsius}>°C</button>
          <button className={btnFarenheitClass} onClick={clickFarenheit}>°F</button>
        </div>
      </header>
      <footer>
        <p className="feels-like">Feels like {degreeFeels}</p>
      </footer>
    </div>
  );
}
