import React, { useState, useEffect } from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import '../styles/ImageSet.css';
import '../styles/HighMarginRight.css';
import ProfileImageModal from "./ProfileImageModal";
import axios from "axios";
import useAuthorization from "../hooks/useAuthorization";
import {AiFillCloseCircle} from "react-icons/all";

const ImageSet = (props) => {

    const [loading, setLoading] = useState(true);
    const [imageSet, setImageSet] = useState([]);
    const getAccessToken = useAuthorization();
    const [modalShow, setModalShow] = useState(false);

    let config = { headers: {'Authorization': getAccessToken() }}

    const getProfileImages = () => {

        axios.get("http://localhost:8080/api/profile-image/animalId/"+props.animal.animalId, config)
            .then(response => {setImageSet(response.data)
            console.log(props.animal.medicalIssues)
            setLoading(false)})
            .catch(error => console.log(error))
    }

    function formatDate(string){
        return new Date(string).toISOString().slice(0,10);
    }

    const handleClick = () => {
        setModalShow(true);
    }

    const deleteImage = (photoId) => {

        axios.delete("http://localhost:8080/api/profile-image/"+photoId, config)
            .then(response => {console.log(response)
            getProfileImages()})
            .catch(error => console.log(error))
    }

    const getCommentImages = () => {
        return (
            props.animal.medicalIssues.map((issue) => ([
                issue.comments.map((comment, index) => ([
                    <Row className={"m-2 text-white"} key={index}>
                        <Row className="bg-danger rounded pt-1 pb-1 align-content-center" id="title">
                            <Col md={6}>
                                <h5>Comment: {comment.title}</h5>
                            </Col>
                            <Col md={6}>
                                <h5>Date: {comment.date ? formatDate(comment.date) : null}</h5>
                            </Col>
                        </Row>
                        <Row className="bg-light p-4" key={index}>
                            {comment.commentImages.map((imageImages, index) => (
                                <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
                                    <Image src={imageImages.image} alt={"animal"} thumbnail className="shadow-lg"/>
                                </Col>
                            ))}
                        </Row>
                    </Row>
                ]))
            ]))
        )

    }

    useEffect(() => {
        getProfileImages()
    }, [])

    useEffect(() => {
        getProfileImages()
    }, [modalShow])

    const profileImageMapping = (imageSet) => {

        return(
                <Row>
                    <Row className="darkGray ps-4 pb-2 pt-2 pe-0 text-white">
                        <Row className="bg-danger rounded pt-1 pb-1">
                            <h5>Profile Images</h5>
                        </Row>
                        <Row className="bg-light p-4 rounded border">

                                {imageSet.map((imageImages, index) => (
                                    <Col key={index} xxl={3} xl={3} lg={3} md={4} sm={6} xs={12} className>
                                        <button className="btn-outline-black highMarginRight mb-0" onClick={() => deleteImage(imageImages.photoId)}>
                                            <AiFillCloseCircle/>
                                        </button>
                                            <Image key={imageImages.photoId} src={imageImages.image} alt={"animal"} thumbnail className="shadow-lg"/>
                                    </Col>
                                ))}
                                <Row className="pt-2">
                                <Button variant="warning" onClick={() => handleClick()}>Add Profile Photos</Button>
                                </Row>
                        </Row>
                    </Row>
                    <ProfileImageModal
                        animalid={props.animal.animalId}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Row>
        )
    }

    if(loading) {
        return <div>Loading...</div>
    }

    return (
        <Container>
            <Row className="darkGray scrollable ps-4 pb-2 pt-2">
            {profileImageMapping(imageSet)}
            {getCommentImages()}
            </Row>
        </Container>
        )

};

export default ImageSet;