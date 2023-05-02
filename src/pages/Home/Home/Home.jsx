import React from 'react';
import Banner from '../Banner/Banner';
import ChefRecipe from '../../Sherds/ChefRacipe/ChefRecipe';
import Carocle from '../../Sherds/Carocle/Carocle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <ChefRecipe></ChefRecipe>

            <Carocle></Carocle>
        </div>
    );
};

export default Home;