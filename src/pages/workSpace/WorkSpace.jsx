import React from "react";
import WorkSpaceNavBar from "./NavBar/WorkSpaceNavBar";
import WorkSpaceBody from "./WorkSpaceBody";
import { useState } from "react";
export default function WorkSpace() {
  const [data, setData] = useState([]);
  const handleData = (data) => {
    setData(data);
  };
  const newWorkSpace = data;
  return (
    <>
      <WorkSpaceNavBar btnData={handleData} />
      <WorkSpaceBody fromWorkSpace={newWorkSpace} />
    </>
  );
}
