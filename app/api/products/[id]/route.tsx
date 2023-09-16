import { NextRequest, NextResponse } from 'next/server'
import schema from '../schema'

// add request to prevent caching
export function GET(
  _: NextRequest,
  {
    params: { id },
  }: {
    params: {
      id: number
    }
  }
) {
  if (id > 10) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json({ id: 1, name: 'Milk' })
}

export async function PUT(
  request: NextRequest,
  {
    params: { id },
  }: {
    params: {
      id: number
    }
  }
) {
  const body = await request.json()

  const validation = schema.safeParse(body)

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 })
  }

  if (id > 10) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json({ id: 1, name: body.name })
}

export function DELETE(
  _: NextRequest,
  {
    params: { id },
  }: {
    params: {
      id: number
    }
  }
) {
  if (id > 10) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  return NextResponse.json({})
}
