import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "../Home.css";
const course1 = () => {
  return (
    <div className="c1">
      <Accordion defaultActiveKey="0">
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h3>1. Python Introduction</h3>
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
            <h3>2. RealTime Advantages of Python</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.mongodb.com/nosql-explained/nosql-vs-sql">
                <h4>RealTime Advantages of Python</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>3. Python Full Playlist</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.youtube.com/watch?v=vb8xZ-bvxbg&list=PLLAZ4kZ9dFpOFJ9JcVW9u4PlSWO-VFoao">
                <h4>Python Complete Course</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="info" text="white">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>4. Python Crash Course</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.youtube.com/watch?v=pWbMrx5rVBE">
                <h4>Python Crash Course</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>5. Python interview questions</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.interviewbit.com/mongodb-interview-questions/">
                <h4>Python Interview Questions</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="info" text="white">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>6. Python beginner Project1</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://dev.to/the_ghost_dev/mern-url-shortener-app-part-1-4pmi">
                <h4>Python Project1</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="dark">
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h3>7. Python Intermediate Project2</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Card.Link href="https://www.youtube.com/watch?v=W1Kttu53qTg">
                <h4>Python Intermediate Project2</h4>
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default course1;
