import React, { useState } from "react";
import Weather from "./Weather";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState("");

  function submitForm(response) {
    response.preventDefault();
    setResult(<Weather city={city} />);
  }

  function cityName(response) {
    setCity(response.target.value);
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="search"
          placeholder="Type a city name"
          onChange={cityName}
        />
        <input type="submit" value="Search" />
      </form>
      <p>{result}</p>
    </div>
  );
}
