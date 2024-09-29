import Navbar from "../navbar"
import skillpic from "@/app/public/skills.jpeg"
import Image from "next/image"

export default function Skills(){
    return(
      <div className="d3">
        <Navbar />
        <br />
        <h3><b>My Skills In IT</b></h3>
        <br />
        <ul className="u">
        <li>HTML</li>
        <hr/>
        <li>CSS</li>
        <hr/>
        <li>JavaScript</li>
        <hr/>
        <li>Communication</li>
        <hr/>
        </ul>
        <Image src={skillpic} alt="skillPicture" className="img"/>
      </div>
    )
  }