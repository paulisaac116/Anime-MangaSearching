import { useEffect, useState } from "react";
import { getImages } from "../helpers/getImages";

export const useFetch = ( title ) => {

    const [anime, setAnime] = useState( {
        data: [],
        loading: true
    } );

    useEffect( () => {
        getImages( title )
            .then( anime => {
                setAnime( {
                    data: anime,
                    loading: false
                } );
            } );
    }, [title]);

    return anime;
};