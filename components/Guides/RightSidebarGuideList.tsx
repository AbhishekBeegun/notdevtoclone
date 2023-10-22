import React from 'react'
import { RightSidebarGuides } from '@/constants/RightSidebarGuides'
import { Button } from '../ui/button'
import Link from 'next/link'


const RightSidebarGuideList = () => {
  return (
    <div className='p-4 bg-purple-50 rounded-xl'>
        <h2 className='text-base font-semibold pl-2 py-4 italic'>Trending Guides / Resources</h2>

        <div className='flex flex-col gap-3'>
        {RightSidebarGuides.map ((item) => (
            <Button className='hover:text-blue-500' key={item.id} asChild variant='ghost'>
                <Link className='flex !justify-start gap-2' href={`/guides${item.linkto}`}>
                    {item.value}
                </Link>
            </Button>
        ))}
        </div>
    </div>
  )
}

export default RightSidebarGuideList