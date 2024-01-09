import React from 'react'
function Input({value,onNameChange, onKeyPress}){
  return (
    <div>
      <input
       type="text"
       value={value}
       onChange={(e) => onNameChange(e.target.value)}
       placeholder="Enter your name"
       onKeyPress = {onKeyPress}
        />
    </div>
  )
}

export default Input
