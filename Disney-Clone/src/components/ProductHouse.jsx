import React from "react";
import disney from "../assets/image/disney.png";
import marvel from "../assets/image/marvel.png";
import nationalGen from "../assets/image/nationalG.png";
import pixar from "../assets/image/pixar.png";
import starwar from "../assets/image/starwar.png";

import disneyVideo from "../assets/Video/disney.mp4";
import marvelVideo from "../assets/Video/marvel.mp4";
import nationalVideo from "../assets/Video/national-geographic.mp4";
import pixarvideo from "../assets/Video/pixar.mp4";
import starwarVideo from "../assets/Video/star-wars.mp4";

function ProductHouse() {
  const productHouse = [
    {
      id: 1,
      image: disney,
      video: disneyVideo,
    },
    {
      id: 2,
      image: marvel,
      video: marvelVideo,
    },
    {
      id: 3,
      image: nationalGen,
      video: nationalVideo,
    },
    {
      id: 4,
      image: pixar,
      video: pixarvideo,
    },
    {
      id: 5,
      image: starwar,
      video: starwarVideo,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 px-5 md:px-16 p-2">
      {productHouse.map((item) => (
        <div
          className="border-2 border-gray-600 rounded-lg hover:scale-105 duration-300 ease-in-out cursor-pointer relative shadow-lg
    shadow-gray-800 "
        >
          <img src={item.image} alt="productHouse" className="w-full z-[1]" />
          <video
            src={item.video}
            autoPlay
            loop
            muted
            className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-55 duration-300 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductHouse;
