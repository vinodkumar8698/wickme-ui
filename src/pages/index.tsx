import { Inter } from 'next/font/google'
import HomeP from '@/pages/Home/HomeP';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeP />
    </>
  )
}
