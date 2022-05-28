import React,{useState} from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter';

export default function Expenses(props) {
  const [filteredYear,setFilteredYear] = useState('2018');

  const filterYearHandler = (data1) => {
    setFilteredYear(data1)
    console.log(data1)
  }

  const filteredItems = props.items
    .filter(expense => expense.date.getFullYear().toString() === filteredYear)
    .map(expense => <ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount}/>)

  let extraContent = <p className='text-white m-5 font-semibold'>No expenses found</p>

  if (filteredItems.length > 0){
    console.log(filteredItems.length)
    extraContent = filteredItems
  } 

  return (
    <div>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterYearHandler}/>
      {extraContent} {/*dynamic, key is important or else list will mess up if you use state*/}

      {/* <ExpenseItem title={props.items[0].title} date={props.items[0].date} amount={props.items[0].amount}/>
      <ExpenseItem title={props.items[1].title} date={props.items[1].date} amount={props.items[1].amount}/>
      <ExpenseItem title={props.items[2].title} date={props.items[2].date} amount={props.items[2].amount}/>
      <ExpenseItem title={props.items[3].title} date={props.items[3].date} amount={props.items[3].amount}/> */}
    </div>
  )
}
