import { UserProvider } from '@auth0/nextjs-auth0/client'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '@/components/context/AuthContext'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <UserProvider>
        <Head>
          <title>DayNotes</title>
          <meta name="description" content="gNotes" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="DayNotes"/>
          <meta property="og:image" content={"/note-sample.png"}/>
          <meta property="og:description" content="DayNotes date-based note taking platform"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
        </Head>
        <main className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </UserProvider>
    </AuthProvider>
  )
}
