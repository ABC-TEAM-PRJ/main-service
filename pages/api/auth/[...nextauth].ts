import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"

interface ProviderType {
  clientId: string
  clientSecret: string
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider(<ProviderType>{
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET
    }),
    KakaoProvider(<ProviderType>{
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)