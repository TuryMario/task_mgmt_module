import React from "react";
import { Container, Navbar } from "react-bootstrap";
import CreateButton from "./CreateButton";

function WorkSpaceNavBar() {
  return (
    <div>
      <Navbar className="bg-body-tertiary mb-4">
        <Container>
          <Navbar.Brand>
            <h2>Available Workspaces</h2>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <CreateButton/>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default WorkSpaceNavBar;
