import React, { useEffect, useState } from 'react';
import CartRecipe from '../Sherds/CardRecipe/CartRecipe';

const Recipe = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>All Recipes: {recipes.length}</h2>

            {
                recipes.map(recipe => <CartRecipe
                    key={recipe._id}
                    recipe={recipe}
                ></CartRecipe>)
            }
        </div>
    );
};

export default Recipe;