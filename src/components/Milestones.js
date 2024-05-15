import React from 'react'
import PieChart from './Pie_Chart'
function Milestones() {
  return (
    <div className="p-6 px-2 bg-white w-[58%] mx-5 max-h-[420px] rounded-2xl shadow-md">
    <div className="titleBar text-[#353535e0] flex flex-col  px-5 rounded-xl ">
        <div className='flex justify-between items-start'>
      <p className="text-lg font-bold text-[#353535] pb-2">Milestones</p>
        <div className='rounded-xl uppercase py-2 px-6 flex justify-center items-center font-semibold -translate-y-2 text-sm text-[#969596]' style={{border:'1px solid #D9D9D9'}}><p>In-Transit (463)</p></div>
    </div>

      <PieChart/>
    </div>
  </div>
  )
}

export default Milestones