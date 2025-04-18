import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components_App1/Navbar'
import Conditional from './Components_App1/Conditional'
import ListRender from './Components_App1/ListRender'

function App1() {
  /*useState hook
  count is the state which is updated using setCount function, 0 is the initial value*/
  const [count, setCount] = useState(0)

  /*useEffect hook
  alert is displayed once whenever this component is mounted */
  useEffect(() => {
    alert("Every render")  
  })
  /*alert is diaplayed only the first time the component is mounted */
  useEffect(() => {
    alert("First render only")  
  },[])
  /*whenever there is a change in the state count*/
  useEffect(() => {
    alert("Hey count was changed")  
  }, [count])

  /*useRef hook
  prevents reinitialization of a variable at each render*/
  const a = useRef(0)
  useEffect(() => {
    a.current = a.current +1
    console.log(`Rendering value of a is ${a.current}....`)
  })
  
  return (
    <>
      <Navbar color={"cyan"}/>
      <Conditional />
      <ListRender/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App1
