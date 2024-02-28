import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const MovieCard = ({ movie }) => {
  // Memeriksa apakah prop movie terdefinisi
  if (!movie) {
    return <div>No movie data available</div>;
  }

  // Memeriksa apakah poster_path terdefinisi di dalam prop movie
  if (!movie.poster_path) {
    return <div>No poster available</div>;
  }

  return (
    <div>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="w-[110px] h-[160px] rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
