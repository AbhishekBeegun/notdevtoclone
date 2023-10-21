import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/dist/client/link'


const SignInBtn = () => {
  return (
    <Button asChild variant="outline">
        <Link href={'/signin'}>
          Log In
        </Link>
    </Button>
    
  )
}

export default SignInBtn