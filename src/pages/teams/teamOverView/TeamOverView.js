import React from 'react';
import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import TaskListTable from "../../../components/taskListTable/TaskListTable";
import CreateTask from "../../../components/createTask/CreateTask";
import TeamMember from "../../../components/createTask/teamMembers/TeamMember";


export default function TeamOverView() {
    const [taskModalShow, setTaskModalShow] = useState(false);
    const [tasks, setTasks] = useState([]);

    const addNewTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setTaskModalShow(false);
    };

    return (
        <>
            <div>
                <Container>
                    <TeamMember />
                </Container>
            </div>
            <div className='mt-3'>
                <Container>
                    <Row>
                        <h3>2. <strong>Tasks</strong></h3>
                        <hr />

                        <Col sm={4}>
                            <Button variant="outline-primary" className="mb-2" onClick={()=>setTaskModalShow(true)}>Add Task</Button>
                            <CreateTask showModal={taskModalShow} onTaskCreate={addNewTask} onHide={(() => setTaskModalShow(false))} />
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col>

                            <TaskListTable taskListData={tasks} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}