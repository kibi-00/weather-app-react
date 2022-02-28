import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [info, setInfo] = useState(null);
  const [temp, setTemp] = useState(null);
  const [desc, setDesc] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemp(response) {
    console.log(response.data);
    setInfo(`${props.city}`);
    setTemp(response.data.main.temp);
    setDesc(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  if (info) {
    return (
      <ul>
        <li>Temperature : {Math.round(temp)}</li>
        <li>Description: {desc}</li>
        <li>Humidity: {humidity}% </li>
        <li>Wind: {wind}km/h</li>
        <li>
          <img src={icon} alt={desc} />
        </li>
      </ul>
    );
  } else {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=1d9f5e22b7d5d2800eb8802fb2e8da88&units=metric`;
    axios.get(url).then(showTemp);

    return <p>loading information for {props.city}</p>;
  }
}
