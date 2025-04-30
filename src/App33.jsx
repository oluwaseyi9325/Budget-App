import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"

function App() {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword:""
  }

   const passwordRegex= /dhdh/

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string().required("Password is required").matches(passwordRegex,"Passwprd strpong"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")],"Password not match")
  })

  const onSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className='flex justify-center mt-20'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className='p-3 bg-gray-200 shadow  space-y-4 rounded w-1/4'>
        <div className='bg-white p-2 rounded  text-center'>LOGIN FORM</div>
          <Field name="email" placeholder='Email' className='border-0 block bg-white rounded p-2 w-full ' />
          <ErrorMessage name='email' className='text-red-500' component={"div"} />
          
          <Field name="password" placeholder='Password' className='border-0 bg-white block rounded p-2 w-full' />
          <ErrorMessage name='password' className='text-red-500' component={"div"} />

          <Field name="confirmPassword" placeholder='Confirm Password' className='border-0 bg-white block rounded p-2 w-full' />
          <ErrorMessage name='confirmPassword' className='text-red-500' component={"div"} />
        <button type='submit' className='bg-blue-600 px-3 py-2 rounded w-full text-white'>SIgnin</button>
        </Form>
      </Formik>
    </div>
  )
}

export default App