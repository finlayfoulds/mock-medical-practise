import { Routes, Route, Link } from "react-router-dom"
import Logo from "./Logo"
import LocalDate from "./LocalDate"
import Error from "../pages/Error"
import NotFound from "../pages/NotFounds"
import Home from "../pages/Home"
import About from "../pages/About"
import Staff from "../pages/Staff"
import MyInfo from "../pages/MyInfo"
import Appointments from "../pages/Appointments"

export default function Nav() {
  return (
    <>
      <nav>
          <Link to="/" id="logo"><Logo /></Link>
          <LocalDate />
          <div>
            <Link to="/about">About Us</Link>
            <Link to="/staff">Our Staff</Link>
            <Link to="./appointments">Make Appointment</Link>
            <Link to="/my-info">My Info</Link>
          </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/about" element={<About />} errorElement={<Error />} />
        <Route path="/staff" element={<Staff />} errorElement={<Error />} />
        <Route path="/appointments" element={<Appointments />} errorElement={<Error />} />
        <Route path="/my-info" element={<MyInfo />} errorElement={<Error />} />
        <Route path="*" element={<NotFound />} errorElement={<Error />} />
      </Routes>
    </>
  )
}

