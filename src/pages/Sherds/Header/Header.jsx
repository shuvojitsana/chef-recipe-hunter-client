import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';



const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='text-warning'>Master Chef</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Link to='/'>Home</Link>
                        <Link to="/recipe">Recipe</Link>
                        <Link to="/about">About us</Link>
                        <Link to="/blogs">Blogs</Link>
                        
                    </Nav>
                    <Nav>
                        <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                        <Link to='/login'><Button variant="warning">Login</Button></Link>
                    </Nav>

                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;