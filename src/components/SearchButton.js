import React, { useEffect, useState } from 'react';

export const SearchButton = () => {

  const [animeButton, setAnimeButton] = useState( {
    name: 'anime',
    title: 'Anime',
    hide: false
  } );

  const [mangaButton, setMangaButton] = useState( {
    name: 'manga',
    title: 'Manga',
    hide: true
  } );

  const [buttons, setButtons] = useState( [animeButton] );


  const handleMenuChange = ( { target } ) => {

    if ( target.name === 'anime' && buttons.length == 1 ) {
      setButtons( [
        ...buttons,
        mangaButton
      ] );
    }
    else if ( target.name === 'anime' && buttons.length == 2 ) {
      setButtons( [animeButton] );
    }
    else if ( target.name === 'manga' && buttons.length == 2 ) {
      setButtons( [mangaButton] );
    }
    else if ( target.name === 'manga' && buttons.length == 1 ) {
      setButtons( [
        ...buttons,
        animeButton
      ] );
    }

  };


  return (
    <div className='button-toggle'>
      {/* <button 
        name='anime'
        className={`${!!animeButton.hide && 'hide'}`} 
        onClick={handleMenuChange}
      >
        {animeButton.name}
      </button>
      <button 
        name='manga'
        className={`${!!mangaButton.hide && 'hide'}`} 
        onClick={handleMenuChange}
      >
        {mangaButton.name}
      </button> */}

      {
        buttons.map( ( button ) => (
          <button
            key={button.name }
            name={button.name}
            onClick={handleMenuChange}
          >
            {button.title}
          </button> )
        )
      }
    </div>
  );
};
