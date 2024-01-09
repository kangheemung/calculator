import React from 'react'

function Header({name}) {
  return (
    <header>
      <div className = "header">
        <h1>Welcome, {name}</h1>
        <p> 残りの金額</p>
      </div>
    </header>
  )
}

export default Header
