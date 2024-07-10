import React from "react";
import DP from "../assets/dp.jpg";

function Navbar({ title }) {
  return (
    <div
      className="w-full p-3 flex justify-between items-center bottom-2"
      style={{ borderBottom: "1px solid #d1d1d1" }}
    >
      <p className="text-3xl translate-x-80 font-semibold text-[#353535]">
        {title}
      </p>
      <div className="flex justify-center items-center gap-10 ">
        <div className="bell relative cursor-pointer">
          <i className="fa-regular fa-bell scale-150"></i> <div className="p-[6px] absolute top-0 left-2 bg-[#FF4D49] rounded-full"></div>
        </div>
        <div className="flex">
            <div className="relative">
            <div className="p-[6px] absolute bottom-0 right-0 bg-[#72E128] rounded-full"></div>
          <img src={DP} height={35} width={35} className="rounded-full" alt="dp" />
            </div>
          <div className="flex flex-col justify-start items-center w-36">
            <p className="text-[#353535] font-bold">Akshat Jaiswal</p>
            <span className="text-[#969596] font-semibold -translate-x-8">Admin</span>
          </div>
          <i className="cursor-pointer fa-solid fa-chevron-down translate-y-2 text-[#353535] m-3"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
