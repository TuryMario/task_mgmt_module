import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

console.log("nav...............")
function WorkSpaceInstanceHeader() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
                  <Navbar.Brand > WorkSpace: { "  "}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default WorkSpaceInstanceHeader;
