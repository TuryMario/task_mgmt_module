import React, { useState } from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const TeamList = ({ teams, toggle }) => {
    const [spaceBody, setSpaceBody] = useState(true);
    const spaceHandler = (data) => {
        // console.log(data)
        setSpaceBody(!spaceBody);
        toggle(spaceBody, data);
    }

    return (
        <div>
            <h2>Team List</h2>
            <div className="d-flex flex-wrap">
                {teams.map((team, index) => (
                    <Card key={index} className="m-2" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{team.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Members</Card.Subtitle>
                            <ListGroup>
                                {team.members.map((member, memberIndex) => (
                                    <ListGroup.Item key={memberIndex}>{member.name}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <Button variant="secondary" className="mt-3">
                                Add new member
                            </Button>
                            <Button onClick={() => spaceHandler(team.name)}>details</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TeamList;
