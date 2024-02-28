import React from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";
function ProductList() {
  return (
    <div className="bg-[#131520]">
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-15">
              <h1 className="text-[18px] font-bold">{item.name}</h1>
              <MovieList genreId={item.id} />
            </div>
          )
      )}
    </div>
  );
}

export default ProductList;
