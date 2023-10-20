import './globals.css'
import type { Metadata } from 'next'
import { ToastRender } from '@/components/Toast'
import Providers from '@/modules/Providers'
import Navbar from '@/modules/NavBar'

export const metadata: Metadata = {
  title: '🍉 MyJam',
  applicationName: '🍉 MyJam',
  keywords: ['streaming', 'music', 'audio', 'MyJam'],
  description:
    'MyJam is a decentralized live-streaming platform that brings musicians and listeners together, empowering artists to stream connections with audiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <>
          <ToastRender />
          <Navbar />
          <Providers>
            <div className="top-[80px] min-h-[calc(100vh-80px)]">
              {children}
            </div>
          </Providers>
        </>
      </body>
    </html>
  )
}
