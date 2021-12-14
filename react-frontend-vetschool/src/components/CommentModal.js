import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";
import useAuthorization from '../hooks/useAuthorization';


function CommentModal(props) {

    const { user, setUser } = useContext(UserContext);
    const [medicalIssueId, setMedicalIssueId] = useState(null);
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const getAccessToken = useAuthorization();

    let imageList = [];
    let fileList = [];

    const submitCommentRequest = async () => {
        console.log("Requested!")
        console.log(user)
        console.log(title)
        console.log(date)
        console.log(description)

        const comment = {
            "medicalIssueId": medicalIssueId,
            "title": title,
            "date": date,
            "description": description,
            "author": user
        }

        let commentImage = {
            "commentId": commentId,
            "image": null
        }

        let config = { headers: {'Authorization': getAccessToken() }}
        let commentRes = await axios.post("http://localhost:8080/api/comments", comment, config)
            .then((res)=> {
                setCommentId(res.data.commentId)
                commentImage.commentId = res.data.commentId
            })
            .catch((err) => console.log(err))

        imageList.map(async (imageObject) => {

            commentImage.image = imageObject

            console.log(commentImage)

            let imageRes = await axios.post("http://localhost:8080/api/treatment-images", commentImage, config)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err))

        })

        fileList.map(async (fileObject) => {
            let formData = new FormData()

            formData.append('file',fileObject)

            let imageUploadRes = await axios.post("http://localhost:8080/api/treatment-images/upload", formData, config)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err))

        })

        imageList = [];
        fileList = [];
        setMedicalIssueId(null)
        setTitle(null)
        setDate(null)
        setDescription(null)
        props.onHide()
        window.location.reload()
    }


    const closeModal = () => {
        imageList = [];
        fileList = [];
        setMedicalIssueId(null)
        setTitle(null)
        setDate(null)
        setDescription(null)
        props.onHide()
    }

    useEffect(() => {
        setMedicalIssueId(props.props.medicalIssueId);
    })

    const prepareImages = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            fileList.push(e.target.files.item(i))
            imageList.push("/images/commentImages/" + e.target.files.item(i).name)
        }

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Comment
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Comment Name</Form.Label>
                        <Form.Control
                            onChange={e => {setTitle(e.target.value)}}
                            type="text"
                            placeholder="Enter Comment Issue"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Comment Date</Form.Label>
                        <Form.Control
                            onChange={e => {setDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="commentDescription" label="Comment Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={e => {setDescription(e.target.value)}}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Comment Image</Form.Label>
                        <Form.Control
                            multiple
                            type="file"
                            name="Profile Images"
                            onChange={e => prepareImages(e)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} onClick={submitCommentRequest}>Save Comment</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CommentModal;