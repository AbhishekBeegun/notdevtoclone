import React from 'react'

const CardGallery = () => {
  return (
    <div className='flex gap-4 mt-4'>
  
  
        <img 
        className='rounded-2xl max-h-[250px] w-3/4 object-cover'
        src='https://images.unsplash.com/photo-1510751007277-36932aac9ebd?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MzM1NDM0fHxlbnwwfHx8fHw%3D&w=1000' />

        <img 
        className='rounded-2xl max-h-[250px] w-1/4 object-cover'
        src='https://images.unsplash.com/photo-1510751007277-36932aac9ebd?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8MzM1NDM0fHxlbnwwfHx8fHw%3D&w=1000' />
    </div>
  )
}

export default CardGallery