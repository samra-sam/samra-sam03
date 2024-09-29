import Navbar from "../navbar";
import Image from "next/image";
import fbicon from "@/app/icons/linkedin.webp";
import gmail from "@/app/icons/gmail.webp";
import contactno from "@/app/icons/contact.webp";
import contact from '@/app/public/contact.jpeg'

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h3>
        <b>Contact</b>
      </h3>
      <ul className="ul">
        <li className="li"><Image src={contactno} alt="contacticon" className="bg-white" />
          Mobile No: 03061234567
        </li>
        <hr />
        <li className="li">
          <Image src={gmail} alt="gmailicon" className="img3"/>
          Gmail Id: <a href="mailto:abc@gmail.com">abc@gmail.com</a>
        </li>
        <hr />
        <li className="li">
          <Image src={fbicon} alt="facebookicon" className="img3"/>
          Facebook Id: <a href="https://www.facebook.com">Facebook</a>
        </li>
        <hr />
      </ul>
      <Image src={contact} alt="image" className="img2"/>
      </div>
  );
}
