import { Inter } from 'next/font/google';
import AuthSessionProvider from '../components/auth/SessionProvider';
import '../styles/_index.scss'; // Import your global styles

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Train5D',
  description: 'Wellness Coaching for Beginners',
  icons: {
    icon: [
      { url: '/assets/icons/favicon.svg', type: 'image/svg+xml' }
    ]
  }
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