import { UserProvider } from '@auth0/nextjs-auth0/client'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Sans_Pro } from 'next/font/google'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
