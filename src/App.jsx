import { useState } from 'react'
import Todo from './components/Todo'
import DisplayTodos from './components/DisplayTodos'
import './css/main.css'
import { motion } from 'framer-motion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >Todo App</motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', duration: 2 }}
      >
        <Todo />
        <DisplayTodos />
      </motion.div>

    </div>
  )
}

export default App
