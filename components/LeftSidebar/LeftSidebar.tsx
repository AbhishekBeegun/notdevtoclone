import React from 'react'
import LeftSidebarNavlink from './LeftSidebarNavlink'
import LeftSidebarCardAdsList from '../Ads/LeftSidebarCardAdsList'
import { LeftSidebarCards } from '@/constants/LeftSidebarCards'
import { Separator } from "@/components/ui/separator"
import Footer from '../Footer/Footer'

const LeftSidebar = () => {

    return (
    <div className='w-2/6'>
    <LeftSidebarNavlink />
    <div className='px-6'>
    <Separator className='mb-6' />
    </div>
    <LeftSidebarCardAdsList/>

    <div className='px-6'>
    <Separator className='mb-6' />
    </div>

    <Footer/>
    </div>
  )
}

export default LeftSidebar