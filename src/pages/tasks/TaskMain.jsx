import React from "react";
import WorkSpaceNavBar from "../workSpace/NavBar/WorkSpaceNavBar";
import WorkSpaceBody from "../workSpace/WorkSpaceBody"; 
import { useState } from "react";

function TaskMain() {
      const [navToggle, setNavToggle] = useState("Available WorkSpaces");
      const [data, setData] = useState([]);
      const [btn, setBtn] = useState(true);
      const [team, setTeam] = useState(null);

      const handleData = (data) => {
        setData(data);
      };
      const teamInfo = (info) => {
        setTeam(info);
      };

      const handleWorkSpace = (data) => {
        // console.log("space name is ", data);
        setNavToggle(data);
        setBtn(false);
      };
      const newWorkSpace = data;
  return (
    <div>
      <WorkSpaceNavBar
        teamName={team}
        btn={btn}
        spaceHead={navToggle}
        btnData={handleData}
      />
      <WorkSpaceBody
        teamInfo={teamInfo}
        btn={btn}
        toggle={handleWorkSpace}
        fromWorkSpace={newWorkSpace}
      />
    </div>
  );
}

export default TaskMain;
