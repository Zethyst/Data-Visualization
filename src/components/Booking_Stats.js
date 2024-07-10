import React from "react";

function Booking_Stats() {
  return (
    <div className="flex justify-end items-center px-14 pt-4 w-full gap-7">
      <div className="px-3 py-5 bg-white rounded-2xl shadow-md w-72 flex gap-7 justify-center items-center">
        <div className="flex flex-col gap-2 -translate-x-4">
          <span className="text-xs text-[#353535] font-medium">
            Total Bookings
          </span>
          <p className="text-lg font-bold text-[#353535]">501 Bookings</p>
        </div>
        <div className="bg-[#6B120A] p-5 flex justify-center items-center text-white rounded-2xl translate-x-3">
          <span class="material-symbols-outlined scale-110 ">dvr</span>
        </div>
      </div>
      <div className="px-3 py-5 bg-white rounded-2xl shadow-md w-72 flex gap-7  justify-center items-center">
        <div className="flex flex-col gap-2 -translate-x-4">
          <span className="text-xs text-[#353535] font-medium">
            Bookings Utilized
          </span>
          <p className="text-lg font-bold text-[#353535]">501 Bookings</p>
        </div>
        <div className="bg-[#f59e5b] p-5 flex justify-center items-center text-white rounded-2xl translate-x-3">
          <span class="material-symbols-outlined scale-110 ">fact_check</span>
        </div>
      </div>
      <div className="px-9 py-5 bg-white rounded-2xl shadow-md w-72 flex gap-7  justify-between items-center">
        <div className="flex flex-col gap-2 -translate-x-4">
          <span className="text-xs text-[#353535] font-medium">
            Booking Cancelled
          </span>
          <p className="text-lg font-bold text-[#353535]">0 Bookings</p>
        </div>
        <div className="bg-[#EB5D50] p-5 flex justify-center items-center text-white rounded-2xl translate-x-3">
          <span class="material-symbols-outlined scale-110 ">block</span>
        </div>
      </div>
      <div className="px-9 py-5 bg-white rounded-2xl shadow-md w-72 flex gap-7  justify-between items-center relative">
        <div className="flex flex-col gap-2 -translate-x-4">
          <span className="text-xs text-[#353535] font-medium">
            Utilization
          </span>
          <p className="text-lg font-bold text-[#353535]">100%</p>
        </div>
        <div className="bg-[#7BB896] p-5 flex justify-center items-center text-white rounded-2xl translate-x-3">
          <span class="material-symbols-outlined scale-110 ">incomplete_circle</span>
        </div>
      </div>
    </div>
  );
}

export default Booking_Stats;
