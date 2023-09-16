import { NextRequest, NextResponse } from 'next/server'

import prisma from '@/prisma/client'
import schema from './schema'

// add request to prevent caching
export async function GET(_: NextRequest) {
  // return NextResponse.json([
  //   { id: 1, name: 'Ivan' },
  //   { id: 2, name: 'John' },
  // ])

  const users = await prisma.user.findMany()
  return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  })

  if (user) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  })

  return NextResponse.json(newUser, { status: 201 })

  // if (!body.name) {
  //   return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  // }

  // return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}
