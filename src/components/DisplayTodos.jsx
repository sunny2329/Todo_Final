import React from 'react'
import { connect } from 'react-redux'
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion'

//Bringing the states from the store using connect
const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

//Bringing the methods from the store using connect

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    }
}

function DisplayTodos(props) {
    const [sort, setSort] = useState("active");
    return (
        <div className='displaytodos'>
            <div className="buttons">
                <button onClick={() => setSort('active')}>Active</button>
                <button onClick={() => setSort('completed')}>Completed</button>
                <button onClick={() => setSort('all')}>All</button>
            </div>
            <ul>
                <AnimatePresence>
                    {
                        props.todos.length > 0 && sort === 'active' ?
                            props.todos.map((item) => {
                                return (
                                    item.completed === false &&
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo} />
                                )
                            }) : null
                    }
                    {
                        props.todos.length > 0 && sort === 'completed' ?
                            props.todos.map((item) => {
                                return (
                                    item.completed === true &&
                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo} />
                                )
                            }) : null
                    }
                    {
                        props.todos.length > 0 && sort === 'all' ?
                            props.todos.map((item) => {
                                return (

                                    <TodoItem
                                        key={item.id}
                                        item={item}
                                        removeTodo={props.removeTodo}
                                        updateTodo={props.updateTodo}
                                        completeTodo={props.completeTodo} />
                                )
                            }) : null
                    }
                </AnimatePresence>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
