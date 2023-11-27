import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './components/CharacterList'
// pages
import CharacterPage from './pages/CharacterPage'
import LogInPage from './pages/LogInPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LogInPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/characters" element={<CharacterPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
