import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Energy Oganla | Creative Executive Assistant & Project Manager',
  description: 'Energy Oganla brings creative direction, executive support and project management together.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/alison.jpeg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/alison.jpeg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/alison.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/alison.jpeg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
