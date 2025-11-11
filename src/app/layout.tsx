import type { Metadata } from 'next'
import { IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'

const ibmPlexSansArabicPrimary = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-latin',
  fallback: ['IBM Plex Sans Arabic', 'sans-serif'],
  display: 'swap',
})

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-arabic',
  fallback: ['IBM Plex Sans Arabic', 'sans-serif'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'تطبيق تاق   | tag app',
  description: 'تاق ما يخصملك، تاق يعزك',
  keywords: ['tag', 'تطبيق', 'تاق' , 'محفظة تاق' , 'محفظة تاق ما يخصملك' , 'محفظة تاق يعزك' ],
  authors: [{ name: 'tag Team' }],
  icons: {
    icon: '/icon-black.svg',
    shortcut: '/icon-black.svg',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`dark ${ibmPlexSansArabic.variable} ${ibmPlexSansArabicPrimary.variable}`}>
      <body className="font-arabicBody antialiased dark">
        {children}
      </body>
    </html>
  )
}

