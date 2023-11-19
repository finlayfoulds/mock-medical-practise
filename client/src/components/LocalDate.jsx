import { useState, useEffect, useRef } from "react"

const shortDate = { weekday: "short", day: "numeric", month: "short" }
const longDate = { weekday: "long", day: "numeric", month: "long" }


const formatDate = () => {
  const currentDate = new Date()
  let formattedDate = window.innerWidth < 700
    ? currentDate.toLocaleDateString("en-US", shortDate)
    : currentDate.toLocaleDateString("en-US", longDate)
  let parts = formattedDate.split(" ")
  return `${parts[0]} ${parts[2]} ${parts[1]}`
}


export default function LocalDate () {

  const [formattedDate, setFormattedDate] = useState(formatDate());
  const intervalRef = useRef(null)
  
  useEffect(() => {
    
    const getNewDate = () => {
      setFormattedDate(formatDate())
    }
    
    const getNewDateInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      intervalRef.current = setInterval(getNewDate, 2000)
    }
    
    //call once to start interval
    getNewDateInterval()

    window.addEventListener("resize", getNewDate)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      window.removeEventListener("resize", getNewDate)
    }
  }, [])


  return <p id="date"><b>{formattedDate}</b></p>
}