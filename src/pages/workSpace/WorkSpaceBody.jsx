import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

function WorkSpaceBody() {
  return (
    <>
      <Row xs={3} md={3} className="g-4">
        <Col>
          <Card border="info" className="text-center">
            <Card.Body>
              <div
                style={{
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "grey",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "24px", color: "white" }}>C</span>
                </div>
              </div>
              <h2>D-Tracker Space</h2>
              <h5>Space Overview</h5>
              <p>
                <em>
                  {" "}
                  Development and Delivery Of The Digital Cargo Truch Tracker
                  System
                </em>
              </p>
            </Card.Body>
            <Card.Footer>
              <Button variant="outline-secondary">
                <h6>Manage Space</h6>
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default WorkSpaceBody;
