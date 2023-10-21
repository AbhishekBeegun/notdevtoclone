import Link from 'next/link';
import React from 'react'
import {BiLogoDevTo} from 'react-icons/bi';
import Searchbar from '../SearchBar/Searchbar';
import UserProfileSmall from '../User/UserProfileSmall';

const Navbar = () => {
  return (
    <nav className='mx-auto sticky top-0 z-10 bg-white w-full shadow px-6 py-2 rounded-b-lg'>
    <div className='flex items-center justify-between'>

    <div className='flex gap-5'>
    <Link href={'/'}>
        <BiLogoDevTo size={50} />
    </Link>
    <Searchbar/>
    </div>

    <UserProfileSmall />
    </div>
    </nav>
  )
}

export default Navbar