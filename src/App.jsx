import React, { useState ,useEffect} from 'react'

function App() {
    const [budget, setBudget] = useState("")
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const [expensesData,setExpensesData]=useState([])
    const [message, setMessage] = useState("Please Enter all field...")
    const [AmountSpent, setAmountSpent] = useState(0)
    const [AmountRemain,setAmountRemain]=useState(0)
    
    const [isError, setIsError] = useState(false)
    
    // useEffect(() => {
    //     console.log("hrey")
    // },[AmountRemain,AmountSpent])

    const handleBtn = () => {
        if (!budget) {
            alert('pls enter budget') 
            return
        }
        if (amount && name) {
            let calculateAmountSpent = parseInt(AmountSpent)+ parseInt(amount);
            setAmountSpent(calculateAmountSpent)
            let calculateAmountRemain = parseInt(budget) - parseInt(calculateAmountSpent)
            setAmountRemain(calculateAmountRemain)
           let details={amount,name}
            setExpensesData([...expensesData, details])
            console.log(expensesData)
            setName("")
            setAmount("")
       } else if (!name) {
           setMessage("Please Enter name")
           setIsError(true)
       }else if (!amount) {
        setMessage("Please Enter Amount")
           setIsError(true)
       }
    }

  return (
      <div className='flex justify-center mt-[100px]'>
          <div className='p-10 rounded-lg border border-green-100 bg-[green] text-white'>
              {
                  isError? <div className='bg-white p-2 rounded mb-3'>
                      <div className='bg-red-300 p-4 roduned text-white italic text-sm'>{ message} </div>
              </div>:null
              }
              
              <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder='Total Budget' className='bg-white text-[green] p-2 rounded' />
              <div className='bg-white p-1 my-5 rounded'></div>
              <div className='space-y-3'>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='bg-white text-[green] p-2 rounded' />
                  <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' className={`bg-white border-3 ${isError&&"border-amber-600 "} block text-[green] p-2 rounded`} />
                  <button  onClick={handleBtn} className='bg-[white] text-[green] p-1 rounded w-full'>Add Expenses</button>
              </div>
              <div className='bg-white p-1 my-3 rounded'>
                  <div className='bg-[green] p-2'>
                      <div className='bg-white p-2 text-[green] text-[10px] space-y-3'>
                          <div className='flex justify-between'> <h4>Total Budget; </h4>
                              <span className='bg-[green] text-white p-1 rounded'>#{ budget?budget:"00:00"}</span>
                          </div>
                          <div className='flex justify-between'> <h4>Total Spent; </h4>
                              <span className='bg-[green] text-white p-1 rounded'>#{ AmountSpent}</span>
                          </div>
                          <div className='flex justify-between'> <h4>Total Remaining; </h4>
                              <span className='bg-[green] text-white p-1 rounded'>#{ AmountRemain}</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='bg-white p-2 rounded mt-5'>
                  {
                      expensesData.map((item, i) =>
                          <div className='space-y-2'>
                              <div className='p-2 mb-2 bg-[green] rounded flex justify-between text-sm'>
                                  <span>{i + 1}.</span> <span>{item.name}</span> <span className='bg-white p-1 rounded text-[10px] text-[green]'>#{ item.amount}</span></div>    
                    </div>
                    )
                  }
              </div>
          </div>
      </div>
  )
}

export default App