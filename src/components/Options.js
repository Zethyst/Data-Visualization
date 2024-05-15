import React from 'react'

function Options() {
  return (
    <div className="mx-auto pl-64 text-[#353535e0] flex justify-center items-center gap-10">
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
  )
}

export default Options