// import { withAuth } from 'next-auth/middleware'

// // More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware

// export default withAuth({
//   callbacks: {
//     authorized({ req, token }) {
//       // `/admin` requires admin role
//       if (req.nextUrl.pathname === '/dashboard') {
//         return token?.userRole === 'admin'
//       }
//       // `/me` only requires the user to be logged in
//       return !!token
//     },
//   },
// })

// export const config = { matcher: ['/dashboard', '/card'] }

export { default } from 'next-auth/middleware'

export const config = { matcher: ['/dashboard'] }
