import React, { useState } from 'react';
import { Card, ListGroup, Button, Modal } from 'react-bootstrap';
import Tasks from '../../pages/tasks/Tasks';
import SearchBar from '../../pages/teams/SearchBar';
import { Link } from 'react-router-dom';
import CreateTask from "../createTask/CreateTask";

const TeamList = ({ teams, setTeams }) => {
    // const [taskModalShow, setTaskModalShow] = useState(false);
    const [showSearchBarModal, setShowSearchBarModal] = useState(false);
    const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);

    const handleAddMemberClick = (teamIndex) => {
        setSelectedTeamIndex(teamIndex);
        setShowSearchBarModal(true);
    };

    const handleSearchClose = () => {
        setShowSearchBarModal(false);
        setSelectedTeamIndex(null);
    };

    const handleSearch = (query) => {
        if (selectedTeamIndex !== null) {
            const updatedTeams = teams.map((team, index) => {
                if (index === selectedTeamIndex) {
                    const selectedMember = team.members.find(member => member.name.toLowerCase().includes(query.toLowerCase()));
                    if (selectedMember) {
                        const updatedTeam = {
                            ...team,
                            members: [...team.members, selectedMember],
                        };
                        setTeams(updatedTeams);
                        handleSearchClose();
                        return updatedTeam;
                    }
                }
                return team;
            });
        }
    };

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
                            <div className="text-left">
                                <Button
                                    variant="outline-danger"
                                    className="mt-3"
                                    onClick={() => handleAddMemberClick(index)}
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
           {/*<CreateTask/>*/}
            <Modal show={showSearchBarModal} onHide={handleSearchClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Search and Add Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SearchBar
                        onSearch={(query) => handleSearch(query)}
                        onClose={handleSearchClose}
                    />
                </Modal.Body>
            </Modal>
            {/*<Link to="/view-tasks"><Button>View Tasks</Button></Link>*/}
            <Link to="/task-messaging"><Button>Back to Workspace</Button></Link>
        </div>
    );
};
export default TeamList;
