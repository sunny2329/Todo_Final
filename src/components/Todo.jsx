import React, { useState, useRef } from 'react'
import { connect } from 'react-redux';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import { GoPlus } from 'react-icons/go'
import { motion } from 'framer-motion'

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  }
}

function Todo(props) {
  const [todo, setTodo] = useState("");

  const add = () => {
    if(todo === ""){
      alert("Please enter a task");
      return;
    }
    props.addTodo({
      id: Math.floor(Math.random() * 1000),
      item: todo,
      completed: false
    })
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  console.log(props);
  return (
    <div className='addTodos'>
      <input type="text" className='todo-input'
        onChange={(e) => handleChange(e)}
        value={todo}
      />
      <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        
        className='add-btn' onClick={() => add()} >
        <GoPlus />
      </motion.button>
      <br />

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
