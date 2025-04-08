// File: app/layout.tsx
import { Inter } from 'next/font/google';
import AuthSessionProvider from '../components/auth/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Train5D',
  description: 'Wellness Coaching for Beginners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  )
}