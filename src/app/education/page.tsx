import Navbar from "../navbar"
import Image from "next/image"
import education from '@/app/public/education.jpeg'
 
export default function Education(){
    return(
      <div className="d4">
        <Navbar />
        <h3><b>Education</b></h3>
        <br />
        <p className="p3">Matric: ABC School </p>
        <hr />
        <p className="p3">Inter: ABC College</p>
        <hr />
        <p className="p3">Masters: ABC University</p>
        <hr />
        <Image src={education} alt="image" className="img"/>
      </div>
    )
  }