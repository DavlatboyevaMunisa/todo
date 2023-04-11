import React from 'react'

function TodoList(props) {
  return (
    <li className="listItem">
        {props.item}
        <span className='icons'><i class="fa-solid fa-trash-can icon-delete"
        onClick={ e => {
            props.removeTodo(props.index)
        }}></i></span>
    </li>
  )
}

export default TodoList
