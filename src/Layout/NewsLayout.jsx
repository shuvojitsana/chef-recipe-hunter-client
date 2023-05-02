import React from 'react';
import Header from '../pages/Sherds/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Sherds/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;