import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = ( category ) => {

     const [images, setImages] = useState( [] );
     const [isLoading, setIsloading] = useState( true);


    const buscarImages = async () => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsloading( false );
    }

    //el use efect sirve para disparar efectos secundarios
    //algun proceso que se quiera ejecutar cuando algo suceda como el cambie de un estado etc

    useEffect(() => {
        buscarImages();
    
        //este return esta destinado a hacer una limpieza en el caso que el useEffect tuviese un observable o una funcion pendiente de cambio
    //   return () => {
    //     second
    //   }

    // arreglo de dependencias, si las deja vacias el hook solo se disparara la primer ves que se crea el componente
    }, [])


    return {
        images,
        isLoading
    }
}
