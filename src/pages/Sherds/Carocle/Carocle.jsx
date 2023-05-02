import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner2 from '../../../assets/banner2.jpg'

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
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
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