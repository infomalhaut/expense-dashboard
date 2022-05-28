import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'

export default function ExpenseItem(props) { 
  const [title,setTitle] = useState(props.title)

  const updateTitle = () =>{
    setTitle('Updated');
    console.log(title);
  }
  return (
    <div className='w-full'>
        <div className='flex justify-between items-center bg-gray-700 rounded-xl border-2 shadow-xl m-4 p-2'>
            <div className='flex items-center justify-center'>
              <ExpenseDate date={props.date}/>
              <h1 className='text-white font-bold text-2xl px-2'>{title}</h1>
            </div>
            <div className='flex'>
            <div className='w-[100px] flex items-center justify-center border-2 border-white bg-blue-900 rounded-xl py-2 px-6'>
              <p className='text-white text-2xl'>${props.amount}</p>
            </div>
            </div>
        </div>
        
        
    </div>
  )
}
