import React from 'react'

function Filter() {
  return (
    <div className='bg-white shadow-md p-3 flex justify-start items-center rounded-lg w-[79%] mx-auto translate-x-36'>
        <label htmlFor="type" className=' text-sm font-bold text-[#353535] px-3'>Type</label>
        <div className='text-sm rounded-3xl w-52 h-11 p-1 flex justify-start items-center relative cursor-pointer' style={{border:'1px solid #D9D9D9'}}><p className='text-[#969596] pl-3'>Select</p><i className="absolute right-2 bottom-2 cursor-pointer fa-solid fa-chevron-down translate-y-2 text-[#EB5D50] m-3"></i></div>
        <label htmlFor="type" className=' text-sm font-bold text-[#353535] px-3'>Date</label>
        <div className='text-sm rounded-3xl w-52 h-11 p-1 flex justify-start items-center relative cursor-pointer' style={{border:'1px solid #D9D9D9'}}><p className='text-[#969596] pl-3'>Select</p><i className="absolute right-2 bottom-2 cursor-pointer fa-solid fa-chevron-down translate-y-2 text-[#EB5D50] m-3"></i></div>
        <label htmlFor="type" className=' text-sm font-bold text-[#353535] px-3'>Period</label>
        <div className='text-sm rounded-3xl w-52 h-11 p-1 flex justify-start items-center relative cursor-pointer' style={{border:'1px solid #D9D9D9'}}><p className='text-[#969596] pl-3'>Select</p><i className="absolute right-2 bottom-2 cursor-pointer fa-solid fa-chevron-down translate-y-2 text-[#EB5D50] m-3"></i></div>
        <button className='text-[#6B120A] hover:text-white hover:bg-[#6B120A] rounded-3xl w-24 h-11 p-2 font-semibold mx-3 'style={{border:'2px solid #6B120A'}}>Cancel</button>
        <button className='bg-[#6B120A] hover:bg-[#5a2222] rounded-3xl w-16 h-11 p-2 font-semibold text-white 'style={{border:'2px solid #6B120A'}}>Go</button>
    </div>
  )
}

export default Filter