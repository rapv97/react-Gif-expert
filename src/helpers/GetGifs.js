

export const getGifs = async( category ) => {
    const apiKey = 'cIoWty7z3hCVXdypGA3skjsH2R4iH2N2'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=10`
    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( ( img ) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}
