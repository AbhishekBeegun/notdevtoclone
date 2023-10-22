import BigCard from '@/components/Cards/BigCard'
import SmallCard from '@/components/Cards/SmallCard'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen p-4 pt-0'>

      <BigCard/>

      <SmallCard/>

      <SmallCard/>

      <BigCard/>

    </div>
  )
}

export default Page