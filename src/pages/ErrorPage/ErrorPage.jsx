import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPages = () => {
    const error = useRouteError();
    return (
        <div className='text-center mt-5'>
            <img className='w-50' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1683006080~exp=1683006680~hmac=b720a5074fe13c63ec624dcbb6e10becaa648cbdf98e49ddefcfd0a73b42f3a7" alt="" />
            <h1>404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/"> back to home page</Link>
        </div>
    );
};

export default ErrorPages;