import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/dist/client/link'
const SignUpBtn = () => {
  return (
    <Button asChild 
    className='bg-black text-white'
    >
       <Link href={'/signup'}>
        Create Account
       </Link>
     </Button>
  )
}

export default SignUpBtn