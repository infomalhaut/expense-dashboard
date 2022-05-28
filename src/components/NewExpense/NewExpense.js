import React,{useState} from 'react'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
  const [isEditing,setIsEditing] = useState(false);
  const saveExpensedata = (enteredExpensedata) =>{
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpensedata,
    }
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  const onEditing = () =>{
    setIsEditing(true);
  }
  const stopEditingHandler = () =>{
    setIsEditing(false);
  }
  return (
    <div className='w-[50%] mx-auto bg-purple-500 m-5 p-2 rounded-xl'>
      <div className='flex flex-col items-center justify-center'>
        {!isEditing && <button onClick={onEditing} className='font-bold border-2 rounded-md p-2 border-black bg-white'>Add Expense</button>}
      </div>
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpensedata} onCancel={stopEditingHandler}/>}
    </div>
  )
}
