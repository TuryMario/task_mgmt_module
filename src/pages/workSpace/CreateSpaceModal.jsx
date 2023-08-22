import React, { useState } from "react";
import { FloatingLabel, Modal, Button, Card, Form, Row } from "react-bootstrap";

export default function CreateSpaceModal(props) {
  const [data, setData] = useState({ spaceName: "", spaceDescription: "" });
  // const [,setBtnStatus] = useState(true)

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const sendData = (data) => {
    props.dataProp(data);
    // props.btnStatus(false);
    console.log("props.dataProp", props.dataProp);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="vertically-centrallised-modal"
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title
          style={{ color: "blue" }}
          id="vertically-centrallised-modal"
        >
          New Workspace
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card border="info" className="text-center">
          <Card.Header>
            <h5>Space Details</h5>
          </Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <FloatingLabel
                  controlId="space_name"
                  label={
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      Space Name
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="spaceName"
                    placeholder="space_name"
                    value={data.spaceName}
                    onChange={handleOnChange}
                  />
                </FloatingLabel>
              </Row>

              <Row>
                <FloatingLabel
                  controlId="space_description"
                  label={
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      Overview or Description.
                    </span>
                  }
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="spaceDescription"
                    placeholder="space_description"
                    value={data.spaceDescription}
                    onChange={handleOnChange}
                  />
                </FloatingLabel>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.onHide}>
          Cancel
        </Button>
        <Button
          variant="outline-success"
          onClick={() => {
            sendData(data);
            props.onHide();
          }}
        >
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
