import Props from './Props'
import { useEffect, useState } from 'react'
import ShowTodos from './ShowTodos'
import Button from './Button'
function App() {
  const [todos, setTodos] = useState("")
  const [arrayTodos, setArrayTodos] = useState([{}])
  const handleBtn = () => {
    setArrayTodos([...arrayTodos,{todo:todos}])
    localStorage.setItem("todos",JSON.stringify(arrayTodos))
  }

  const handleGetStore = () => {
    let getStore = JSON.parse(localStorage.getItem("todos"))
    console.log(getStore)
    setArrayTodos(getStore)
  }

  // useEffect(() => {
  //   handleGetStore()
  // },[])
 
  return (
    <div className='flex justify-center mt-[100px]'>
      <div className='bg-gray-300 p-5 rounded-2xl border-4 border-red-500 space-y-3'>
      <h3 className='text-lg text-center font-bold'>MY TODO APP</h3>
        <input value={todos} onChange={(e)=>setTodos(e.target.value)} placeholder='Type your todo' className='bg-white border rounded p-2 m' />
        <Button handleBtn={ handleBtn} />
        <div>
          <ShowTodos arrayTodos={arrayTodos} />
        </div>
      </div>
     
    </div>
  )
}

export default App


// components/QuizForm.js
// import React, { useState } from "react";

// const App = () => {
//   const [question, setQuestion] = useState("");
//   const [options, setOptions] = useState(["", "", ""]);
//   const [correctAnswer, setCorrectAnswer] = useState("0");
//   const [questions, setQuestions] = useState([]);

//   const handleOptionChange = (value, index) => {
//     const updatedOptions = [...options];
//     updatedOptions[index] = value;
//     setOptions(updatedOptions);
//   };

//   const handleAddQuestion = () => {
//     if (!question.trim() || options.some(opt => !opt.trim())) return;

//     const newQuestion = {
//       question,
//       options,
//       correctAnswer: parseInt(correctAnswer),
//     };

//     setQuestions([...questions, newQuestion]);
//     setQuestion("");
//     setOptions(["", "", ""]);
//     setCorrectAnswer("0");
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 space-y-6">
//       <h1 className="text-2xl font-bold text-center">📝 Create a Quiz</h1>

//       <div className="bg-white p-6 rounded-lg shadow space-y-4">
//         <input
//           type="text"
//           placeholder="Enter your question"
//           className="w-full p-2 border rounded"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />

//         <div className="space-y-2">
//           {options.map((opt, index) => (
//             <input
//               key={index}
//               type="text"
//               placeholder={`Option ${index + 1}`}
//               className="w-full p-2 border rounded"
//               value={opt}
//               onChange={(e) => handleOptionChange(e.target.value, index)}
//             />
//           ))}
//         </div>

//         <div className="flex items-center gap-2">
//           <label className="font-semibold">Correct Answer:</label>
//           <select
//             className="p-2 border rounded"
//             value={correctAnswer}
//             onChange={(e) => setCorrectAnswer(e.target.value)}
//           >
//             {options.map((_, index) => (
//               <option key={index} value={index}>{`Option ${index + 1}`}</option>
//             ))}
//           </select>
//         </div>

//         <button
//           onClick={handleAddQuestion}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Add Question
//         </button>
//       </div>

//       {/* Display Added Questions */}
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold">📋 Added Questions</h2>
//         {questions.map((q, i) => (
//           <div key={i} className="bg-gray-100 p-4 rounded space-y-2">
//             <p className="font-semibold">{q.question}</p>
//             <ul className="list-disc pl-6 space-y-1">
//               {q.options.map((opt, idx) => (
//                 <li
//                   key={idx}
//                   className={
//                     idx === q.correctAnswer
//                       ? "text-green-600 font-medium"
//                       : ""
//                   }
//                 >
//                   {opt}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from "react";

// function App() {
//   const [budget, setBudget] = useState(() => {
//     return localStorage.getItem("budget") || "";
//   });

//   const [expenses, setExpenses] = useState(() => {
//     const saved = localStorage.getItem("expenses");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [expenseName, setExpenseName] = useState("");
//   const [expenseAmount, setExpenseAmount] = useState("");

//   useEffect(() => {
//     localStorage.setItem("budget", budget);
//   }, [budget]);

//   useEffect(() => {
//     localStorage.setItem("expenses", JSON.stringify(expenses));
//   }, [expenses]);

//   const handleAddExpense = () => {
//     if (!expenseName || !expenseAmount) return;

//     const newExpense = {
//       id: Date.now(),
//       name: expenseName,
//       amount: parseFloat(expenseAmount),
//     };

//     setExpenses([...expenses, newExpense]);
//     setExpenseName("");
//     setExpenseAmount("");
//   };

//   const handleDeleteExpense = (id) => {
//     const filtered = expenses.filter((item) => item.id !== id);
//     setExpenses(filtered);
//   };

//   const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
//   const remaining = budget - totalSpent;

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
//       <h1 className="text-2xl font-bold mb-4">💰 Budget Tracker</h1>

//       <div className="bg-white shadow p-4 rounded w-full max-w-md mb-4">
//         <label className="block font-medium mb-1">Set Budget</label>
//         <input
//           type="number"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </div>

//       <div className="bg-white shadow p-4 rounded w-full max-w-md mb-4">
//         <label className="block font-medium mb-1">Add Expense</label>
//         <input
//           type="text"
//           placeholder="Name"
//           value={expenseName}
//           onChange={(e) => setExpenseName(e.target.value)}
//           className="w-full border p-2 rounded mb-2"
//         />
//         <input
//           type="number"
//           placeholder="Amount"
//           value={expenseAmount}
//           onChange={(e) => setExpenseAmount(e.target.value)}
//           className="w-full border p-2 rounded mb-2"
//         />
//         <button
//           onClick={handleAddExpense}
//           className="bg-blue-500 text-white px-4 py-2 rounded w-full"
//         >
//           Add Expense
//         </button>
//       </div>

//       <div className="bg-white shadow p-4 rounded w-full max-w-md mb-4">
//         <h2 className="text-lg font-bold mb-2">Expenses</h2>
//         {expenses.length === 0 ? (
//           <p className="text-gray-500">No expenses added yet.</p>
//         ) : (
//           expenses.map((exp) => (
//             <div
//               key={exp.id}
//               className="flex justify-between items-center border-b py-2"
//             >
//               <div>
//                 <p className="font-medium">{exp.name}</p>
//                 <p className="text-sm text-gray-500">₦{exp.amount}</p>
//               </div>
//               <button
//                 onClick={() => handleDeleteExpense(exp.id)}
//                 className="text-red-500"
//               >
//                 ✕
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="bg-white shadow p-4 rounded w-full max-w-md">
//         <p className="font-medium">Total Budget: ₦{budget || 0}</p>
//         <p className="font-medium">Total Spent: ₦{totalSpent}</p>
//         <p
//           className={`font-medium ${
//             remaining < 0 ? "text-red-500" : "text-green-600"
//           }`}
//         >
//           Remaining: ₦{remaining}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default App;






