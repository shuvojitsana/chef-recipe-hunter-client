import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartRecipe = ({ recipe }) => {

    const { title, picture, about} = recipe;
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
                                    {about}
                                </Card.Text>
                            </Card.Body>
                            <Link to="/recipes/:id"><Button>More Details</Button></Link>
                        </Card>
                    </Col>
                {/* ))} */}
            </Row>
        </div>
    );
};

export default CartRecipe;