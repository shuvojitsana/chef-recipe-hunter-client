import React from 'react';
import template from '../../../assets/template.png'
import './Banner.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (

        <div className='backgroundImg text-white d-flex justify-content-center align-items-center'>

            <div className=''>
                <h1  style={{fontSize: '65px'}}>BEST FOOD FOR <br /> YOUR TASTE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iure, nihil maiores voluptatum culpa adipisci quidem, <br /> suscipit ducimus, sapiente iste neque veniam minima cupiditate sit!</p>
                <Link><Button className='bg-warning text-white'>Get Start</Button></Link>
            </div>
        </div>
    );
};

export default Banner;