import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkSpace from "../pages/workSpace/WorkSpace";
import WorkSpaceDetails from "../pages/workSpaceDetails/WorkSpaceDetails....copy..table";
import MainTaskDetailsPage from "../pages/tasks/taskDetails/MainTaskDetailsPage";
import CreateTeam from "../pages/teams/CreateTeam";
function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        <Route path="/workspacedetails" element={<WorkSpaceDetails />} />
        <Route path="/maintaskdetailspage" element={ <MainTaskDetailsPage /> } />
          <Route path="/create-team" element={<CreateTeam />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
