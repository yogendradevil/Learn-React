import React from 'react'

export default function Card(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>age: {props.age} </h2>
    </div>
  )
}
