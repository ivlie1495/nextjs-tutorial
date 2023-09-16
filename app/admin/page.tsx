'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import _ from 'lodash'

const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})

const AdminPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="flex gap-5">
      <button onClick={() => setIsVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
      <button
        onClick={async () => {
          const _ = (await import('lodash')).default

          const users = [{ id: 3 }, { id: 1 }, { id: 2 }]
          const sortedUsers = _.orderBy(users, ['id'])
          console.log(sortedUsers)
        }}
      >
        Sorted Users
      </button>
    </div>
  )
}

export default AdminPage
