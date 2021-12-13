import React, {useState, useEffect} from 'react'
import MedicalIssueProfileCard from "../components/MedicalIssueProfileCard";
import IndividualMedicalIssueSet from "../components/IndividualMedicalIssueSet";
import CommentModal from "../components/CommentModal";
import {useParams} from "react-router-dom";
import {Button, Row, Container} from "react-bootstrap";
import axios from 'axios';

const IndividualMedicalIssuePage = (props) => {

    const {medicalIssueId} = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [medicalIssue, setMedicalIssue] = useState(null);
    const [loading, setLoading] = useState(true)

    const handleClick = () => {
        setModalShow(true)
    }

    const obtainMedicalIssueById = (medicalIssueId) => {
        axios.get("http://localhost:8080/api/medical/" + medicalIssueId)
        .then(response => {
            setMedicalIssue(response.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error)
        })
    }



    useEffect(() => {
        obtainMedicalIssueById(medicalIssueId);
    },[])

    if(loading) {
        return <div>Loading...</div>
    }

    return(
        <Container>
            {medicalIssue !== null &&
                <div>
                    <MedicalIssueProfileCard medicalIssue={medicalIssue}/>
                    <IndividualMedicalIssueSet medicalIssue={medicalIssue}/>
                    <Row xl={3} className="justify-content-center pt-2">
                        <Button variant="warning" onClick={() => handleClick()}> Add New Comment </Button>
                    </Row>

                    <CommentModal
                        props={medicalIssue}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            }
        </Container>
    )
};

export default IndividualMedicalIssuePage;