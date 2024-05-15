import React from 'react'

function Dual() {
  return (
    <>
        <div className='p-4 bg-white w-72 translate-x-32 my-2 shadow-md rounded-2xl flex justify-center items-center gap-3 mx-auto'>
            <div className='p-1 cursor-pointer rounded-lg font-bold bg-[#a584814d] w-32 text-center'><p className='text-[#856562]'>Shipments</p></div>
            <div className='p-1 cursor-pointer rounded-lg font-bold hover:bg-[#a584814d] w-32 text-center'><p className='text-[#856562]'>Containers</p></div>
        </div>
    </>
  )
}

export default Dual