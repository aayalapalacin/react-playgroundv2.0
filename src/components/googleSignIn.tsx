'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Link from "next/link";
import { signOut } from "next-auth/react"


export const GoogleSignIn = () => {
  const { data: session, status } = useSession()


  

  if (status === "loading") return <p>Loading...</p>

  const userProfile = session?.user

  return (
    <div className="google-signin-container">
      <div className='user sign in'>
        {userProfile ? (
          <h1>Hi, {userProfile.name}</h1>
        ) : (
          <p>No user signed in</p>
        )}
      </div>
      <div className='google-signin-btn'>
        <Link
          href="/api/auth/signin"
        >
          Sign In
        </Link>
      </div>
      <div className='google-signout-btn'>
       <button     
          onClick={() => signOut()}>
          Sign out
      </button>
      </div>
    </div>
  )
}
