import React, { useState, useEffect } from "react";
import axios from "../Utilities/axios";
import requests from "../Utilities/request";
import "./Banner.css";
const base_url = "https://image.tmdb.org/t/p/original/";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];

      setMovie(randomMovie);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"

        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* descriptions */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
