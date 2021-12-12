import React, {useContext} from 'react'
import {Tabs, Tab, Container, Row, Col, Button, ButtonGroup} from "react-bootstrap";
import '../styles/MedicalIssuesList.css';
import MedicalIssueModal from "./MedicalIssueModal";
import {Link} from "react-router-dom";

function MedicalIssueList(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => {
        setModalShow(true)
    }

    const handleHide = (props) => {
        setModalShow(false)
    }

    function Item(issue){
        return (
            <Link to={"/medical/"+issue.medicalIssueId}>
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
            </Link>
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
                medicalIssues={props.medicalData}
                show={modalShow}
                onHide={() => handleHide(props)}
            />
        </Container>
    )
}

export default MedicalIssueList
