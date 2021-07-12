import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "../Home.css";
const course1 = () => {
  return (
    <div className="c1">
      <Accordion defaultActiveKey="0">
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>1. MongoDB Introduction</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Link href="https://www.interviewbit.com/mongodb-interview-questions/">
                <h4> Introduction</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="info" text="white">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>2. NoSQL vs SQL</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.mongodb.com/nosql-explained/nosql-vs-sql">
                <h4>NoSQL vs SQL</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>3. MongoDB Full Playlist</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.youtube.com/watch?v=vb8xZ-bvxbg&list=PLLAZ4kZ9dFpOFJ9JcVW9u4PlSWO-VFoao">
                <h4>Mongodb Complete Course</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="info" text="white">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>4. Mongodb Crash Course</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.youtube.com/watch?v=pWbMrx5rVBE">
                <h4>Mongo Crash Course</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>5. Mongo interview questions</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.interviewbit.com/mongodb-interview-questions/">
                <h4>Interview Questions</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="info" text="white">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>6. Mongo beginner Project1 - URL Shortner</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://dev.to/the_ghost_dev/mern-url-shortener-app-part-1-4pmi">
                <h4>URL Shortner Project</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>7. Mongo Intermediate Project2 - CRUD App</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.youtube.com/watch?v=W1Kttu53qTg">
                <h4>CRUD Application</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default course1;
