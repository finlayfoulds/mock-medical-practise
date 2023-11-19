import "../../public/css/home.css"
import Logo from "../components/Logo"

export default function Home() {
  return (
  <>
    <div id="home-image-container">
      <img src="../../public/home-background-image.jpeg" alt="our doctors and nurses" id="home-image"></img>
    </div>
    <section id="about">
      <h1>About Us</h1>
      <img src="../../public/about-image.jpeg" alt="one of our doctors"></img>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, asperiores, perferendis molestiae, autem omnis quos facere repellat sapiente aliquid rem nobis. Expedita reiciendis vel dicta vero nam omnis similique officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam asperiores optio saepe, eaque beatae, molestiae cupiditate inventore dolor accusamus recusandae amet? Perspiciatis, dolore a accusantium mollitia itaque temporibus! Consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio mollitia architecto expedita non fuga deserunt culpa optio natus saepe beatae adipisci eligendi dolore ab, accusantium esse nam nemo aliquid!</p>
    </section>
    <section id="find-us">
      <h1>Find Us</h1>
      <div>
        <address>
          Loriem Medical Practise<br></br>
          <hr></hr>
          1123 Fictional St,<br></br>
          San Francisco, CA 94103<br></br>
          USA
        </address>
        <img src="../../public/building.jpeg" alt="medical practise building"></img>
      </div>
    </section>
  </>
  )
}