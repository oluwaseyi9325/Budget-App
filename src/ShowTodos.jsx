import React from 'react'

function ShowTodos({ arrayTodos }) {
  return (
    <div>
      {
            arrayTodos?.map((value, i) =>
              <div className='flex justify-between bg-white p-2 rounded mb-3'>
                {i + 1}. {value.todo}, <button className='bg-red-500 text-white rounded p-1 ml-2'>Delete</button>
                <button className='bg-green-500 text-white rounded p-1 ml-2'>Edit</button>
             </div>
            )
          }
    </div>
  )
}

export default ShowTodos