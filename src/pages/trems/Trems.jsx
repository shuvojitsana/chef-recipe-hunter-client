import React from 'react';
import { Link } from 'react-router-dom';

const Trems = () => {
    return (
        <div>
            <h2>This is Trems Condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quos nostrum inventore vitae ipsum voluptatum ratione ad cum reiciendis, dignissimos mollitia obcaecati, cumque corrupti quisquam.</p>
            <p>trems card is here <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Trems;