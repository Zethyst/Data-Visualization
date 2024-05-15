import React from 'react'

function Extra_Stats({title}) {
    const repeatCount = 20;

    return (
        <div className="p-4 px-2 bg-white w-[31%] m-3 max-h-[260px] rounded-2xl overflow-x-hidden overflow-y-scroll shadow-md">
            <div className="titleBar text-[#353535e0] flex px-5 mb-2 rounded-xl ">
                <p className="text-lg font-bold text-[#353535]">{title}</p>
            </div>
            <div className="flex justify-between gap-2 w-96 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
                <span className='font-medium text-xs text-[#4f4f4f] py-2'>NHAVA SHEVA, INDIA</span>
            <div className='-translate-x-24'>
                <p className='text-xs'>378</p>
            </div>
        </div>
        <div className="flex justify-between gap-2 w-96 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            
                <span className='font-medium text-xs text-[#4f4f4f] py-2'>HONG KONG, HONG KONG</span>
            
            <div className='-translate-x-24'>
                <p className='text-xs'>70</p>

            </div>
        </div>
        <div className="flex justify-between gap-2 w-96 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            
                <span className='font-medium text-xs text-[#4f4f4f] py-2'>YANTIAN, CHINA</span>
            
            <div className='-translate-x-24'>
                <p className='text-xs'>48</p>

            </div>
        </div>
        <div className="flex justify-between gap-2 w-96 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            
                <span className='font-medium text-xs text-[#4f4f4f] py-2'>DALIAN, CHINA</span>
            
            <div className='-translate-x-24'>
                <p className='text-xs'>29</p>

            </div>
        </div>
        <div className="flex justify-between gap-2 w-96 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            
                <span className='font-medium text-xs text-[#4f4f4f] py-2'>SHANGHAI, 31, CHINA</span>
            
            <div className='-translate-x-24'>
                <p className='text-xs'>26</p>

            </div>
        </div>
        <div className="flex justify-between gap-2 w-96 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
            
                <span className='font-medium text-xs text-[#4f4f4f] py-2'>LONDON, GATEWAY PORT, UK</span>
            
            <div className='-translate-x-24'>
                <p className='text-xs'>23</p>
            </div>
        </div>
            {[...Array(repeatCount)].map((_, index) => (
                <div key={index} className="flex justify-between w-96 gap-2 mx-6 items-center hover:bg-[#F1F1F1] cursor-pointer" style={{borderBottom:"1px solid #D9D9D9"}}>
                        <span className='font-medium text-xs text-[#4f4f4f] py-2'>Sea job document</span>
                    <div className='-translate-x-24'>
                        <p className='text-xs'>378</p>
        
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Extra_Stats;
