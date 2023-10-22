import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ProfileTop = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-3'>
        <img src='https://avatars.githubusercontent.com/u/124599?v=4' className='rounded-full h-10 w-10' />

        <div>
          <p className='text-sm font-semibold'>Abhishek Beegun</p>
          <p className='text-xs text-gray-500'>2 hours ago</p>
        </div>
      </div>

      <div>
        <BsThreeDotsVertical/>
      </div>
    </div>
  )
}

export default ProfileTop