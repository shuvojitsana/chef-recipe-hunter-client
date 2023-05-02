import React from 'react';

const RecipeItem = ({recipesDetail}) => {
    console.log(recipesDetail);

    const {title} = recipesDetail;
    return (
        <div>
            <h2>Recipe: {title}</h2>
        </div>
    );
};

export default RecipeItem;