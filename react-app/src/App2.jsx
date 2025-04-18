import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Events from './Components_App2/Events'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components_App2/Home'
import Login from './Components_App2/About'
import About from './Components_App2/About'
import User from './Components_App2/User'
import Router from './Components_App2/Router'
import { counterContext } from './Components_App2/Context'
import Memo from './Components_App2/Memo'

function App2() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Router /><Home/></>
    },
    {
      path: "/login",
      element: <><Router /><Login/></>
    },
    {
      path: "/about",
      element: <><Router /><About/></>
    },
    {
      path: "/user/:username",
      element: <><Router /><User/></>   //Dynamic Routing takes username as Parameter
    }
  ])
  return (
    <>
      <counterContext.Provider value={count}>
      <Events></Events>
      <RouterProvider router={router}/>
      <Memo/>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </counterContext.Provider>
    </>
  )
}

export default App2
