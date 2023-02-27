import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    /* 
        se ocupo un customHook son hook que se crean desde cero o mas bien personalizados
        un custom hook se puede reutilizar en otros hooks, por ejemplo si hubiera otro componente donde queremos cargar esos gifs
        seria mas facil que solo se llame el custom hooks

        en este caso se relacionan el hook useState con el hook useEffect

    */
    const { images, isLoading} = useFetchGifs( category );

    // console.log( isLoading );    
    return (
        <>
            <h3> {category}</h3>
            {
                // ternario original
                // isLoading
                // ? ( <h2 > cargando... </h2>)
                // : null

                // ternario corto si isLoagin esta en tru, va a ejecutar el cargando, caso contrario retornara false
                isLoading && ( <h2 > cargando... </h2>)
            }
            
            <div className=' card-grid '>
                {
                    images.map(  ( image )  => (
                        <GifItem
                        key={image.id}
                        // se ocupo el operador spred para esparcir el arreglo de objetos image y tener acceso a toda sus propiedades
                        { ...image }

                        />
                    ) )
                }
                
            </div>
        </>
    )
}
