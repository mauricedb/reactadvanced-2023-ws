import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Advanced London</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className={cn(
          'container relative flex min-h-screen flex-col bg-background antialiased',
          inter.className,
        )}
      >
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="container flex h-16">
            {' '}
            <div className="mr-4 flex">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="inline-block font-bold">
                  React Advanced London
                </span>
              </Link>
            </div>
          </div>
        </header>

        <Component {...pageProps} />
      </div>
    </>
  )
}
