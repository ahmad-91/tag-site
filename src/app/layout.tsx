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
  title: 'tag - تطبيق tag',
  description: 'موقع تعريفي لتطبيق tag',
  keywords: ['tag', 'تطبيق', 'تكنولوجيا'],
  authors: [{ name: 'tag Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlexSansArabic.variable} ${ibmPlexSansArabicPrimary.variable}`}>
      <body className="font-arabicBody antialiased">
        {children}
      </body>
    </html>
  )
}

