import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
// import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>

    
  )
}
