import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaClock, FaRegStar, FaStar, FaEye } from 'react-icons/fa';
import Rating from 'react-rating';
import "./CartRecipe.css"

const CartRecipe = ({ recipe }) => {

    const { _id, title, picture, about, rating, author, total_view } = recipe;
    return (
        <div>

            <Container>
                <Row    className="g-4 mt-2">
                    <Col>
                        <div className='d-flex gap-5 justify-content-center align-items-center style'>
                            <div>
                                <img className='rounded-3' style={{ width: '24rem' }} src={picture} alt="" />
                            </div>
                            <div>
                                <h2 className='mb-0'>{title}</h2>
                                <div className='d-flex gap-5  mt-3'>
                                    <p className='mb-0 font-monospace' ><FaClock className='text-success'></FaClock> {rating?.badge} min</p>
                                    <p className='mb-0'><Rating
                                        placeholderRating={Rating.number}
                                        readonly
                                        emptySymbol={<FaRegStar></FaRegStar>}
                                        placeholderSymbol={<FaStar className=' text-warning'></FaStar>}
                                        fullSymbol={<FaStar></FaStar>}
                                    >

                                    </Rating> <small className='text-success'>(<FaEye></FaEye> {total_view} views)</small></p>
                                </div>
                                <p className='mb-0 mt-3'>Easily add-in a short description about your recipe! This can be of any length. <br></br> Remember, you are trying to sell your recipe!</p>
                                <div className='d-flex  align-items-center gap-4 mt-3'>
                                    <Image style={{ height: "40px" }} src={author.img} roundedCircle />
                                    <p className='mb-0'>Recipe by <span className='text-success'>{author?.name}</span></p>
                                    <Link to={`/recipes/${_id}`} className=' text-decoration-none'>More Details</Link>
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