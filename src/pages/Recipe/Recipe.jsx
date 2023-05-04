import React, { useEffect, useState } from 'react';
import CartRecipe from '../Sherds/CardRecipe/CartRecipe';


const Recipe = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className='mt-5'>
            <h2 className='text-center'>All Recipes</h2>

            <div className='recipe'>
                {
                    recipes.map(recipe => <CartRecipe
                        key={recipe._id}
                        recipe={recipe}
                    ></CartRecipe>)
                }
            </div>
        </div>
    );
};

export default Recipe;