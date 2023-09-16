'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Navbar = () => {
  const { status, data } = useSession()

  return (
    <div className="flex bg-slate-200 p-5">
      <div className="flex flex-1 gap-5">
        <Link href="/" className="mr-5">
          Next.js
        </Link>
        <Link href="/users">Users</Link>
        <Link href="/products">Products</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/upload">Upload</Link>
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'authenticated' && data && (
        <div>
          {data.user!.name} <Link href="/api/auth/signout">Logout</Link>
        </div>
      )}
      {status === 'unauthenticated' && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  )
}

export default Navbar
