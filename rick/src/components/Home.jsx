import React,{useEffect, useState} from 'react'
import { allCharacters } from '../functions/functions'

const Home = () => {
  const [character, setCharacters] =useState(null)
  useEffect(()=>{
    allCharacters(setCharacters)
  },[])
  return (
    <>
      {character != null ? (
        character.map(character => (
        <div key={character.id}>
          <a href={`/character/${character.id}`}>{character.name}</a>
          <img src={character.image} alt=''></img>
        </div> 
        ))
      ):('no')}




    </>
  )
}

export default Home