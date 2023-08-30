import React, { useCallback, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Tasks from "../../pages/tasks/Tasks";

export default function CreateTask({ showModal, taskData }) {
  const [taskModalShow, setTaskModalShow] = useState(false);
  // const [taskDetails, setTaskDetails] = useState([])

  useEffect(() => {
    setTaskModalShow(showModal);
    // onClose();
  }, [showModal]);
  const childModalShowRequest = useCallback(() => {
    setTaskModalShow(false);
  }, []);

  useEffect(() => {
    childModalShowRequest();
  }, [childModalShowRequest]);

  const taskInfo = (data) => {
    // setTaskDetails(data);
    taskData(data);
    console.log("Data at CreateTask..", data);
  };
  return (
    <>
      <Modal show={taskModalShow} onHide={() => setTaskModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tasks
            childModalShowRequest={childModalShowRequest}
            taskInfo={taskInfo}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
