import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from "react";
import { SessionProvider } from "next-auth/react"
import type { Session } from "next-auth"

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps<{ session: Session }>) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  )

}