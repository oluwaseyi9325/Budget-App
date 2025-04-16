import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [editTodo, setEditTodo] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleAdd = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input }])
      setInput('')
    }
  }

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEditClick = (todo) => {
    setEditTodo(todo)
    setShowModal(true)
  }

  const handleSaveEdit = () => {
    setTodos(todos.map(t => (t.id === editTodo.id ? editTodo : t)))
    setShowModal(false)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">📝 Todo App</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
          >
            <span>{todo.text}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditClick(todo)}
                className="text-sm bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-80">
            <h2 className="text-lg font-semibold mb-3">Edit Todo</h2>
            <input
              type="text"
              value={editTodo.text}
              onChange={(e) =>
                setEditTodo({ ...editTodo, text: e.target.value })
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleSaveEdit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
