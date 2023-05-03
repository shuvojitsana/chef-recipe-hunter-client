import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';

const CartRecipe = ({ recipe }) => {

    const { _id, title, picture, about, rating, author } = recipe;
    return (
        <div>
            <Container>
                <Row className="g-4 mt-2">
                    {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
                    <Col>
                        {/* <Card >
                            <Card.Img  className=' w-50  rounded-2' rounded variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {about.length < 250 ? <> {about}</> : <> {about.slice(0, 250)}...<Link to={`/recipes/${_id}`}>Details More</Link></>}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/recipes/${_id}`}><Button>More Details</Button></Link>
                        </Card> */}
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <img className='rounded-3' style={{ width: '24rem' }} src={picture} alt="" />
                            </div>
                            <div>
                                <h2 className='mb-0'>{title}</h2>
                                <div className='d-flex gap-5'>
                                    <p className='mb-0 font-monospace' ><FaClock className='text-'></FaClock> 1 hours</p>
                                    <p className='mb-0'><small>({rating.number})</small></p>
                                </div>
                                <p className='mb-0'>Easily add-in a short description about your recipe! This can be of any length. Remember, you are trying to sell your recipe!</p>
                                <div>
                                    <Image src="holder.js/171x180" roundedCircle />
                                    <h5 className='mb-0'>Recipe by {author.name}</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/* ))} */}
                </Row>
            </Container>
        </div>
    );
};

export default CartRecipe;