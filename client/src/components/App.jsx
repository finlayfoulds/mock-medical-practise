import "../../public/css/app.css"
import { Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import Error from "../pages/Error"
import NotFound from "../pages/NotFounds"
import Home from "../pages/Home"
import JoinUs from "../pages/JoinUs"
import Staff from "../pages/Staff"
import MyInfo from "../pages/MyInfo"
import Appointments from "../pages/Appointments"


export default function App() {
  return(
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />} />
          <Route path="/join-us" element={<JoinUs />} errorElement={<Error />} />
          <Route path="/staff" element={<Staff />} errorElement={<Error />} />
          <Route path="/appointments" element={<Appointments />} errorElement={<Error />} />
          <Route path="/my-info" element={<MyInfo />} errorElement={<Error />} />
          <Route path="*" element={<NotFound />} errorElement={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}