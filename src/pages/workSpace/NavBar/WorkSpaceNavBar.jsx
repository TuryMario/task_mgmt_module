import React, { useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import CreateButton from "./CreateButton";
import { useState } from "react";

function WorkSpaceNavBar({ spaceHead,btn, btnData }) {
  const [data, setData] = useState([]);
  const [buttonShow, setButtonShow] = useState(true);
  const handleData = (data) => {
    setData(data);
  };

  useEffect(() => {
    setButtonShow(btn);
  },[btn]);

  btnData(data);
  return (
    <div>
      <Navbar className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand>
            <h2>{spaceHead}</h2>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {buttonShow ? (
                <CreateButton createData={handleData} />
              ) : null}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default WorkSpaceNavBar;
