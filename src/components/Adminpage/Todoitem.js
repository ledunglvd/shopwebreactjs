import React from 'react'
import PropTypes from 'prop-types'


function Todoitem(props) {
    const todo = props.todoProps
    const markComplete = props.markCompleteFunc
    const deleteTodo = props.deleteTodoFunc


    const TodoitemStyle = {
        background :'#f4f4f4',
        padding : '10px',
        borderBottom:'1px #ccc dotted', 
        textDecoration : todo.completed ? 'line-through' : 'none'

    }

    const deleteButtonStyle = {
        background :'#ff0000',
        color : '#fff',
        border: 'none',
        padding : '5px 9px',
        borderRadius : '50%',
        cursor : 'pointer',
        float: 'right',
         
    }
    return (
        <p style={TodoitemStyle}>
            <input type="checkbox" onChange={markComplete.bind(this, todo.id)} checked = {todo.completed}/>
             {todo.title}
            <button style={deleteButtonStyle} onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
        </p>
    )
}
Todoitem.propTypes = {
    todoProps: PropTypes.object.isRequired,
    markCompleteFunc: PropTypes.func.isRequired,
    deleteTodoFunc: PropTypes.func.isRequired,
}
export default Todoitem
