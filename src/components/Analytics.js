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
        <div className=' absolute mt-5 right-0 w-[80%]  flex'>
            <Milestones/>
            <Timeline/>
        </div>
        <div className=' absolute mt-96 right-0 w-[90%] pl-40 flex flex-wrap'>
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