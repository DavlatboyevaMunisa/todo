import './App.css'
import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList =  (inputText => {
    if(inputText !== '')
    setListTodo([...listTodo,inputText]);
  })

  const removeTodo = (key) => {
    const newItem = [...listTodo];
    newItem.splice(key,1);
    setListTodo([...newItem]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <h2>Todo-List</h2>
        <TodoInput addList={addList} />
        <hr/>
        {listTodo.map((listItem,i) => {
          return (
            <TodoList key={i} index={i} item={listItem} removeTodo={removeTodo} />
          )
        })}
        </div>
    </div>
  )
}

export default App
