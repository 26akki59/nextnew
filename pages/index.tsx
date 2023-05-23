import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './component/header'
import Footer from './component/footer'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="container">
     <Header></Header>

     <h1>Mini Project</h1>
     
     <Footer></Footer>
    </main>
  )
};


