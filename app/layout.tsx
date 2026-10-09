import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trading App',
  description: 'Real-time trading application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
