import { useState, useEffect  } from "react"

export default function App() {
  const [message, setMessage] = useState("Loading...")

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then(res => {
        if (!res.ok) { throw new Error(`HTTP error Status: ${res.status}`) }
        return res.json()
      })
      .then(data => { setMessage(data.message) })
      .catch(error => {
        console.error(`Error fetching data: ${error.message}\n${error.stack}`)
      })
  }, [])

  return (
    <>
      <h1>hello world from client</h1>
      <h1>{message}</h1>
    </>
  )
}