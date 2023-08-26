import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate }  from 'react-router-dom';

const TeamList = ({ teams, setTeams , handleAddMemberClick}) => {
    const navigate = useNavigate();

    const handleDeleteTeam = (index) => {
        const updatedTeams = teams.filter((team, teamIndex) => teamIndex !== index);
        setTeams(updatedTeams);
    }

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
                                    onClick={() => handleDeleteTeam(index)} // Pass the index of the team to be deleted team
                                >
                                    Delete
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{marginLeft: '5px' }}
                                    className="mt-3"
                                    onClick={() => {
                                        navigate(`/teamOverView`);
                                    }}

                                >
                                    Details
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Link to="/"><Button>Back to Workspace</Button></Link>
        </div>
    );
};
export default TeamList;
