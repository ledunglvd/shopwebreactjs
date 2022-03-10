
import React, { useState } from 'react'
import Todoitem from './Todoitem'



function Todo() {

    const [todoState, setTodoState] = useState([
        {
            id: 1,
            title: 'Việc 1',
            completed: false,
        },
        {
            id: 2,
            title: 'Việc 2',
            completed: false,
        },
        {
            id: 3,
            title: 'Việc 3',
            completed: false,
        },

    ])
    


    const markComplete = id => {
        const newTodo = todoState.map(todo => {
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })
        setTodoState(newTodo)
    }
    const deleteTodo = id => {
        const newTodo = todoState.filter(todo => todo.id !== id)
        setTodoState(newTodo)
    }


    const [input, setInput] = useState('');
    
    const handleChange = e => {
        setInput(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault()      
        setTodoState([...todoState, {
            id: 5,
            title: input,
            completed: false
        }])
        setInput("")
    }


    return (
        <>
            <form className="todofrom" onSubmit={handleSubmit}>
                <input type='text' placeholder='' value={input} name="text" onChange={handleChange} />
                <input type='submit' value="add" ></input>
            </form>
            {todoState.map(todo => {
                return (
                    <Todoitem
                    todoProps={todo}
                    markCompleteFunc={markComplete}
                    deleteTodoFunc={deleteTodo}
                    />
                )
            })}
        </>
    )
}

export default Todo
