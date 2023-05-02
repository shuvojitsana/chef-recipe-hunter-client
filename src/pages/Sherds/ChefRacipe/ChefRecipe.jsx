import React from 'react';
import bold1 from '../../../assets/bold1.webp';
import bold2 from '../../../assets/bold2.jpeg';
import bold3 from '../../../assets/bold3.webp';
import bold5 from '../../../assets/bold5.jpeg';
import small3 from '../../../assets/small3.jpg';
import small2 from '../../../assets/small2.webp';
import { Col, Container, Row } from 'react-bootstrap';

const ChefRecipe = () => {
    return (
        <div>

            <Container>
                <div className='text-center'>
                    <h3>Best Food Item</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias aspernatur voluptas eius!</p>
                </div>
                <Row className='grid'>
                    <img className=' w-25 rounded-4 ' src={bold1} alt="" />
                    <img className='w-25  rounded-4' src={bold2} alt="" />
                    <img className='w-25  rounded-4' src={bold3} alt="" />
                    <img className='w-25 rounded-4' src={bold5} alt="" />
                </Row>
                
                <Col className='mt-2 mx-auto'>
                    <img className='me-3 rounded' style={{width: '125px'}}  src={small3} alt="" />
                    <img className='rounded me-4 ' style={{width: '122px'}}  src={small2} alt="" />
                    <img className='me-3 rounded' style={{width: '125px'}}  src={bold2} alt="" />
                    <img className='rounded me-4' style={{width: '122px'}}  src={bold3} alt="" />
                    <img className='me-3 rounded' style={{width: '125px'}}  src={small2} alt="" />
                    <img className='rounded me-3' style={{width: '122px'}}  src={small3} alt="" />
                    <img className='me-3 rounded' style={{width: '125px'}}  src={bold2} alt="" />
                    <img className='rounded' style={{width: '122px'}}  src={bold3} alt="" />
                </Col>

            </Container>


        </div>
    );
};

export default ChefRecipe;