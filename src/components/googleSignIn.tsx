'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export const GoogleSignIn = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p className="text-gray-500">Loading...</p>

  const userProfile = session?.user
  
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-6 text-center">
      <div>
        {userProfile ? (
          <div className='flex'>
            {
            userProfile.image !== null ?
              <img className='rounded-[50%]' src={userProfile.image}/>
              :
              ""
            }
            <h1 className="text-2xl font-semibold text-gray-800">
              Hi, {userProfile.name}
            </h1>
          </div>
        ) : (
          <p className="text-gray-500">No user signed in</p>
        )}
      </div>

      <div className="flex justify-center gap-4">
        {!userProfile && (
          <Link
            href="/api/auth/signin"
            className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition"
          >
            Sign In with Google
          </Link>
        )}

        {userProfile && (
          <button
            onClick={() => signOut()}
            className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  )
}
