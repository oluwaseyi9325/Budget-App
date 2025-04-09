import React from 'react'

function Button({handleBtn}) {

  return (
    <button onClick={handleBtn} className='block bg-white p-3 rounded w-full hover:bg-amber-200'>Add Todo</button>
  )
}

export default Button