import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import CreateTeamHandler from "../teams/CreateTeamHandler";
function WorkSpaceBody({ fromWorkSpace, toggle }) {
  const [cards, setCards] = useState([]);
  const [spaceInstanceBody, setSpaceInstanceBody] = useState(true);

  // fn to remove duplicates
  const removeDuplicates = (arr) => {
    const seen = new Set();
    return arr.filter((item) => {
      if (!seen.has(item.spaceName)) {
        seen.add(item.spaceName);
        return true;
      }
      return false;
    });
  };

  const uniqueWorkspaceData = removeDuplicates([...cards, ...fromWorkSpace]);

  useEffect(() => {
    setCards(uniqueWorkspaceData);
  }, [uniqueWorkspaceData]);

  const handleName = (data) => {
    toggle(data);
    setSpaceInstanceBody(false);
  };

  return (
    <>
      {spaceInstanceBody ? (<Row xs={3} md={3} className="g-4">
        {cards.map((card, index) => (
          <Col key={index}>
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
                <h2>{card.spaceName}</h2>
                <h5>Space Category</h5>
                <p>
                  <em>{card.spaceDescription}</em>
                </p>
              </Card.Body>
              <Card.Footer>
                  <Button
                  onClick={() => {
                      const name = (
                        <div>
                          Space / <span style={{color:"blue"}}> {card.spaceName}</span>
                        </div>
                      );
                      handleName(name);
                    }}
                    variant="outline-secondary">
                    <h6>Manage Space</h6>
                  </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>): <CreateTeamHandler /> }
    </>
  );
}

export default WorkSpaceBody;
