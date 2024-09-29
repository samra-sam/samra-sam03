import Link from "next/link"
export default function Navbar(){
    return(
        <div className="link">
            <Link href="/">Home</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/education">Education</Link>
            <Link href="./contact">Contact</Link>
        </div>
    )
}