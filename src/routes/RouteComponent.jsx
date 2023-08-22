import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkSpace from "../pages/workSpace/WorkSpace";
// import WorkSpaceDetails from "../pages/workSpaceDetails/WorkSpaceDetails....copy..table";
// import MainTaskDetailsPage from "../pages/tasks/taskDetails/MainTaskDetailsPage";
import CreateTeamHandler from "../pages/teams/CreateTeamHandler";
function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        {/* <Route path="/workspacedetails" element={<WorkSpaceDetails />} /> */}
        {/* <Route path="/maintaskdetailspage" element={<MainTaskDetailsPage />} /> */}
        <Route path="/create-team-handler" element={<CreateTeamHandler />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
