import HomePage from '@/component/HomePage'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  )
}
