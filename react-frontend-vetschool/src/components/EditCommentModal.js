import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";


function EditCommentModal(props) {

    const { user, setUser } = useContext(UserContext);
    const [medicalIssueId, setMedicalIssueId] = useState(null);
    const [authorId, setAuthorId] = useState(null);
    const [title, setTitle] = useState(props.props.title);
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [commentId, setCommentId] = useState(null);

    const submitCommentRequest = async () => {
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

        let commentImage = {
            "commentId": null,
            "image": image
        }

        let commentRes = await axios.put("http://localhost:8080/api/comments/"+props.props.commentId, comment)
            .then((res)=> {
                setCommentId(res.data.commentId)
                commentImage.commentId = res.data.commentId
                console.log("HELLO")
            })
            .catch((err) => console.log(err))


        let imageRes = await axios.put("http://localhost:8080/api/treatment-images/"+props.props.commentImages.commentPhotoId, commentImage)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err))

        setMedicalIssueId(null)
        setTitle(null)
        setDate(null)
        setDescription(null)
        setImage(null)
        props.onHide()
        window.location.reload()
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
                    Edit Comment
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
                            defaultValue={props.props.title}
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

export default EditCommentModal;