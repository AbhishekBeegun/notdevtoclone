import Link from 'next/link';
import React from 'react'
import {BiLogoDevTo} from 'react-icons/bi';
import Searchbar from '../SearchBar/Searchbar';
import UserProfileSmall from '../User/UserProfileSmall';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-64'>
    <div className='flex gap-5'>
    <Link href={'/'}>
        <BiLogoDevTo size={50} />
    </Link>
    <Searchbar/>
    </div>

    <UserProfileSmall />
    </nav>
  )
}

export default Navbar