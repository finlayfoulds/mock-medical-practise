import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function Underline() {

  let pathname = useLocation().pathname
  
  const [underlineStyle, setUnderlineStyle] = useState()

  useEffect(() => {

    function moveUnderline(event) {
      console.log(event)
      let underlinedLink = document.querySelector(`a[href="${pathname}"]`)

      // as there are 2 anchor tags for home in nav
      if (underlinedLink.getAttribute("id") !== null) { // both home anchor tags are only ones with id"s in nav
        underlinedLink = document.querySelector("#home")
      }

      setUnderlineStyle({
        width: `${underlinedLink.offsetWidth}px`,
        left: `${underlinedLink.getBoundingClientRect().left}px`,
        ...!!event && { transition: "none" }
      })
    }

    // call whenever the useEffect is triggered
    moveUnderline()

    window.addEventListener("resize", moveUnderline)
  
    return () => {
      window.removeEventListener("resize", moveUnderline)
    }

  }, [pathname])

  return <div id="underline" style={underlineStyle}></div>
}
