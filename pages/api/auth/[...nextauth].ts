import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import NaverProvider from "next-auth/providers/naver"

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
        clientId: process.env.NAVER_CLIENT_ID,
        clientSecret: process.env.NAVER_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)