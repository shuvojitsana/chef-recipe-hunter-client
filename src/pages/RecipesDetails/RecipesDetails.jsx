import React from 'react';
import { useLoaderData } from 'react-router-dom';


const RecipesDetails = () => {
    // const {id} = useParams();

    const recipe = useLoaderData();
    console.log(recipe);
    
    return (
        <div>
            <h2>Recipe Details :{recipe.length}</h2>
            
        </div>
    );
};

export default RecipesDetails;