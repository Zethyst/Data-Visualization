import React from "react";
import DonutChart from "./Donut_Chart";
import DataLabels from "./DataLabels";

function Pie_Chart_Analysis() {
  return (
    <div className="py-10 px-1 bg-white w-[76%] shadow-md mx-7 absolute right-0 rounded-2xl">
      <div className="titleBar text-[#353535e0] flex px-5">
        <p className="text-lg font-bold text-[#353535]">Pie Chart Analysis</p>
        <div className="mx-auto flex justify-center items-center gap-10">
          <div className="nav-item flex justify-center items-center gap-2 cursor-pointer hover:text-[#EB5D50]">
            <span class="material-symbols-outlined">directions_boat</span>
            <p>Sea</p>
          </div>
          <div className="nav-item flex justify-center items-center gap-2 cursor-pointer hover:text-[#EB5D50]">
            <span class="material-symbols-outlined rotate-90">flight</span>
            <p>Air</p>
          </div>
          <div className="nav-item flex justify-center items-center gap-2 cursor-pointer hover:text-[#EB5D50]">
            <span class="material-symbols-outlined">local_shipping</span>
            <p>Land</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-12 mt-3">
        <div>
          <DonutChart />
          <p className="text-center font-semibold">Origin Port</p>
        </div>
        <div>
          <DonutChart />
          <p className="text-center font-semibold">Destination Port</p>
        </div>
        <div>
          <DonutChart />
          <p className="text-center font-semibold">Carrier</p>
        </div>
        <div>
          <DonutChart />
          <p className="text-center font-semibold">Consignee or Shipper</p>
        </div>
        <div>
          <DonutChart />
          <p className="text-center font-semibold">Milestones</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-7 mt-3">
        <DataLabels />
        <DataLabels />
        <DataLabels />
        <DataLabels />
        <DataLabels />
      </div>
    </div>
  );
}

export default Pie_Chart_Analysis;
