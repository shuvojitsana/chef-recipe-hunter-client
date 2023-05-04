import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../../firebase/firebase.console';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, upDateProfile } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    const handleGooglSignIn = () =>{
        signInWithPopup(auth, provider)
        .then(result =>{
            const createUser = result.user;
            setUser(createUser);
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
            form.reset();
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })


    }

    const handleGithubSignIn = event =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const createUser = result.user;
            setUser(createUser);
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.error(error)
            setError(error.message)
        })
    }

    

    return (
        <div>
            <Container className='w-25 mx-auto'>
                <h3>Please Login</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="info" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't Have an Account ?<Link to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>

                <Button  variant="outline-warning" className='text-success border-white' onClick={handleGooglSignIn}><FaGoogle style={{  fontSize: '2rem', color:"red" }}></FaGoogle> Google Login</Button>
                <Button  variant="outline-warning" className='text-success border-white' onClick={handleGithubSignIn}><FaGithub style={{ fontSize: '2rem' , }}></FaGithub> Github Login</Button>

                <p><small className='text-danger'>{error}</small></p>
            </Container>
            
        </div>
    );
};

export default Login;