import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>
      I am User page of {params.username}
    </div>
  )
}

//This is Dynamic Routing

export default User
