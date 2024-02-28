import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

function MovieList({ genreId }) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  return (
    <div className="flex">
      {movieList.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </div>
  );
}

export default MovieList;
