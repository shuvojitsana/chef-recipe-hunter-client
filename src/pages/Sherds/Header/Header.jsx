import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';
import ChefRecipe from '../ChefRacipe/ChefRecipe';


const Header = () => {
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='text-warning'>Master Chef</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#recipe">Recipe</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        <Nav.Link href="#blogs">blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>

                        <Link to='/login'><Button variant="secondary">Login</Button></Link>
                    </Nav>

                </Container>
            </Navbar>
            <Banner></Banner>

            <ChefRecipe></ChefRecipe>
        </div>
    );
};

export default Header;