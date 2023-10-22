import React from 'react'
import ProfileTop from './ProfileTop'
import Metrics from './Metrics'
import CardDesc from './CardDesc'
import Link from 'next/link'

const SmallCard = () => {
  return (
    <div className='w-full bg-orange-100 rounded-xl px-6 py-4 mb-4'>
    <ProfileTop/>
    <Link href={'/post'}
     className='h-full'>
    <CardDesc/>
    </Link>
    <Metrics/>
    </div>
  )
}

export default SmallCard