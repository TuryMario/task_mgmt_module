import React, { useState } from 'react';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TeamList = ({ teams, setTeams }) => {

    return (
        <div>
            <h2>Team List</h2>
            <div className="d-flex flex-wrap">
                {teams.map((team, index) => (
                    <Card key={index} className="m-2" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{team.name}</Card.Title>
                            {/*<Card.Subtitle className="mb-2 text-muted">Members</Card.Subtitle>*/}
                            {/*<ListGroup>*/}
                            {/*    {team.members.map((member, memberIndex) => (*/}
                            {/*        <ListGroup.Item key={memberIndex}>{member.name}</ListGroup.Item>*/}
                            {/*    ))}*/}
                            {/*</ListGroup>*/}
                            <div className="text-left">
                                <Button
                                    variant="outline-danger"
                                    className="mt-3"
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{marginLeft: '5px' }}
                                    className="mt-3"

                                >
                                    Details
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Link to="/task-messaging"><Button>Back to Workspace</Button></Link>
        </div>
    );
};
export default TeamList;
