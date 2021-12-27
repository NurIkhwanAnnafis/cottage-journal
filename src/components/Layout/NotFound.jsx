import React, { Fragment } from 'react'
import '../../assets/styles/NotFound.scss'

const Login = ({ children }) => {

  return (
    <div>
      <div className="container vh-100">
        <div className="error-content text-center">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Login;