import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import TaskListTable from "../../../components/taskListTable/TaskListTable";
import CreateTask from "../../../components/createTask/CreateTask";


export default function TeamOverView() {
    const [taskModalShow, setTaskModalShow] = React.useState(false);
    return (
        <>
            <Container>
                <Row>
                    <Col sm={1} className="d-flex justify-content-center text-center">Create Task</Col>
                    <Col sm={4}>
                        <Button onClick={()=>setTaskModalShow(true)}>+</Button>
                        <CreateTask showModal={taskModalShow}/>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-3">
                <TaskListTable />
            </Container>
        </>
    );
}