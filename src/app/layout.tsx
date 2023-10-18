import './globals.css'
import type { Metadata } from 'next'
import { ToastRender } from '@/components/Toast'
import JotaiProvider from '@/modules/JotaiProvider'
import Navbar from '@/modules/NavBar'

export const metadata: Metadata = {
  title: 'MyJam',
  description: 'Stream what you love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <>
            <ToastRender />
            <Navbar />
            {children}
          </>
        </JotaiProvider>
      </body>
    </html>
  )
}
