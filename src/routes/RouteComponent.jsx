import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkSpace from "../pages/workSpace/WorkSpace";
import TeamOverView from "../pages/teams/teamOverView/TeamOverView";
import CreateTeamHandler from "../pages/teams/CreateTeamHandler";
function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        <Route path="/space/teams/:name" element={<CreateTeamHandler />} />
        <Route path="/space/teams/team/:teamname" element={<TeamOverView />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
