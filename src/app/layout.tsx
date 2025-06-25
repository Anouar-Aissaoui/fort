import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fortnite Battle Royale - Generator',
  description: 'Fortnite Battle Royale - Generator',
  keywords: '',
  authors: [{ name: '' }],
  themeColor: '#344b73',
  other: {
    'msapplication-navbutton-color': '#344b73',
    'apple-mobile-web-app-status-bar-style': '#344b73'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/img/favicon.ico" />
        <link 
          href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700" 
          rel="stylesheet" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}