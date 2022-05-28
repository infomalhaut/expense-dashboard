import React,{useState} from 'react'

export default function ExpenseFilter(props) {
    const getDate = (event) =>{
        const data1=event.target.value;
        props.onChangeFilter(data1);
    }
  return (
    <div>
        <div className='flex justify-between'>
            <label className='text-xl ml-5 text-white mt-2'>Filter By Year</label>
            <select className='mr-4 rounded-sm py-2 px-6' value={props.selected} onChange={getDate}>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
            </select>
        </div>
    </div>
  )
}
