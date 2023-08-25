import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, Modal} from 'react-bootstrap';
import SearchBar from '../../../pages/teams/SearchBar';

const membersList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane Smith' },
    { id: 5, name: 'Michael Johnson' },
    { id: 6, name: 'Emily Wilson' },
    { id: 7, name: 'David Brown' },
    { id: 8, name: 'Olivia Taylor' },
    { id: 9, name: 'Robert Davis' },
    { id: 10, name: 'Sophia Wilson' },
    { id: 11, name: 'William Jackson' },
    { id: 12, name: 'Ava Martinez' },
    { id: 13, name: 'James Anderson' },
    { id: 14, name: 'Isabella Garcia' },
    { id: 15, name: 'Benjamin Johnson' },
    { id: 16, name: 'Mia White' },
    { id: 17, name: 'Alexander Taylor' },
    { id: 18, name: 'Emma Harris' },
    { id: 19, name: 'Ethan Thomas' },
    { id: 20, name: 'Oliver Martinez' },
    // ... add more names
];

export default function TeamMember({ teams, setTeams }) {
    const [showSearchBarModal, setShowSearchBarModal] = useState(false);
    const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [searchResults, setSearchResults] = useState([]); // Initialize searchResults state

    const handleAddMemberClick = (teamIndex) => {
        setSelectedTeamIndex(teamIndex);
        setShowSearchBarModal(true);
    };

    const handleSearchClose = () => {
        setShowSearchBarModal(false);
        setSelectedTeamIndex(null);
        setSelectedMember(null);
        setSearchResults([]); // Reset search results when closing
    };

    const handleSearch = (query) => {
        // Handle search logic and update searchResults
        // For this example, let's assume you have a list of members and filter them based on the query
        const filteredMembers = membersList.filter(member =>
            member.name.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filteredMembers);
    };

    const handleMemberSelect = (member) => {
        setSelectedMember(member);
    };

    const handleAddSelectedMember = () => {
        if (selectedMember && selectedTeamIndex !== null) {
            const updatedTeams = teams.map((team, index) => {
                if (index === selectedTeamIndex) {
                    return {
                        ...team,
                        members: [...team.members, selectedMember],
                    };
                }
                return team;
            });
            setTeams(updatedTeams);
            handleSearchClose();
        }
    };

    return (
        <>
            <Container>
                <Row>
                    <Col sm={2} className="d-flex justify-content-center text-center">
                        Add new Member
                    </Col>
                    <Col sm={4}>
                        <Button onClick={handleAddMemberClick}>+</Button>
                    </Col>
                </Row>
            </Container>
            <Modal show={showSearchBarModal}>
                <Modal.Header>
                    <Modal.Title>Search and Add Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SearchBar
                        onClose={handleSearchClose}
                        onSearch={handleSearch}
                        onSelectMember={handleMemberSelect}
                        membersList={membersList}
                        searchResults={searchResults}
                    />
                    {selectedMember && (
                        <div>
                            Selected Member: {selectedMember.name}
                            <Button onClick={handleAddSelectedMember}>Add Selected Member</Button>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    );
}
