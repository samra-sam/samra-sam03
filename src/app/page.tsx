import Navbar from "./navbar"
import HOmePic from "@/app/public/home.jpeg"
import Image from "next/image"
export default function Home(){
  return(
    <div>
      <Navbar />
      <br />
      <h3><b>Welcome To My Resume Site</b></h3> <br />
      <p className="p1">This is my resume Side ...</p><br /><br />
      <div className="div2">
      <h2 className="h">Samra Sam</h2>
      <br />
      <p className="p2">I'm Samra. I am studing Cloud AI Artificial Intelligence , Metaverse & Web 3.0 At Sindh Govornor House.I'm studied HTML, CSS, and JavaScript, and now I'm focusing on Next.js.</p>
    </div>
    <Image src={HOmePic} alt="HomePic" className="img2"/>
    </div>
  )
}