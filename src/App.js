import Card from './components/UI/Card';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const dummy_list=[
  {id:"e1",title:"Car Insurance",date:new Date(2021,12,2),amount:"200.97"},
  {id:"e2",title:"Bike Insurance",date:new Date(2018,11,10),amount:"100.89"},
  {id:"e3",title:"Cinema",date:new Date(2019,11,12),amount:"90"},
  {id:"e4",title:"Mobile",date:new Date(2022,11,2),amount:"10"},
];

const App = () => {
  const [listItems,setListItems]=useState(dummy_list); //getting state fo the list

  const addExpenseHandler = (expenseData1) => {
    // console.log("In appjs");
    console.log(expenseData1);
    setListItems((prevExpenses) =>{
      return [expenseData1, ...prevExpenses];
    });
    //console.log(listItems);
  }
  return (
    <div className="App">
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Card>
        <Expenses items={listItems}/>
      </Card>
      
    </div>
  );
}

export default App;

//{id:"e1",title:"Car Insurance",date:new Date().toDateString(),amount:"200.97"},