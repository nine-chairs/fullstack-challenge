import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterList from '../components/CharacterList'
import Navbar from '../components/Navbar'

const CharacterPage = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get('/db/characters')
      .then(response => {
        setCharacters(response.data)
      })
      .catch(error => {
        console.error('Error fetching characters:', error)
      })
  }, [])

  return (
    <>
      <Navbar />
      <CharacterList characters={characters} />
    </>
  )
}

export default CharacterPage