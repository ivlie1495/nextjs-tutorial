// import { NextRequest, NextResponse } from 'next/server'
export { default } from 'next-auth/middleware'
// import middleware from 'next-auth/middleware'

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
// export default middleware

export const config = {
  // *: zero or more params
  // +: one or more params
  // ?: zero or one
  matcher: ['/users/:id*'],
}
