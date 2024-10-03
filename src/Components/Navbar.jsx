import logo from "../assets/logo.jpg"
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa"
const Navbar = () => {
  return (
 <nav className="flex  items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
        <img src={logo} className="mx-7" width={100} height={100} alt="LOGO"/>
        </a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/lavis-lalu-0951552a4/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn">
        <FaLinkedin/>
      </a>
      <a href="https://github.com/Lavis1701"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub">
        <FaGithub/>
      </a>
      <a href="https://www.instagram.com/__lavis____/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram">
        <FaInstagram/>
      </a>
      <a href="https://x.com/LAVIS92860662"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter">
        <FaTwitter/>
      </a>
    </div>
 </nav>
  )
}

export default Navbar
