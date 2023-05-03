import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            {/* <footer className='bg-warning mb-0 w-100 position-fixed-bottom'>
                <Container className='pt-4'>
                    <Row xs={1} md={2} lg={4}>
                        <Col  >
                            <h5>About Us</h5>
                            <p>We are a company that specializes in building great websites.</p>
                        </Col>
                        <Col >
                            <h5>Links</h5>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to="/recipe">Recipe</Link></li>
                                <li><Link to="/about">About us</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                            </ul>
                        </Col>
                        <Col>
                            <h5>Contact Us</h5>
                            <p>123 Main St<br />Anytown, USA<br />(123) 456-7890</p>
                        </Col>
                    </Row>
                </Container>
                
            </footer>  */}
            <p className='text-center'><small>Copyright of my chef recipe</small></p>
        </div>
    );
};

export default Footer;