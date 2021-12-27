import React, { Fragment } from 'react'

const Login = ({ children }) => {

  return (
    <div>
      <div className='vh-100' style={{ overflowX: 'hidden', overflowY: 'hidden' }}>
        {children}
      </div>
    </div>
  )
}

export default Login;