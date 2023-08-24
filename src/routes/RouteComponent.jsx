import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkSpace from "../pages/workSpace/WorkSpace";
// import WorkSpaceDetails from "../pages/workSpaceDetails/WorkSpaceDetails....copy..table";
// import MainTaskDetailsPage from "../pages/tasks/taskDetails/MainTaskDetailsPage";
import CreateTeamHandler from "../pages/teams/CreateTeamHandler";
import TaskListTable from '../components/taskListTable/TaskListTable';
function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        {/* <Route path="/workspacedetails" element={<WorkSpaceDetails />} /> */}
        {/* <Route path="/maintaskdetailspage" element={<MainTaskDetailsPage />} /> */}
        <Route path="/create-team-handler" element={<CreateTeamHandler />} />
        <Route path="/view-tasks" element={<TaskListTable />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
