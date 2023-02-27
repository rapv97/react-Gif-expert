import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {
 
 
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => setInputValue( target.value );

        // console.log(target.value);

    const onSubmit = (event) => {
        event.preventDefault();
         if (inputValue.trim().length <= 1) return;

        // onNewCategory((categories) => [ inputValue, ...categories ])
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }
    
    return (
        //era de esta manera
        // onSubmit={ (event) => onSubmit(event)}
        //se dejo como en el formm ya que ese callback recibe un argumento y ese argumento es pasado inmediatamente
        // al llamado de la funcion por lo que se puede resumir y el lo manda por referencia
        <form onSubmit={ onSubmit }>
            
             <input 
                type="text"  
                name="" 
                id=""
                placeholder="buscar Gifs"
                value={inputValue}
                onChange={ onInputChange}
            />
            
    {/*orginialmente era asi
     (event) => onInputChange(event) */}
        </form>
       
    
  )
}
