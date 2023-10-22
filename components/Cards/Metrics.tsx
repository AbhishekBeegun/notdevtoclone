'use client'
import React from 'react'
import {AiFillEye} from 'react-icons/ai'
import {FcLikePlaceholder} from 'react-icons/fc'
import {FcLike} from 'react-icons/fc'
import { useState } from 'react'
import { BiSolidCommentDetail } from 'react-icons/bi'
const Metrics = () => {

  const [Liked, setLiked] = useState(true);

  return (
    <div className='flex items-center gap-3 mt-4 '>
      <div className='flex items-center gap-1 text-gray-400'>
        <AiFillEye size={20}/>
        <p className='text-xs'>6578</p>
      </div>
      
      {!Liked 
      ? 
      <button
      onClick={() => setLiked(!Liked)}
      className='flex items-center gap-1 text-red-400'>
        <FcLike size={20}/>
        <p className='text-xs'>Liked</p>
      </button> 
      :
      <button
      onClick={() => setLiked(!Liked)}
       className='flex items-center gap-1 text-gray-400'>
        <FcLikePlaceholder size={20}/>
        <p className='text-xs'>Like</p>
      </button>
    }

      <div className='flex items-center gap-1 text-gray-400'>
        <BiSolidCommentDetail size={18}/>
        <p className='text-xs'>Comment</p>
      </div>
    </div>
  )
}

export default Metrics