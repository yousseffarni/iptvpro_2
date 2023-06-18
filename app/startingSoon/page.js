import Image from 'next/image'
import { Inter } from 'next/font/google';
import StartingSoon from "../../Components/StartingSoon";

const inter = Inter({ subsets: ['latin'] })

export default function StartingSoonPage() {

  return (
    <div className="Home" style={{height: "100vh",display: "flex", alignItems: "center"}}>
      <StartingSoon/>
    </div>
  )
}
