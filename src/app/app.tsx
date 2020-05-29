import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import './app.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/todos" className="App-link">
          Todos
        </Link>
      </header>
    </div>
  )
}

export default App
