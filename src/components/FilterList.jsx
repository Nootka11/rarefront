import React from 'react'

function FilterList  ({items, render})  {


  return (
    <div className='p-5 border border-slate-400'>
        <h1>Filter List</h1>
        <input type="text" placeholder='Filter ...'/>
        {render}
        
    </div>
  )
}

export default FilterList