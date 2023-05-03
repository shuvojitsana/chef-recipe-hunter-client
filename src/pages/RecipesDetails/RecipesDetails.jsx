import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const RecipesDetails = () => {
    // const {id} = useParams();

    const recipe = useLoaderData();
    console.log(recipe);

    const { picture, title, about } = recipe;

    return (
        <div>
            <Card className='mx-auto mt-5 text-center flex ' style={{ width: '50rem',  }}>
                <Card.Img className='w-50 p-3 rounded-5' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default RecipesDetails;