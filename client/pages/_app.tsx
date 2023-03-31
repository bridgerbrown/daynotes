import { UserProvider } from '@auth0/nextjs-auth0/client'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Sans_Pro } from 'next/font/google'
import { AuthContextProvider } from '@/components/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <AuthContextProvider>
          <Component {...pageProps} />
      </AuthContextProvider>
    </UserProvider>
  )
}
