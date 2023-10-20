'use client'

import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import { Input } from "@/components/ui/input"

const Searchbar = () => {
const [UserSearch, setUserSearch] = useState<string>();


  return (
    <div className='flex items-center bg-slate-100 rounded-lg'>
    <Input
    onChange={(e) => setUserSearch(e.target.value) }
    value={UserSearch}
    className='border-0 no-focus bg-slate-200 outline-none'
    type='text' placeholder='Search Something' />
    
    <button
     onClick={() => alert(UserSearch)}
     className='px-2'>
     <BsSearch />
    </button>


    </div>
  )
}

export default Searchbar