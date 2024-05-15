import React from 'react'
import PDF from '../assets/Pdf.png'

function LatestDocs() {
    const repeatCount = 10;

    return (
        <div className="p-4 px-2 bg-white w-[59%] mx-2 max-h-[420px] rounded-2xl overflow-x-hidden overflow-y-scroll shadow-md">
            <div className="titleBar text-[#353535e0] flex px-5 rounded-xl ">
                <p className="text-lg font-bold text-[#353535]">Latest Documents</p>
            </div>
            <div className="flex justify-center gap-2 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            <img src={PDF} alt="pdf icon" />
            <div className='p-5'>
                <p className='font-bold text-[#353535]'>Packing List</p>
                <span className='font-medium text-sm text-[#4f4f4f]'>Sea job document (IM159075)</span>
            </div>
            <div className='pl-24'>
                <p>Nov, 29, 2023</p>
                <p className='text-end'>10: 27 AM</p>
            </div>
        </div>
        <div className="flex justify-center gap-2 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            <img src={PDF} alt="pdf icon" />
            <div className='p-5'>
                <p className='font-bold text-[#353535]'>Commercial Invoice</p>
                <span className='font-medium text-sm text-[#4f4f4f]'>Sea job document (IM159075)</span>
            </div>
            <div className='pl-24'>
                <p>Nov, 29, 2023</p>
                <p className='text-end'>10: 27 AM</p>
            </div>
        </div>
        <div className="flex justify-center gap-2 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            <img src={PDF} alt="pdf icon" />
            <div className='p-5'>
                <p className='font-bold text-[#353535]'>Bill of Loading</p>
                <span className='font-medium text-sm text-[#4f4f4f]'>Sea job document (IM159075)</span>
            </div>
            <div className='pl-24'>
                <p>Nov, 29, 2023</p>
                <p className='text-end'>10: 27 AM</p>
            </div>
        </div>
            {[...Array(repeatCount)].map((_, index) => (
                <div key={index} className="flex justify-center gap-2 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
                    <img src={PDF} alt="pdf icon" />
                    <div className='p-5'>
                        <p className='font-bold text-[#353535]'>Packing List</p>
                        <span className='font-medium text-sm text-[#4f4f4f]'>Sea job document (IM159075)</span>
                    </div>
                    <div className='pl-24'>
                        <p>Nov, 29, 2023</p>
                        <p className='text-end'>10: 27 AM</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LatestDocs;
