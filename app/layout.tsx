import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'Sayu Café | Coffee & Matcha in San Fernando, Cebu',
  description:
    'Explore Sayu Café in San Fernando, Cebu. Browse coffee, matcha, and pastries, then send a pre-order request through the café’s official Messenger.',
  keywords: ['coffee', 'cafe', 'matcha', 'specialty coffee', 'Sayu', 'morning cafe'],
  icons: {
    icon: '/sayu_sun.png',
    apple: '/sayu_sun.png',
  },
  openGraph: {
    title: 'Sayu Café | San Fernando, Cebu',
    description: 'Browse the menu and message Sayu Café to request a pre-order. The café confirms availability and pickup details.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable} font-sans antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  )
}
