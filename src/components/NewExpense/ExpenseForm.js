import React, { useState } from 'react'

export default function ExpenseForm(props) {
    // widely used but also another way
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        //Use this approach because its better and always fetches latest previous state
        // setUserInput((prevState)=>{
        //     setUserInput({...prevState,enteredTitle:event.target.value});
        // })
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        // console.log(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
        // console.log(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expensedate = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(expensedate);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
  return (
    <form onSubmit={submitHandler}>
        <div className='grid grid-cols-2'>
            <div className='flex flex-col m-2'>
                <label className='font-semibold text-md'>Title</label>
                <input className='rounded-sm p-1' type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='flex flex-col m-2'>
                <label className='font-semibold text-md'>Amount</label>
                <input className='rounded-sm p-1' type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='flex flex-col m-2'>
                <label className='font-semibold text-md'>Date</label>
                <input className='rounded-sm p-1' type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='flex justify-end'>
            <div className='flex'>
                <div className='flex items-center border-2 border-white bg-blue-900 rounded-xl p-2 m-2'>
                    <button className='text-white text-md py-2 px-10' onClick={props.onCancel}>Cancel</button>
                </div>
                <div className='flex items-center border-2 border-white bg-blue-900 rounded-xl p-2 m-2'>
                    <button className='text-white text-md py-2 px-4'>Add Expense</button>
                </div>
            </div>
        </div>
    </form>
  )
}

//Two-way binding, value=""