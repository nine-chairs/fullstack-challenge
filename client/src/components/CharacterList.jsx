import React, { useState, useEffect } from 'react'
import './CharacterList.css'
import CharacterCard from './CharacterCard'

const CharacterList = ({ characters }) => {
  const [viewMode, setViewMode] = useState('all')
  const [favoriteCharacters, setFavoriteCharacters] = useState([])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCharacters')) || []
    setFavoriteCharacters(favorites)
  }, [])

  const toggleViewMode = () => {
    if (viewMode === 'all') {
      setViewMode('favorites')
    } else {
      setViewMode('all')
    }
  }

  return (
    <div>
      <h1>Character List</h1>
      <div className='character-list'>
        <button onClick={toggleViewMode}>
          {viewMode === 'all' ? 'Show Favorites' : 'Show All'}
        </button>
        <ul>
          {characters.map((character) => (
            (viewMode === 'all' || favoriteCharacters.includes(character.id)) && (
              <CharacterCard key={character.id} character={character} />
            )
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CharacterList