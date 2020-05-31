import React from 'react'
import { Formik, ErrorMessage } from 'formik'

interface IForm {
  email: string
  password: string
}

const FormikForm = () => (
  <div>
    <h6>Steps to reproduce the problem:</h6>
    <h6 className="text-danger">Problem 1</h6>
    <ol>
      <li>Refresh, F5</li>
      <li>Click in email box</li>
      <li>Click in password box => Empty password box (Problem)</li>
    </ol>
    <h6 className="text-danger">Problem 2</h6>
    <ol>
      <li>Refresh, F5</li>
      <li>Click in email box</li>
      <li>Type `a` in email => Empty email & password box (Problem)</li>
    </ol>
    <h6 className="text-danger">Problem 3</h6>
    <ol>
      <li>Refresh, F5</li>
      <li>Click in password box</li>
      <li>Type `a` in password => Empty email box (Problem)</li>
    </ol>

    <h5 className="text-danger">I am the problem</h5>
    <Formik
      initialValues={{ email: '', password: '' } as IForm}
      validate={(values) => {
        const errors = {} as IForm
        if (!values.email) {
          errors.email = 'Email Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!values.password) {
          errors.password = 'Password Required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          <button className="btn btn-primary mt-2" type="submit" disabled={isSubmitting}>
            Submit
          </button>

          <div className="messages-wrapper">
            {errors.email && (
              <div className="alert alert-danger">
                <ErrorMessage name="email" />
              </div>
            )}

            {errors.password && (
              <div className="alert alert-danger">
                <ErrorMessage name="password" />
              </div>
            )}
          </div>
        </form>
      )}
    </Formik>
    <hr />
    <h4 className="text-success">I am the solution</h4>
    <h6 className="text-success">Steps to reproduce the problem but I won't</h6>
    <h6 className="text-danger">Problem 1</h6>
    <ol>
      <li>Refresh, F5</li>
      <li>Click in email box</li>
      <li>Click in password box => No empty box (Solved)</li>
    </ol>
    <h6 className="text-danger">Problem 2</h6>
    <ol>
      <li>Refresh, F5</li>
      <li>Click in email box</li>
      <li>Type `a` in email => No empty box (Solved)</li>
    </ol>
    <h6 className="text-danger">Problem 3</h6>
    <ol>
      <li>Refresh, F5</li>
      <li>Click in password box</li>
      <li>Type `a` in password => No email box (Solved)</li>
    </ol>
    <Formik
      initialValues={{ email: '', password: '' } as IForm}
      validate={(values) => {
        const errors = {} as IForm
        if (!values.email) {
          errors.email = 'Email Required'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />

          <button className="btn btn-primary mt-2 mb-5" type="submit" disabled={isSubmitting}>
            Submit
          </button>

          <div className="messages-wrapper">
            {errors.email && touched.email && (
              <div className="alert alert-danger">
                <ErrorMessage name="email" />
              </div>
            )}

            {errors.password && touched.password && (
              <div className="alert alert-danger">
                <ErrorMessage name="password" />
              </div>
            )}
          </div>
        </form>
      )}
    </Formik>
  </div>
)

export default FormikForm
