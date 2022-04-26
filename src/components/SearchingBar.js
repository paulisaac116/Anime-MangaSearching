import React, { useState } from 'react';
import { SearchButton } from './SearchButton';

export const SearchingBar = React.memo( ( { setAnime } ) => {

    const [input, setInput] = useState( '' );

    const handleInputChange = ( { target } ) => {
        setInput( target.value );
    };

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setAnime( input );
    };





    // const handleSubmit = ( e ) => {
    //     e.preventDefault();
    //     const title = document.getElementById( 'title' );
    //     console.log( title.value );
    //     const request = useFetch( title.value );
    //     console.log();
    //     console.log( request );
    //     reset();

    //     // setValue()
    // };

    // const [value, handleInputChange, reset] = useForm( {
    //     title: ''
    // } );

    // const { title } = value;
    // console.log( 'otra vez :(' );

    return (
        <div className='searching-bar'>
            <SearchButton />
            <form onSubmit={handleSubmit} className='form-bar'>
                <div className='input-border'>
                    <input
                        id='title'
                        name='title'
                        type='text'
                        placeholder='Akira'
                        onChange={handleInputChange}
                        value={input}
                    />
                </div>
            </form>
        </div>
    );
} );


