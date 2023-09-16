import Link from 'next/link'
import { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import Image from 'next/image'

import dummy from '@/public/images/dummy.png'

import ProductCard from './components/ProductCard'
import { authOptions } from './api/auth/authOptions'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Product Title',
    description: 'Product Description',
  }
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <main>
      <h1
      // className="font-poppins"
      >
        Hello {session && session.user?.name}!
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard />
      <Image src={dummy} alt="Coffee" />
      <div className="relative h-screen">
        <Image
          src="https://bit.ly/react-cover"
          alt="React Cover"
          fill
          className="object-cover"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={100}
          priority
          // sizes="100vw"
          // style={{ objectFit: 'cover' }}
          // width={300}
          // height={170}
        />
      </div>
    </main>
  )
}
