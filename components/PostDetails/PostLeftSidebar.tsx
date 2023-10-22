import React from 'react'
import { MdOutlineAddReaction } from 'react-icons/md'
import { GoCommentDiscussion } from 'react-icons/go'
import { BsBookmarkPlus } from 'react-icons/bs'

const PostLeftSidebar = () => {
  return (
    <div className='mt-24 w-1/6'>
        <div className='flex flex-col justify-center gap-2 items-center mt-6'>
            <MdOutlineAddReaction size={30}/>
            <p>242</p>
        </div>

        <div className='flex flex-col justify-center gap-2 items-center mt-6'>
            <GoCommentDiscussion size={30}/>
            <p>10</p>
        </div>

        <div className='flex flex-col justify-center gap-2 items-center mt-6'>
            <BsBookmarkPlus size={30}/>
            <p>9</p>
        </div>
    </div>
  )
}

export default PostLeftSidebar