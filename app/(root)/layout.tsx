import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const Layout = ({children} : { children : React.ReactNode}) => {
  return (
    <main>
      <Navbar />

      <div className='flex'>
        LeftSIdebar
        <section>
         {children}
        </section>
        RightSIdebar
      </div>

    </main>
  )
}

export default Layout