import { useState, useEffect } from "react"

let formattedDate
let currentDate = new Date

export default function LocalDate() {

  const [date, setDate] = useState("")
  
  useEffect(() => {
    const interval = setInterval(() => {
      currentDate = new Date
    }, 2000)
    console.log("called")
    if (window.innerWidth < 735) {
      formattedDate = currentDate.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" })
    } else {
      formattedDate = currentDate.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long" })
    }

    let parts = formattedDate.split(" ")
    let formattedDateSwapped = `${parts[0]} ${parts[2]} ${parts[1]}`
    setDate(formattedDateSwapped)

    return clearInterval(interval)
  }, [currentDate.getDay(), currentDate.getDate(), currentDate.getMonth(), window.innerWidth])

  return (
    <h2 id="date">{date}</h2>
  )
}