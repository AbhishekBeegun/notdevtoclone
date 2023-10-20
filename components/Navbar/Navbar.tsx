import Link from 'next/link';
import React from 'react'
import {BiLogoDevTo} from 'react-icons/bi';
import Searchbar from '../SearchBar/Searchbar';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-evenly'>
    <Link href={'/'}>
        <BiLogoDevTo size={50} />
    </Link>
    <Searchbar/>

    icons

    Profile
    </nav>
  )
}

export default Navbar