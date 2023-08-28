import React, { useState } from 'react';
import CreateTeam from '../teams/CreateTeam';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamList from "../../components/teamList/TeamList";

const CreateTeamHandler = ({ toggle }) => {
    const [teams, setTeams] = useState([]);
    const [spaceBody, setSpaceBody] = useState(true);
    const spaceToggle = (newValue,data) => {
        setSpaceBody(newValue);
        toggle(!spaceBody, data);
    }

    const handleCreateTeam = newTeam => {
        setTeams([...teams, newTeam]);
    };

    return (
        <div>
            <h1 className="text-center">Teams</h1>
            <div className="container">
                <CreateTeam onCreateTeam={handleCreateTeam} />
                <TeamList toggle={spaceToggle}  teams={teams} setTeams={setTeams} />
            </div>
        </div>
    );
};

export default CreateTeamHandler;
