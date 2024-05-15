import React from "react";
import Annoucement from '../assets/annoucement.png'

function Annoucements() {
  return (
    <div className="p-4 px-2 bg-white w-[56%] mx-7 max-h-[420px] rounded-2xl overflow-x-hidden overflow-y-scroll shadow-md">
      <div className="titleBar text-[#353535e0] flex flex-col  px-5 rounded-xl ">
        <p className="text-lg font-bold text-[#353535]">Annoucements</p>
        <p className="text-md font-semibold text-[#4a4949] my-8">Soon you will see latest announcements/new in this section.</p>
        <img src={Annoucement} className="h-48 w-44 self-center mt-5" alt="Annoucement" />
      </div>
    </div>
  );
}

export default Annoucements;
