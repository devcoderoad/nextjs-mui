import NextAuth, { User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
// import { API_LOGIN } from '@/config/endpoint'
// import { PAGE_ROUTES } from '@/config/constants'

/* 
  secret: process.env.SECRET,
  // Enable debug messages in the console if you are having problems
  debug: false,
*/

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {}, // Blank if you want your wanted a custom form
      authorize: async (credentials: any, req: any) => {
        try {
          const res = await fetch(
            `${process.env.NEXTAUTH_URL}/api/service/auth`,
            {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { 'Content-Type': 'application/json' },
            }
          )

          const json = await res.json()

          if (res.ok && json.token) {
            const user = {
              id: json.id,
              email: json.email,
              fullName: json.fullName,
              phoneNumber: json.phoneNumber,
              token: json.token,
              role: json.role,
            }
            return user
          }
          // return new Error('Login failed: User not found')
          return null
        } catch (error: any) {
          throw new Error('Login failed: ' + error.message)
        }
      },
    }),
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
})
