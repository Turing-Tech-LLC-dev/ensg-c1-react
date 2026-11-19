// function declaration
/* export default function SayHello() {
  return (
    <div>
      <h1>Welcome to React Class</h1>
      <p>React is built using a component based architecture</p>
    </div>
  )
} */

import { useState } from "react";

// Using arrow function
const SayHello = () => {
  const [fullName, setFullName] = useState("");

  function handleChange(event) {
    setFullName(event.target.value);
  }

  function introduceUser() {
    alert(`Hello ${fullName.trim()}, Welcome to React class.`);
    setFullName("");
  }
  
  return (
    <div className="flex flex-col gap-4">
      <h1>Welcome to React Class</h1>

      <input 
        type="text" 
        placeholder="Enter your full name"
        value={fullName}
        onChange={handleChange}
        className="h-12 border px-2"
      />

      <button 
        className="bg-amber-300 px-8 cursor-pointer font-bold"
        onClick={introduceUser}
      >
        Say Hello
      </button>
    </div>
  )
}

export default SayHello;