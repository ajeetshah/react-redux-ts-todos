import React from 'react'
import './app.css'
import { Link } from 'react-router-dom'
// import logo from '../logo.svg'
import { paths } from '../routes/routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to={paths.todo} className="App-link">
          Todo
        </Link>
        <Link to={paths.loadImages} className="App-link">
          Load Images
        </Link>
        <Link to={paths.formikForm} className="App-link">
          Formik Form
        </Link>
      </header>
    </div>
  )
}

export default App
