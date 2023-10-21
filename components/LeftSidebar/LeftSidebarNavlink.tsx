import React from 'react'
import { LeftSidebarLinks } from '@/constants/LeftSidebarLinks'
import Link from 'next/link'
import { Button } from '../ui/button'
const LeftSidebarNavlink = () => {
  return (
    <div className='rounded-xl p-4 flex flex-col justify-center gap-2 px-4'>
        {LeftSidebarLinks.map((link) => (
        <Button key={link.id} asChild variant='ghost'>
         <Link
         className='flex !justify-start gap-2'
         href={link.linkto} >
            <img src={link.icon} width={20} height={20} alt={link.value} />
            {link.value}
         </Link>
        </Button>
     ))}
    </div>
  )
}

export default LeftSidebarNavlink