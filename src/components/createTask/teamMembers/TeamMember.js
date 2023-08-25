import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";

export default function TeamMember() {

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
        <>
            <Container>
                <Row>
                    <Col sm={2} className="d-flex justify-content-center text-center">Add new Member</Col>
                    <Col sm={4}>
                        <Button>+</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}