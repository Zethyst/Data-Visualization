import React from 'react'
import Options from './Options'
import Dual from './Dual'
import Filter from './Filter'
import Milestones from './Milestones'
import Timeline from './Timeline'
import Extra_Stats from './Extra_Stats'
import Report from './Report'

function Analytics() {
  return (
    <>
        <Options/>
        <Dual/>
        <Filter/>
        <div className=' mt-5  w-[99%] pl-72 mx-auto  flex'>
            <Milestones/>
            <Timeline/>
        </div>
        <div className=' w-full pl-72 mx-3 my-2 flex flex-wrap'>
            <Extra_Stats title="Loading"/>
            <Extra_Stats title="Discharge"/>
            <Extra_Stats title="Delivery"/>
            <Extra_Stats title="Shipper"/>
            <Extra_Stats title="Consignee"/>
            <Extra_Stats title="Carrier"/>
        </div>
        <Report/>

    </>
  )
}

export default Analytics