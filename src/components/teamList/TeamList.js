import React, { useState, useEffect } from 'react';
import {Card, ListGroup, Button, Modal} from 'react-bootstrap';
import SearchBar from '../../pages/teams/SearchBar';
import Tasks from '../../pages/tasks/Tasks';
import { Link } from 'react-router-dom';

const TeamList = ({ teams, setTeams }) => {
    const [searchBarVisibility, setSearchBarVisibility] = useState(teams.map(() => false));
    // const [filteredTeams, setFilteredTeams] = useState(teams);
    const [taskModalShow, setTaskModalShow] = useState(false);

    const handleAddMemberClick = (teamIndex) => {
        console.log("Add New Member button clicked for team index:", teamIndex);
        const updatedSearchBarVisibility = searchBarVisibility.map((value, index) => index === teamIndex);
        setSearchBarVisibility(updatedSearchBarVisibility);
        console.log("searchBarVisibility:", searchBarVisibility);
    };

    const handleSearchClose = (teamIndex) => {
        const updatedSearchBarVisibility = searchBarVisibility.map((value, index) => {
            if (index === teamIndex) {
                return false; // Hide the search bar for the specific team
            }
            return value;
        });
        setSearchBarVisibility(updatedSearchBarVisibility);
    };

    const handleSearch = (query, teamIndex) => {
        const updatedTeams = teams.map((team, index) => {
            if (index === teamIndex) {
                const selectedMember = team.members.find(member => member.name.toLowerCase().includes(query.toLowerCase()));
                if (selectedMember) {
                    return {
                        ...team,
                        members: [...team.members, selectedMember],
                    };
                }
            }
            return team;
        });

        setTeams(updatedTeams);
        handleSearchClose(teamIndex); // Close the search bar after adding a member
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
                            <Button
                                variant="secondary"
                                className="mt-3"
                                onClick={() => handleAddMemberClick(index)}
                            >
                                Add new member
                            </Button>
                            {" "}
                            <Button
                                variant="primary"
                                className="mt-3"
                                onClick={() => setTaskModalShow(true)}
                            >
                                Add Tasks
                            </Button>
                            {searchBarVisibility[index] && (
                                <SearchBar
                                    onSearch={(query) => handleSearch(query, index)}
                                    onClose={() => handleSearchClose(index)}
                                />
                            )}
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <Modal show={taskModalShow} onHide={() => setTaskModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tasks />
                </Modal.Body>
            </Modal>
            <Link to="/"><Button>Back to Workspace</Button></Link>
        </div>
    );
};
export default TeamList;
