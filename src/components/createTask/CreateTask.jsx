import React, {useEffect, useState} from 'react';
import {Modal} from "react-bootstrap";
import Tasks from "../../pages/tasks/Tasks";

export default function CreateTask({showModal}) {
    const [taskModalShow, setTaskModalShow] = useState(false);

    useEffect(() => {
        setTaskModalShow(showModal);
    }, [showModal]);
    return (
        <>
            <Modal show={taskModalShow} onHide={() => setTaskModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tasks />
                </Modal.Body>
            </Modal>
        </>
    );
}