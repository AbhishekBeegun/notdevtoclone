import React from 'react'
import {PiShootingStar} from 'react-icons/pi'
import { badgeVariants } from "@/components/ui/badge"
import Link from 'next/link'

const TopUsers = () => {
  return (
    <div>
        <div className='px-4 flex items-center gap-3 text-yellow-400'>
            <h2 className='text-black font-bold text-2xl'>Top Users</h2>
            <div className='animate-pulse'>
            <PiShootingStar size={25}/>
            </div>
        </div>


        <div className='flex items-center justify-between px-4 mt-4'>
         <div className='flex items-center gap-3'>
         <img src='https://avatars.githubusercontent.com/u/124599?v=4'  className='rounded-full h-10 w-10' />
         <div>
          <p className='text-sm font-semibold'>Abhishek Beegun</p>
          <p className='text-xs text-gray-500'>20 Posts</p>
         </div>
         </div>

     
         <Link href={''} className={badgeVariants({ variant: "outline" })}>See more</Link>
      
        </div>

        <div className='flex items-center justify-between px-4 mt-4'>
         <div className='flex items-center gap-3'>
         <img src='https://avatars.githubusercontent.com/u/124599?v=4'  className='rounded-full h-10 w-10' />
         <div>
          <p className='text-sm font-semibold'>Abhishek Beegun</p>
          <p className='text-xs text-gray-500'>20 Posts</p>
         </div>
         </div>

     
         <Link href={''} className={badgeVariants({ variant: "outline" })}>See more</Link>
      
        </div>
         
    </div>
  )
}

export default TopUsers