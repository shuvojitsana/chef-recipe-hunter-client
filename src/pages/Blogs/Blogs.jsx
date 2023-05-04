import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center mt-4'>Blogs pages</h2>
            <Accordion className='w-75 mx-auto mt-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is  the differences between uncontrolled and controlled components?</Accordion.Header>
                    <Accordion.Body>
                    Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes?</Accordion.Header>
                    <Accordion.Body>
                    PropTypes exports a range of validators that can be used to make sure the data you receive is valid. In this example, we're using PropTypes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>what is the difference between nodejs and express js?</Accordion.Header>
                    <Accordion.Body>
                    NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
                    Compared to NodeJS, ExpressJS manages server setup clutter more efficiently. In contrast, NodeJS has an event-driven, non-blocking I/O model, which makes it a practical and lightweight server option. There must be a low-latency environment that can handle many concurrent connections.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                    <Accordion.Body>
                    Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated. How does a custom Hook get isolated state? Each call to a Hook gets isolated state.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;