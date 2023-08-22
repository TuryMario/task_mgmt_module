import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkSpace from "../pages/workSpace/WorkSpace";
// import MainTaskDetailsPage from "../pages/tasks/taskDetails/MainTaskDetailsPage";
import WorkSpaceInstance from "../pages/workSpaceDetails/WorkSpaceInstance";
function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WorkSpace />} />
        {/* <Route path="/maintaskdetailspage/" element={<MainTaskDetailsPage />} /> */}
        <Route path="workSpaceInstance/" element={<WorkSpaceInstance />} />
      </Routes>
    </div>
  );
}

export default RouteComponent;
