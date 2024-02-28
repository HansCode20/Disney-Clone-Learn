import React from "react";
import GenresList from "../constant/GenresList";
import MovieList from "./MovieList";
function ProductList() {
  return (
    <div className="bg-[#131520]">
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-15 w-full h-full grid">
              <h1 className="text-[18px] font-bold">{item.name}</h1>    
              {/* Tambahin slidernya nanti di wraping disini,aku cuman tambahin div sama flex btw kalau mau
              improve kualitas gambar di dalam Movie List di property width bisa di tambahin cth:width:900px  */}
              <div className="w-full h-full flex flex-nowrap ">
              <MovieList genreId={item.id} />
                </div>
         
            </div>
          )
      )}
    </div>
  );
}

export default ProductList;
