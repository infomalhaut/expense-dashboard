import React from 'react'

export default function Card(props) {
  return (
    <div className='w-[50%] mx-auto bg-gray-900 m-2 p-2 rounded-xl'>{props.children}</div>
  )
}
