import React, {useState, useEffect} from 'react'
import MedicalIssueProfileCard from "../components/MedicalIssue/MedicalIssueProfileCard";
import IndividualMedicalIssueSet from "../components/MedicalIssue/IndividualMedicalIssueSet";
import CommentModal from "../components/MedicalIssue/CommentModal";
import {useParams} from "react-router-dom";
import {Button, Row, Container} from "react-bootstrap";
import axios from 'axios';
import useAuthorization from '../hooks/useAuthorization';

const IndividualMedicalIssuePage = () => {

    const {medicalIssueId} = useParams();
    const [modalShow, setModalShow] = useState(false);
    const [medicalIssue, setMedicalIssue] = useState(null);
    const [loading, setLoading] = useState(true)
    const getAccessToken = useAuthorization();

    const handleClick = () => {
        setModalShow(true)
    }

    const obtainMedicalIssueById = (medicalIssueId) => {
        let config = { headers: {'Authorization': getAccessToken() }}
        axios.get("http://localhost:8080/api/medical/" + medicalIssueId, config)
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

    useEffect(() => {
        obtainMedicalIssueById(medicalIssueId);
    },[modalShow])

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