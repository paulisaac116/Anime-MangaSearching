export const getImages = async ( title ) => {

    const request = await fetch( `https://kitsu.io/api/edge/anime?filter[text]=${encodeURI( title )}` );
    const { data } = await request.json();

    console.log(data)
    const animes = data.map( anime => {
        return {
            id: anime.id,
            name: anime.attributes.titles.en,
            desc: anime.attributes.description,
            coverImage: anime.attributes.coverImage?.original,
            posterImage: anime.attributes.posterImage?.original,
        };
    } );

    return animes;
};