import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import PostLeftSidebar from '@/components/PostDetails/PostLeftSidebar'
import PostRightSidebar from '@/components/PostDetails/PostRightSidebar'
import React from 'react'

const Layout = ({children} : { children : React.ReactNode}) => {
    return (
      <main className=''>
        <div className='flex justify-center pt-4 relative'>
        <PostLeftSidebar/>  
          <section className='w-full'>
           {children}
          </section>

          <PostRightSidebar/>
        </div>
  
      </main>
    )
  }
  
  export default Layout

