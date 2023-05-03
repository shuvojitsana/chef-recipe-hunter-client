import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartRecipe = ({ recipe }) => {

    const { _id,title, picture, about} = recipe;
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4 mt-2">
                {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={picture} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {about.length < 250 ? <> {about}</>: <> {about.slice(0, 250)}...<Link to={`/recipes/${_id}`}>Details More</Link></>}
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/recipes/${_id}`}><Button>More Details</Button></Link>
                        </Card>
                    </Col>
                {/* ))} */}
            </Row>
        </div>
    );
};

export default CartRecipe;