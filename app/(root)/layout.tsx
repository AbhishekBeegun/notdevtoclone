import LeftSidebar from '@/components/LeftSidebar/LeftSidebar'
import RightSidebar from '@/components/RightSidebar/RightSidebar'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Layout = ({children} : { children : React.ReactNode}) => {
  return (
    <main className='max-w-7xl mx-auto relative'>
      <Navbar />

      <div className='flex justify-center pt-4'>
        <LeftSidebar />
        <section className='w-4/6'>
         {children}
        </section>
        <RightSidebar/>
      </div>

    </main>
  )
}

export default Layout