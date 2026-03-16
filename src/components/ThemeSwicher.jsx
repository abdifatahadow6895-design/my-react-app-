import { useState } from "react"

function ThemeToggle() {

  const [dark, setDark] = useState(false)

  return (
    <div style={{
      background: dark ? "black" : "blue",
      color: dark ? "white" : "black",
      height: "20vh",
      padding: "2rem",
      textAlign: "center",
      borderRadius: "10px",
      marginBottom: "3px"
    }}>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>

      <h1>Theme Example</h1>

    </div>
  )
}

export default ThemeToggle