import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Wrapper from '@/components/Wrapper/Wrapper'
import Featured from '@/components/Featured/Featured'
// import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-h-screen bg-violet-500 w-full  '>
      <Wrapper>
        
      <Navbar />
      <Featured/>
      <Footer />
      </Wrapper>
    </div>

    
  )
}
