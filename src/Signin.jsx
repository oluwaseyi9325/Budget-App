import React from 'react'
import { useNavigate } from 'react-router-dom'
function Signin() {
  let navigate= useNavigate()
  const handleBtn = () => {
    if (emal) {
      navigate("/")
    } else {
      
    }
  }
  return (
      <div>
            <h1>Signin</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={handleBtn} type="submit">Signin</button>
            </form>
    </div>
  )
}

export default Signin