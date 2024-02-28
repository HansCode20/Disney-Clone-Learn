import React from "react";
import logo from "../assets/image/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          alt="logo"
          className="w-[90px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8 ">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5 ">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
        </div>
        {/* menambahkan event onClick dan mengubah nilai toggle */}
        <div className=" md:hidden " onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {/* menampilkan menu dropdown berdasarkan toggle */}
          {toggle && (
            <div className="absolute mt-3 p-3 border-[1px] bg-[#121212] border-gray-700 px-5 py-4">
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div>
          )}
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        alt="Foto"
        className="w-[40px]  rounded-full"
      />
    </div>
  );
}

export default Header;
