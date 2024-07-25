import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Wrapper from '@/components/Wrapper/Wrapper'
import Featured from '@/components/Featured/Featured'
import Button from '@/components/UIComponents/Buttons/Button'
import Buttons from '@/components/UIComponents/Buttons/Buttons'
import HomePage from '@/components/pages/Home/HomePage'
import RoadBet from '@/components/pages/About/About'
// import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };
  return (
    <div className='min-h-screen  '>
      <Wrapper>
      <RoadBet />
        {/* <Navbar /> */}
        {/* <HomePage /> */}
        {/* <Footer /> */}
      </Wrapper>
    </div>
  )
}
