import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button} from "react-bootstrap";
import TaskListTable from "../../../components/taskListTable/TaskListTable";
import CreateTask from "../../../components/createTask/CreateTask";
import TeamMember from "../../../components/createTask/teamMembers/TeamMember";


export default function TeamOverView() {
    const [taskModalShow, setTaskModalShow] = React.useState(false);
    return (
        <>
            <div>
                <Container>
                    <TeamMember />
                </Container>
            </div>
            <div className='mt-3'>
                <Container>
                    <hr/>
                    <Row>
                        <Col sm={2} className="d-flex justify-content-center text-center mt-2">
                            <h4><strong>Create Task</strong></h4>
                        </Col>
                        <Col sm={4}>
                            <Button variant="outline-primary" onClick={()=>setTaskModalShow(true)}>+</Button>
                            {/* <div> */}
                                <CreateTask showModal={taskModalShow} />
                            {/* </div> */}
                        </Col>
                    </Row>
                </Container>
                <Container >
                    <Row>
                        <Col>
                            
                            <TaskListTable />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}