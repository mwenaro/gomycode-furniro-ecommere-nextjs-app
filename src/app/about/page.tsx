"use client"
import { useState } from "react"

export default function About() {
  const[age, setAge] = useState(0)

  return (
    <div>
      <h4 onClick={()=>alert("Hello!")}>I'm {age} years old!</h4>
    </div>
  )
}
