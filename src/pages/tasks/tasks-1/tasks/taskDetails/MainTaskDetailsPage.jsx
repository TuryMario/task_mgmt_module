import React from "react";

import TaskStatusDetails from "./taskStatusDetails/TaskStatusDetails";
import TaskMessaging from "./taskMessaging/TaskMessaging";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

function MainTaskDetailsPage() {
  return (
    <>
      <Container style={{ margin: "10px" }}>
        <Card>
          <Card.Header>
            <h2>Task Name</h2>
          </Card.Header>
          <Row style={{ margin: "10px 5px 10px 5px" }}>
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    <TaskStatusDetails />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    <TaskMessaging />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

export default MainTaskDetailsPage;
