import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div>
      <h1 className=' bg-gray-700 text-white text-lg text-center'>User ID: {userId}</h1>
    </div>
  )
}

export default User
