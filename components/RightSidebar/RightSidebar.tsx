import React from 'react'
import RightSidebarGuideList from '../Guides/RightSidebarGuideList'
import TopUsers from './TopUsers'
import { Separator } from '../ui/separator'
import TopTagQuestions from './TopTagQuestions'
import { usePathname } from 'next/navigation'

const RightSidebar = () => {
  return (
    
    <div className='w-2/6'>
      <RightSidebarGuideList/>
      <div className='my-4 px-4'>
      <Separator/>
      </div>
      <TopUsers/>

      <div className='my-4 px-4'>
      <Separator/>
      </div>
      <TopTagQuestions/>
    </div>
  
  )
}

export default RightSidebar