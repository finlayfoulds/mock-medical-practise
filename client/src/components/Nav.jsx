import "../../public/css/nav.css"
import { Link } from "react-router-dom"
import Underline from "./Underline"
import Logo from "./Logo"
import LocalDate from "./LocalDate"

export default function Nav() {
  return (
    <>
      <header>
        <nav>
          <Underline />
          <Link to="/" id="logo"><Logo /></Link>
          <LocalDate />
          <div>
            <Link to="/" id="home">Home</Link>
            <Link to="/join-us">Join Us</Link>
            <Link to="/staff">Our Staff</Link>
            <Link to="/appointments">Make Appointment</Link>
            <Link to="/my-info">My Info</Link>
          </div>
        </nav>
      </header>
    </>
  )
}