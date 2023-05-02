import React from 'react';
import template from '../../../assets/template.png'

const Banner = () => {
    return (
        <div>
            <div>
                <>
                    <img style={{ height: '100vh', width: '100%' }} src={template} alt="" />
                </>
                <h1>BEST FOOD FOR YOUR TASTE</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iure, nihil maiores voluptatum culpa adipisci quidem, suscipit ducimus, sapiente iste neque veniam minima cupiditate sit!</p>
            </div>
        </div>
    );
};

export default Banner;