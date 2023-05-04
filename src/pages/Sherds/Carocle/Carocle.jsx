import React from 'react';
import { Carousel } from 'react-bootstrap';


const Carocle = () => {
    return (
        <div className='mt-5'>
            <div className='text-center mt-5'>
                <h2>Best Food Taste</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil velit aperiam facere?</p>
            </div>
            <Carousel>

                <Carousel.Item interval={1000}>
                    <img
                        style={{height: '30rem'}}
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/homemade-blackberry-pie-sweet-pie-with-blackberry-rustic-wooden-table_264437-4673.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3>Cakes Best Teast</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        style={{height: '30rem'}}
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/pancake-tower-with-yogurt-nuts-cherry-jam_135427-7917.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3>Paczki Cake </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{height: '30rem'}}
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/valentine-s-day-breakfast-with-cute-crepes_136595-4833.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h3>Dundee Cake</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carocle;