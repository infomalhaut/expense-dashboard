import React from 'react'

export default function ExpenseDate(props) {
    const month=props.date.toLocaleString('en-US',{month:'long'})
    const day=props.date.toLocaleString('en-US',{day:'2-digit'})
    const year=props.date.getFullYear();
  return (
      <div>
        <div className='flex-col text-center bg-gray-900 border-2 border-white rounded-xl w-[150px] p-2'>
            <p className='text-white font-bold text-xl px-2'>{month}</p>
            <p className='text-white font-semibold text-sm px-2'>{year}</p>
            <p className='text-white font-semibold text-2xl px-2'>{day}</p>
        </div>
    </div>
  )
}
