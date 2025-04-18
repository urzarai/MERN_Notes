import React from 'react'
import { NavLink } from 'react-router-dom'     //To prevent reloading everytime we change content
import Button from './Button'
const Router = () => {
    
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/'><li>Home</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/login'><li>Login</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to='/about'><li>About</li></NavLink>
      </nav>
      <span>
        <Button></Button>
      </span>
    </div>
  )
}

export default Router
