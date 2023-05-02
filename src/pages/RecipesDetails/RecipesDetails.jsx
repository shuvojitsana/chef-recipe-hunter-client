import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeItem from '../RecipeItem/RecipeItem';

const RecipesDetails = () => {
    const {id} = useParams();

    const recipesDetails = useLoaderData();
    console.log(recipesDetails);
    return (
        <div>
            <h2>Recipe Details : {recipesDetails.length}</h2>

            {/* {
                recipesDetails.find(recipesDetail => <RecipeItem
                    key={recipesDetail._id}
                    recipesDetail={recipesDetail}
                ></RecipeItem>)
            } */}
        </div>
    );
};

export default RecipesDetails;