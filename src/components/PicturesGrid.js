import React from 'react';
import { getImages } from '../helpers/getImages';
import { useFetch } from '../hooks/useFetch';

export const PicturesGrid = ( { title } ) => {

    const { data, loading } = useFetch( title );
    const { id, name, desc, coverImage, posterImage } = data;

    // console.log(data)
    /**
     * QUESTION
     *  why using destructuring on 'data' we cannot use the information
     *  into the array?
     */

    return (
        <div className='anime-grid'>
            {loading && <p>Loading...</p>}
            {
                data.map( anime => (
                    <div
                        className='anime-item'
                        key={anime.id}
                    >
                        <div className='anime-item__images'>
                            <img
                                src={anime.posterImage}
                                alt={anime.name}
                                className='poster'
                            />
                            <img
                                src={anime.coverImage}
                                alt={anime.name}
                                className='cover'
                            />
                        </div>
                        <h3>{anime.name}</h3>
                        <p>{anime.desc}</p>
                    </div>
                ) )
            }
        </div>
    );
};
