import { Suspense } from 'react'
import Link from 'next/link'

import UserTable from './UserTable'

interface Props {
  searchParams: {
    sortOrder: string
  }
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <Link href="/users/new" className="btn">
        New User
      </Link>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
      <UserTable sortOrder={sortOrder} />
      {/* </Suspense> */}
    </>
  )
}

export default UsersPage
