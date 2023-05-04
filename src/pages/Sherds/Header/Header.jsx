import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='text-info'>Master Chef</Navbar.Brand>
                    <Nav className="mx-auto gap-3">
                        <Link className=' text-decoration-none text-info' to='/'>Home</Link>
                        <Link className=' text-decoration-none text-info' to="/recipe">Recipe</Link>
                        <Link className=' text-decoration-none text-info' to="/blogs">Blogs</Link>

                    </Nav>
                    <Nav>
                        {user && <span><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>{user.displayName}</span>}

                        {user ?
                            <Button onClick={handleLogout} variant="info">Logout</Button> :
                            <Link to='/login'><Button variant="info">Login</Button></Link>
                        }
                    </Nav>

                </Container>
            </Navbar>

        </div>
    );
};

export default Header;