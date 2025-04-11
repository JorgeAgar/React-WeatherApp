import { useState } from "react";

export default function WeatherCardDetails({ humidity, wind_kph, wind_mph }) {
  const [windMph, setWindMph] = useState(false);

  const windValue = windMph ? wind_mph : wind_kph;

  const mphActive = windMph ? "active" : "";
  const kphActive = windMph ? "" : "active";

  function clickMph() {
    setWindMph(true);
  }

  function clickKph() {
    setWindMph(false);
  }

  return (
    <div className="weather-card-details">
      <span className="humidity">
        <svg
          data-name="Layer 1"
          id="Layer_1"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="none"
          strokeWidth="9px"
        >
          <path
            className="cls-1"
            d="M49,38a17.5,17.5,0,0,1-35,0C14,22.7,28.22,8.48,31.5,8.48S49,22.7,49,38Z"
          />
        </svg>
        {humidity + "%"}
      </span>
      <span className="wind">
        <svg
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            fill="none"
            fillRule="evenodd"
            id="Windy"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
          >
            <g
              stroke="currentColor"
              strokeWidth="2"
              transform="translate(3.000000, 3.000000)"
            >
              <g id="Group-2" transform="translate(2.000000, 0.000000)">
                <g id="Group" transform="translate(5.000000, 0.000000)">
                  <path
                    d="M5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,0 5,0 C2.23857625,0 0,2.23857625 0,5"
                    id="Oval-6"
                  />
                </g>
                <path d="M0,10 L10,10" id="Path-9" />
              </g>
              <g id="Group-3" transform="translate(3.000000, 17.000000)">
                <path d="M0,1 L14,1" id="Path-10" />
                <path
                  d="M11,4 C11,5.65685425 12.3431458,7 14,7 C15.6568542,7 17,5.65685425 17,4 C17,2.34314575 15.6568542,1 14,1"
                  id="Oval-7"
                />
              </g>
              <g id="Group-4" transform="translate(0.000000, 4.000000)">
                <path
                  d="M21,10 C23.7614237,10 26,7.76142375 26,5 C26,2.23857625 23.7614237,0 21,0 C20.7036941,0 20.4134082,0.0257742635 20.1312618,0.075203111"
                  id="Oval-8"
                />
                <path d="M0,10 L21,10" id="Path-11" />
              </g>
            </g>
          </g>
        </svg>
        {windValue}
        <div className="wind-speed-buttons">
          <button onClick={clickKph} className={kphActive}>Km/h</button>
          <button onClick={clickMph} className={mphActive}>Mi/h</button>
        </div>
      </span>
    </div>
  );
}
