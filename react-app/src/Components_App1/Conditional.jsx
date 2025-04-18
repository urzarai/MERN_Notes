import React from 'react'
import { useState } from 'react'

function Conditional() {
    const [count, setCount] = useState(0)
    const [showBtn, setShow] = useState(true)
    
  return (
    <div>
    {/*Curly braces '{}' indicates use of JavaScript */}
    {showBtn?<button>Conditionally True</button>:<button>Conditionally False</button>}
    {/*To show only when true*/}
    {showBtn && <button>Another true button</button>}
    <br></br>
    {/*Toggle switch*/}
    <button onClick={() => setShow(!showBtn)}>Toggle</button>
    </div>
  )
}

export default Conditional
