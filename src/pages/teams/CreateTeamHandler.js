import React, { useState } from 'react';
import CreateTeam from '../teams/CreateTeam';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from "../../components/teamList/TeamList";
import SearchBar from "./SearchBar";

const CreateTeamHandler = ({ toggle }) => {
    const [teams, setTeams] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [spaceBody, setSpaceBody] = useState(true);
    const spaceToggle = (newValue,data) => {
        setSpaceBody(newValue);
        toggle(!spaceBody, data);
    }

    const handleCreateTeam = newTeam => {
        setTeams([...teams, newTeam]);
    };

    const handleSearchMembers = query => {
        console.log(`Searching for members: ${query}`);

        // Simulating search results
        const results = teams.filter(team =>
            team.members.includes(query.toLowerCase())
        );

        setSearchResults(results);
    };

    return (
        <div>
            <h1 className="text-center">Teams</h1>
            <div className="container">
                <CreateTeam onCreateTeam={handleCreateTeam} />
                <SearchBar onSearch={handleSearchMembers} />
                <TeamList toggle={spaceToggle}  teams={searchResults.length > 0 ? searchResults : teams} />
            </div>
        </div>
    );
};

export default CreateTeamHandler;
