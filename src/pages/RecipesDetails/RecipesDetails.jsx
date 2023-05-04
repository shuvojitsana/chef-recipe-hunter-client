import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaClock, FaRegStar, FaStar, FaEye, FaFileAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';


const RecipesDetails = () => {
    // const {id} = useParams();

    const recipe = useLoaderData();
    console.log(recipe);

    const { _id, title, picture, about, rating, author, total_view } = recipe;

    return (
        <div>
            <div>
                <Container>
                    <h1 className='mb-0 mt-4 text-info'>{title}</h1>

                    <div className='d-flex align-items-center gap-3 mt-3'>
                        <div>
                            <Image style={{ height: "120px" }} src={author.img} roundedCircle />
                        </div>
                        <div >

                            <h5 className='mb-1'>Recipe by <span className='text-success'>{author?.name}</span></h5>
                            <div>
                                <p className='mb-1 text-warning'><Rating
                                    placeholderRating={Rating.number}
                                    readonly
                                    emptySymbol={<FaRegStar></FaRegStar>}
                                    placeholderSymbol={<FaStar className=' text-warning'></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                >

                                </Rating></p>
                                <small className='text-success'>(<FaEye></FaEye> {total_view} views)</small>
                            </div>
                            <div className='d-flex gap-2 mt-2'>
                                <p className='mb-0 font-monospace' ><FaClock className='text-success'></FaClock> {rating?.badge} min</p>
                                <p className='font-monospace'>Prep: 30 min. | | Servings: 6 servings</p>
                            </div>

                        </div>
                    </div>
                </Container>
                <Container>

                    <Row className="g-4 mt-2">
                        <Col>
                            <div className='md:d-flex-none sm:d-flex-none lg:d-flx gap-5 justify-content-center align-items-center )'>
                                <div>
                                    <img className='rounded-3' style={{ width: '35rem'  }} src={picture} alt="" />
                                </div>
                                <div>
                                    <h2 className='mb-0'>{title}</h2>
                                    <div className='d-flex gap-5  mt-3'>
                                        <p className='mb-0 font-monospace' ><FaClock className='text-success'></FaClock> {rating?.badge} min</p>
                                        <p className='text-success'>(<FaEye></FaEye> {total_view} views)</p>
                                    </div>
                                    <p className='mb-0 mt-3'>Easily add-in a short description about your recipe! This can be of any length.  Remember,<br></br> you are trying to sell your recipe!</p>
                                    <div className='d-flex  align-items-center gap-4 mt-3'>
                                        <Image style={{ height: "40px" }} src={author.img} roundedCircle />
                                        <p className='mb-0'>Recipe by <span className='text-success'>{author?.name}</span></p>

                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>

                    <div className='mt-5 w-75  card p-3'>
                        <h4> <FaFileAlt></FaFileAlt> Details</h4>
                        <p>{about}</p>
                        <div className='d-flex justify-content-between'>
                            <p className='mb-0'>Rating <Rating className='text-warning'
                                placeholderRating={Rating.number}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className=' text-warning'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            >

                            </Rating></p>
                            <p className='text-success'>{rating?.number}</p>
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default RecipesDetails;