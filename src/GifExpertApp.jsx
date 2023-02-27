import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState( [ 'One piece' ] );  
  
  const onAddCategory = ( newCategory) => { 
    if (categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ])

    // console.log('Dragon ball');
    // setCategories( [... categories, 'Dragon ball']  );
    // setCategories( ['Dragon ball', ... categories ]  );
    
    // setCategories( cate => [... cate, 'Dragon ball']);
  
  };
  
  return (
    <>
        <h1>GifExpertApp</h1>

         <AddCategory 
        //  setCategories ={ setCategories } 
         onNewCategory = { onAddCategory } />
        
          { categories.map( ( category ) => (
              <GifGrid 
              key={ category }
              category= { category } />
           ))
           
          }
         
    </>
  )
}
