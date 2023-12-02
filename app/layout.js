import { Raleway } from 'next/font/google'
import '../styles/globals.css'
import Nav from '@/components/Nav'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'MbaKaro-Distance Learning Guide',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      {/* <Nav/> */}
        {children}
        
      </body>
    </html>
  )
}
