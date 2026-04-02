import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Casa Mel Rosa',
  description: 'Duas experiências únicas para transformar aniversários em memórias inesquecíveis. Conheça a Casa Rosa e a Casa Amarela.',
  keywords: ['festa infantil', 'aniversário', 'casa de festas', 'spa infantil', 'festa do pijama', 'limousine', 'Porto Alegre'],
  authors: [{ name: 'Casa Mel Rosa' }],

  icons: {
  icon: [
    { url: '/favicon.ico' },
  ],
  shortcut: '/favicon.ico',
  apple: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#e879a9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
