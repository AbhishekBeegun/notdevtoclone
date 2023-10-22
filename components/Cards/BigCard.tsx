import React from 'react'
import ProfileTop from './ProfileTop'
import Metrics from './Metrics'
import CardGallery from './CardGallery'
import CardDesc from './CardDesc'
import Link from 'next/link'

const BigCard = () => {
  return (
    <div className='w-full bg-sky-50 rounded-xl px-6 py-4 mb-4'>
    <ProfileTop/>
    <Link href={'/post-details'} 
    className='h-full'>
        <CardDesc/>
        <CardGallery/>
    </Link>
        <Metrics/>
   </div>
  )
}

export default BigCard