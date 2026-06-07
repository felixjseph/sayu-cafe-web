import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Sayu Cafe | Start your day early, the Sayu way.',
  description:
    'Sayu Cafe is a warm, minimal cafe experience crafted for early mornings. Specialty coffee, matcha, and seasonal drinks made with care.',
  keywords: ['coffee', 'cafe', 'matcha', 'specialty coffee', 'Sayu', 'morning cafe'],
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Sayu Cafe',
    description: 'Start your day early, the Sayu way.',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
