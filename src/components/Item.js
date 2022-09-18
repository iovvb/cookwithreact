import React from 'react'

export default function Item({name , amount}) {
  return (
      <>
      <span> {name} : </span>
      <span> {amount}</span>
      </>
  )
}
