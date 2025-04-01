import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/global.scss'

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] })

// Metadata for the site
export const metadata: Metadata = {
  title: 'Train5D',
  description: 'Wellness Coaching for Beginners',
}

// Root layout must be a default export and include html and body tags
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}