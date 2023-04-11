import React, { useState } from 'react'

export default function TodoInput(props) {

    const [inputText,setInputText] = useState('')
    const handleEnter = (e) => {
        if(e.keyCode === 13){
            props.addList(inputText);
            setInputText("");
        }
    }

  return (
    <div className="input-container">
        <input
        type="text" 
        className='input-box-todo' 
        value={inputText}
        placeholder='Enter your todo...'
        onChange={e => {
            setInputText(e.target.value)
        }} 
        onKeyDown={handleEnter}
        />
        <button className='add-btn'
        onClick={() => {
            props.addList(inputText);
            setInputText("")
        }}>Add</button>
        {/* <div>{inputText}</div> */}
    </div>
  )
}
