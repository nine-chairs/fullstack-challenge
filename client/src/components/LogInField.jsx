import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LogInField.css'

const LogInField = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const handleLogin = () => {
    if (username) {
      localStorage.setItem('username', username)
      navigate('/characters')
    } else {
      alert('Please enter a valid username.')
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-form">
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default LogInField