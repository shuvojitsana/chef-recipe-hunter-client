import React from 'react';
import Banner from '../Banner/Banner';
import ChefRecipe from '../../Sherds/ChefRacipe/ChefRecipe';
import Carocle from '../../Sherds/Carocle/Carocle';
import Recipe from '../../Recipe/Recipe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <ChefRecipe></ChefRecipe>

            <Carocle></Carocle>
            <Recipe></Recipe>
        </div>
    );
};

export default Home;