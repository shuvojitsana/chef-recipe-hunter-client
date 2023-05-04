import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-info mb-0 mt-5'>

            <footer>
                <Container className='pt-4'>
                    <Row className='w-100 mx-auto' xs={1} md={2} lg={4}>
                        <Col  >
                            <h5>About Us</h5>
                            <p>We are a company that specializes in building great websites.</p>
                            <input type="email" className='p-1 rounded-2 border-white' name="" id=""  placeholder='email'/>
                            <br />
                            <Link to="/"><button className='mt-2 border-white p-1 rounded'>Submit</button></Link>
                        </Col>
                        <Col >
                            <h5>Links</h5>
                            <ul>
                                <Link className=' text-decoration-none text-black' to='/'>Home</Link>
                                <br></br>
                                <Link className=' text-decoration-none text-black' to="/recipe">Recipe</Link>
                                <br></br>
                                <Link className=' text-decoration-none text-black' to="/blogs">Blogs</Link>
                            </ul>
                        </Col>
                        <Col>
                            <h5>Contact Us</h5>
                            <p>123 Main St<br />Anytown, USA<br />(123) 456-7890</p>
                            
                        </Col>
                    </Row>
                </Container>
                
            </footer> 

            <p className='text-center'><small>Copyright of my chef recipe</small></p>
        </div>
    );
};

export default Footer;