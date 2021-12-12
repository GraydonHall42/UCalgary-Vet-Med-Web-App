import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";


function CommentModal(props) {

    const { user, setUser } = useContext(UserContext);
    const [medicalIssueId, setMedicalIssueId] = useState(null);
    const [authorId, setAuthorId] = useState(null);
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [commentId, setCommentId] = useState(null);

    const submitCommentRequest = () => {
        console.log("Requested!")
        console.log(user)
        console.log(title)
        console.log(date)
        console.log(description)
        console.log(image)

        const comment = {
            "medicalIssueId": medicalIssueId,
            "title": title,
            "date": date,
            "description": description,
            "author": user
        }

         axios.post("http://localhost:8080/api/comments", comment)
            .then((res)=> setCommentId(res.data.commentId))
            .catch((err) => console.log(err))

        console.log(commentId)
        console.log(image)

        const commentImage = {
            "commentId": commentId,
            "image": image
        }

        axios.post("http://localhost:8080/api/treatment-images", commentImage)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))

        setMedicalIssueId(null)
        setTitle(null)
        setDate(null)
        setDescription(null)
        setImage(null)
        props.onHide()
    }


    const closeModal = () => {
        setMedicalIssueId(null)
        setTitle(null)
        setDate(null)
        setDescription(null)
        setImage(null)
        props.onHide()
    }

    useEffect(() => {
        setMedicalIssueId(props.props.medicalIssueId);

    })

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
                    <Form.Group className="mb-3">
                        <Form.Label>Image Pathway</Form.Label>
                        <Form.Control
                            onChange={e => {setImage(e.target.value)}}
                            type="text"
                            placeholder="/images/commentImages/sickpuppy1.jpg"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
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