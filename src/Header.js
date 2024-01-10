import React from 'react'

function Header({name, cost }) {
  return (
    <header>
      <div className = "header">
        <h1>Welcome, {name}</h1>
        <p> 残りの金額: {cost.toLocaleString()}</p>
      </div>
    </header>
  )
}

export default Header;
