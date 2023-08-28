import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import CreateTeamHandler from "../teams/CreateTeamHandler";
import TeamOverView from "../teams/teamOverView/TeamOverView"

function WorkSpaceBody({ fromWorkSpace, toggle, teamInfo }) {
  const [cards, setCards] = useState([]);
  const [overallDisplay, setOverallDisplay] = useState(true);
  const [spaceInstanceBody, setSpaceInstanceBody] = useState(true);

  const spaceToggle = (mn, teamName) => {
    setOverallDisplay(!overallDisplay);
    console.log(mn, teamName);
    teamInfo(teamName);
  };

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
  }, [fromWorkSpace, uniqueWorkspaceData]);

  const handleName = (data) => {
    toggle(data);
    setSpaceInstanceBody(false);
  };

  return (
    <>
      {overallDisplay ? (
        spaceInstanceBody ? (
          <Row xs={3} md={3} className="g-4">
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
                        <span style={{ fontSize: "24px", color: "white" }}>
                          C
                        </span>
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
                            Space :
                            <span style={{ color: "blue" }}>
                              {" "}
                              {card.spaceName}
                            </span>
                          </div>
                        );
                        handleName(name);
                      }}
                      variant="outline-secondary"
                    >
                      <h6>Manage Space</h6>
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <CreateTeamHandler toggle={spaceToggle} />
        )
      ) : (
        <TeamOverView />
      )}
    </>
  );
}

export default WorkSpaceBody;
