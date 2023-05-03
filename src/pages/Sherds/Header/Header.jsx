import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';



const Header = () => {
    const {user} = useContext(AuthContext);
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
                        {user && <span><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>{user.displayName}</span>}

                        { user ?
                            <Button variant="warning">Logout</Button> :
                            <Link to='/login'><Button variant="warning">Login</Button></Link>
                        }
                    </Nav>

                </Container>
            </Navbar>
            
        </div>
    );
};

export default Header;