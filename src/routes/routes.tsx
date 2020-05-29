import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../app/app'
import Todo from '../todo/todo'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/todo">
            <Todo />
          </Route>
        </Switch>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
