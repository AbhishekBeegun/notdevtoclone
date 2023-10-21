'use client'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import SignInBtn from "../Auth/SignInBtn";
import SignUpBtn from "../Auth/SignUpBtn";

export default function Home() {

  const { isLoaded, isSignedIn, user } = useUser();

  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }
  return (
    <div className="flex items-center gap-3">

      {isSignedIn ? 
      <>
      <UserButton showName/>
      </>
      :
      <>
      <SignInBtn/>
      <SignUpBtn/>
      </>
      }
      
    </div>
  )
}