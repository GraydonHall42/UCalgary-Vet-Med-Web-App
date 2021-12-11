import React, {useContext} from 'react'
import {Tabs, Tab, Container, Row, Col, Button, ButtonGroup} from "react-bootstrap";
import '../styles/MedicalIssuesList.css';
import MedicalIssueModal from "./MedicalIssueModal";

function MedicalIssueList(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {
        setModalShow(true)
    }

    function Item(issue){
        return (
            <Button variant="light" className="medicalIssueItem">
                <Row>
                    <Col className="medicalIssueItemLeft">
                        {issue.issueName}
                    </Col>
                    <Col className="medicalIssueItemRight">
                        {issue.currentStatus}
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col className="medicalIssueItemRight">
                        <div>
                            <p className="closed1" >{issue.closeDate ? "Closed: " : ""}</p>
                            <p className="closed2">{issue.closeDate ? issue.closeDate : "Active"}</p>
                        </div>
                    </Col>
                </Row>
            </Button>
        )
    }
   
    return (
        <Container className="MedicalListContainer1">
            {               
                props.medicalData.map( (issue) => Item(issue))
            }
            <Button variant="warning" className="addIssueButton" onClick={() => handleClick()}>
                Create a new Medical Issue
            </Button>
            <MedicalIssueModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    )
}

export default MedicalIssueList
