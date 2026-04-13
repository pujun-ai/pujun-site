import type { Metadata } from 'next'
import { Cormorant_Garamond, Noto_Serif_Devanagari } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400'],
  variable: '--font-noto-jp',
})

export const metadata: Metadata = {
  title: 'Pujun Bhatnagar, photographer and nerd',
  description:
    'Pujun Bhatnagar is the CEO & Co-founder of Kintsugi, automating sales tax compliance for modern businesses. Previously Machine Learning at Meta. Stanford, MIT, Harvard.',
  openGraph: {
    title: 'Pujun Bhatnagar, photographer and nerd',
    description:
      'CEO & Co-founder of Kintsugi. Previously ML at Meta. Stanford, MIT, Harvard.',
    url: 'https://itspujun.com',
    siteName: 'Pujun Bhatnagar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pujun Bhatnagar, photographer and nerd',
    description: 'CEO & Co-founder of Kintsugi. Previously ML at Meta.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${notoSerifDevanagari.variable}`}>
      <body>{children}</body>
    </html>
  )
}
