import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../app/app'
import Todo from '../todo/todo'
import FormikForm from '../formik/formik'
import LoadImages from '../loadImages/loadImages'
import ExportExcel from '../compoents/exportExcel'

export const paths = {
  todo: '/todo',
  formikForm: '/formik-form',
  loadImages: '/load-images',
  exportExcel: '/export-excel',
}

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path={paths.todo}>
            <Todo />
          </Route>
          <Route exact path={paths.formikForm}>
            <FormikForm />
          </Route>
          <Route exact path={paths.loadImages}>
            <LoadImages />
          </Route>
          <Route exact path={paths.exportExcel}>
            <ExportExcel />
          </Route>
        </Switch>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
