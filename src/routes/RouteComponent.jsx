import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkSpace from "../pages/workSpace/WorkSpace";
// import WorkSpaceDetails from "../pages/workSpaceDetails/WorkSpaceDetails....copy..table";
// import MainTaskDetailsPage from "../pages/tasks/taskDetails/MainTaskDetailsPage";
import CreateTeamHandler from "../pages/teams/CreateTeamHandler";
import TaskListTable from '../components/taskListTable/TaskListTable';
import TaskMessaging from '../pages/tasks/taskDetails/taskMessaging/TaskMessaging';
// import TaskStatusDetails from '../pages/tasks/taskDetails/taskStatusDetails/TaskStatusDetails';
import MainTaskDetailsPage from "../pages/tasks/taskDetails/MainTaskDetailsPage";
// import TeamOverView from "../pages/teams/teamOverView/TeamOverView";
// import TeamMember from "../components/createTask/teamMembers/TeamMember";
function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        <Route path="/create-team-handler" element={<CreateTeamHandler />} />
        <Route path="/MainTaskDetailsPage" element={<MainTaskDetailsPage />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
