import React, { useState, useEffect } from 'react'

const CharacterCard = ({ character }) => {
  const [isFavorited, setIsFavorited] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCharacters')) || []
    setIsFavorited(favorites.includes(character.id))
  }, [character.id])

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteCharacters')) || []
    if (isFavorited) {
      const updatedFavorites = favorites.filter((id) => id !== character.id)
      localStorage.setItem('favoriteCharacters', JSON.stringify(updatedFavorites))
      setIsFavorited(false)
    } else {
      const updatedFavorites = [...favorites, character.id]
      localStorage.setItem('favoriteCharacters', JSON.stringify(updatedFavorites))
      setIsFavorited(true)
    }
  }

  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      {console.log(character.origin?.name)}
      <div className="character-details">
        <h2>{character.name}</h2>
        <p>Species: {character.species}</p>
        <p>Gender: {character?.gender}</p>
        <p>Origin: {character?.origin?.name}</p>
        <p>Status: {character.status}</p>
        <button onClick={toggleFavorite}>
          {isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  )
}

export default CharacterCard