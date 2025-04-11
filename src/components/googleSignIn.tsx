'use client'

import { useEffect } from 'react'
import { useSession } from 'next-auth/react'

export const GoogleSignIn = () => {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (session) {
      // Save only account/profile-like info to localStorage
      const userData = {
        name: session.user?.name,
        email: session.user?.email,
        image: session.user?.image,
      }
      localStorage.setItem("userProfile", JSON.stringify(userData))
    }
  }, [session])

  if (status === "loading") return <p>Loading...</p>

  const userProfile = session?.user

  return (
    <div>
      {userProfile ? (
        <h1>Hi, {userProfile.name}</h1>
      ) : (
        <p>No user signed in</p>
      )}
    </div>
  )
}
