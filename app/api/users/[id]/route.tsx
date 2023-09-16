import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'
import prisma from '@/prisma/client'

// add request to prevent caching
export async function GET(
  _: NextRequest,
  {
    params: { id },
  }: {
    params: {
      id: string
    }
  }
) {
  // if (id > 10) {
  //   return NextResponse.json({ error: 'User not found' }, { status: 404 })
  // }

  // return NextResponse.json({ id: 1, name: 'Ivan' })

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json(user)
}

export async function PUT(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: {
      id: string
    }
  }
) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  })

  return NextResponse.json(updatedUser, { status: 200 })

  // if (!body.name) {
  //   return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  // }

  // if (id > 10) {
  //   return NextResponse.json({ error: 'User not found' }, { status: 404 })
  // }

  // return NextResponse.json({ id: 1, name: body.name })
}

export async function DELETE(
  _: NextRequest,
  {
    params: { id },
  }: {
    params: {
      id: string
    }
  }
) {
  // if (id > 10) {
  //   return NextResponse.json({ error: 'User not found' }, { status: 404 })
  // }

  // return NextResponse.json({})

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  })

  return NextResponse.json({})
}
