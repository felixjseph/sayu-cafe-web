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
  title: 'Sayu Café — Start your day early, the Sayu way.',
  description: 'Sayu Café is a warm, minimal café experience crafted for early mornings. Specialty coffee, matcha, and seasonal drinks made with care.',
  generator: 'v0.app',
  keywords: ['coffee', 'café', 'matcha', 'specialty coffee', 'Sayu', 'morning café'],
  openGraph: {
    title: 'Sayu Café',
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
