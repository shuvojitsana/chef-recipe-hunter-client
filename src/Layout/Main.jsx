import React from 'react';
import Header from '../pages/Sherds/Header/Header';
import Footer from '../pages/Sherds/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;