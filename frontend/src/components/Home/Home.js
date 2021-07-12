import React, { useEffect } from "react";
import "./Home.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card className="card1" style={{ width: "30rem", height: "40em" }}>
              <Card.Img
                variant="top"
                src="https://www.tutorialspoint.com/mongodb/images/mongodb-mini-logo.jpg"
              />
              <Card.Body>
                <Card.Text>
                  <h3>MongoDB - The Complete Developer's Guide 2021 </h3>
                  <h6>
                    Master MongoDB Development for Web & Mobile Apps. CRUD
                    Operations - All about MongoDB!
                  </h6>
                </Card.Text>
                <a href="/course1">
                  <Button variant="primary">Go to course</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card2" style={{ width: "30rem", height: "40em" }}>
              <Card.Img
                variant="top"
                src="https://www.learntek.org/wp-content/uploads/2016/01/rsz_pp.jpg"
              />
              <Card.Body>
                <Card.Text>
                  <h2>
                    The Python Mega Course: Build 10 Real World Applications{" "}
                  </h2>
                  <p>
                    <h7>
                      This Course Teaches You The Python Language Fast. Includes
                      Python Online Training With Python 3{" "}
                    </h7>
                  </p>
                  <p>
                    <h7>
                      Go from zero to hero in Python in weeks! Learn Python the
                      easy way by building real-life Python programs!
                    </h7>
                  </p>
                </Card.Text>
                <a href="/course2">
                  <Button variant="primary">Go to course</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card3" style={{ width: "30rem", height: "40em" }}>
              <Card.Img
                variant="top"
                src="https://i.morioh.com/67feeaf72f.png"
              />
              <Card.Body>
                <Card.Text>
                  <h2>MERN eCommerce From Scratch</h2>
                  <p>
                    <h6>
                      Build an eCommerce platform from the ground up with React,
                      Redux, Express & MongoDB
                    </h6>
                  </p>
                </Card.Text>
                <a href="/course3">
                  <Button variant="primary">Go to course</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card4" style={{ width: "30rem", height: "40em" }}>
              <Card.Img variant="top" src="https://bit.ly/3xCFzhd" />
              <Card.Body>
                <Card.Text>
                  <h2>
                    Data Structure & Algorithm using C++ : Zero To Mastery 2021
                  </h2>
                  <p>
                    <h7>Revision of C programming language</h7>
                  </p>
                  <p>
                    <h7>Revision of C++ programming language</h7>
                  </p>
                  <p>
                    <h7>
                      Basics of data structures which include Arrays, Recursion,
                      Linked Lists, Trees, HashMap, Stacks, Queues, Heaps
                    </h7>
                  </p>
                </Card.Text>
                <a href="/course4">
                  <Button variant="primary">Go to course</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
