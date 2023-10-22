import BigCard from '@/components/Cards/BigCard'
import PostDetailsContent from '@/components/PostDetails/PostDetailsContent'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-[2000px] border rounded-xl p-4'>
     

     <img className='w-full max-h-[250px] object-cover rounded-xl mb-4' src='https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D' />
     
     <div className='px-24 mb-4'>
     <Separator/>
     </div>

     <PostDetailsContent/>

    </div>
  )
}

export default Page