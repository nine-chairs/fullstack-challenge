import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div>
      <ul>
        <li>{localStorage.getItem('username')}</li>
        <li>
          <button onClick={handleLogout} className="logout-button">logout</button>
        </li>
      </ul>
    </div>
  )
}

export default Navbar