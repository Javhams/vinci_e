import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vinci_e',
  description: 'Vinci_electronic Service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 
      font-poppins' suppressHydrationWarning={true}>
        {children}</body>
    </html>
  )
}
