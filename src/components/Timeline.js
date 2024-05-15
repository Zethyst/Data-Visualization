import React from 'react'
import TimelineChart from './Timeline_Chart'
function Timeline() {
  return (
    <div className="p-6 px-2 bg-white w-[58%] mx-5 max-h-[420px] rounded-2xl shadow-md">
    <div className="titleBar text-[#353535e0] flex flex-col  px-5 rounded-xl ">
      <p className="text-lg font-bold text-[#353535] pb-2">Timelines</p>
        <TimelineChart/>
    </div>
  </div>
  )
}

export default Timeline