import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono, Noto_Serif_Devanagari } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-dm-mono',
})

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400'],
  variable: '--font-noto-jp',
})

export const metadata: Metadata = {
  title: 'Pujun Bhatnagar — CEO, Builder, Photographer',
  description:
    'Pujun Bhatnagar is the CEO & Co-founder of Kintsugi, automating sales tax compliance for modern businesses. Previously Machine Learning at Meta. Stanford, MIT, Harvard.',
  openGraph: {
    title: 'Pujun Bhatnagar — CEO, Builder, Photographer',
    description:
      'CEO & Co-founder of Kintsugi. Previously ML at Meta. Stanford, MIT, Harvard.',
    url: 'https://itspujun.com',
    siteName: 'Pujun Bhatnagar',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pujun Bhatnagar — CEO, Builder, Photographer',
    description: 'CEO & Co-founder of Kintsugi. Previously ML at Meta.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} ${notoSerifDevanagari.variable}`}>
      <body>{children}</body>
    </html>
  )
}
