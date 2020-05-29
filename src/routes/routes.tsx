import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../app/app'
import Todos from '../todos/todos'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/todos">
            <Todos />
          </Route>
        </Switch>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
