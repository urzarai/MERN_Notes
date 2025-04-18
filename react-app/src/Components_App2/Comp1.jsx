import React from 'react'
import { useContext } from 'react'
import { counterContext } from './Context'

const Comp1 = () => {
    const counter = useContext(counterContext)
  return (
    <div>
      <p>Component  </p> 
      { counter}
    </div>
  )
}

export default Comp1
