import Link from 'next/link'
import React from 'react'
import {MdAttachMoney} from 'react-icons/md'
import { LeftSidebarCards } from '@/constants/LeftSidebarCards'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const LeftSidebarCardList = () => {

  return (
    <>
    {LeftSidebarCards.map((item) => (
      <div key={item.id} className='bg-slate-100 rounded-xl p-3 mb-4'>

        <TooltipProvider>
            <Tooltip>
            <TooltipTrigger asChild className={`${item.premium ? 'flex' : 'hidden'} mb-2 justify-between p-2 hover:cursor-pointer`}> 
             <div className='text-green-500'>
              <MdAttachMoney size={15}/>
              <p className='text-sm font-semibold'>Premium Ads</p>
             </div>
             
             </TooltipTrigger>
            <TooltipContent>
              <p>Rs 1000 per Ads . Pay me NOW !</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
       

        <Link href={`${item.linkto}`} className='bg-red-500 w-full rounded-lg'>
            <img src={item.imgSrc} className='w-full h-full rounded-lg object-cover hover:scale-[1.02] transition-all ease-in-out' alt='Sponsored Ads Image'/>
        </Link>

        <h3 className={`${item.premium ? 'mb-2' : 'mb-0'} text-lg leading-6 uppercase font-semibold my-2 px-2 text-gray-600`}>{item.title}</h3>

        <p className={`${item.premium ? 'mb-2' : 'mb-0'} text-xs line-clamp-2 px-2 text-gray-400`}>{item.desc}</p>
    
    </div>
        ))}
    </>
  )
}

export default LeftSidebarCardList