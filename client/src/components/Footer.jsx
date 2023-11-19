import "../../public/css/footer.css"

export default function Footer() {
  return(
    <footer>
      <h3>Contact Us</h3>
      <hr></hr>
      <p>Email: loriem@medical.com</p>
      <p>Phone Number: 0123456789</p>
      <p>Copyright ©️ {new Date().getFullYear()}. All rights reserved</p>
    </footer>
  )
}