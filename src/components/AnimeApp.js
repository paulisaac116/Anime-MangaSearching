import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { PicturesGrid } from './PicturesGrid';
import { SearchingBar } from './SearchingBar';

export const AnimeApp = () => {

  const [anime, setAnime] = useState('akira');

  return (
    <div className='main'>
        <h1>Anime Searching</h1>
        <p>Look at your favourite anime or manga serie</p>
        <hr></hr>
        <SearchingBar
          setAnime={setAnime}
        />
        <PicturesGrid 
          title={anime}
        />
    </div>
  )
}
