import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";
import useAuthorization from '../hooks/useAuthorization';

function EditCommentModal(props) {

    const { user, setUser } = useContext(UserContext);
    const [medicalIssueId, setMedicalIssueId] = useState(null);
    const [authorId, setAuthorId] = useState(null);
    const [title, setTitle] = useState(null);
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState(null);
    const [commentId, setCommentId] = useState(null);
    const getAccessToken = useAuthorization();

    let imageList = [];
    let fileList = [];

    const setDefaults = () => {
        setMedicalIssueId(medicalIssueId ? medicalIssueId : props.comment.animalId);
        setTitle(title ? title : props.comment.title);
        setDate(date ? date : props.comment.date);
        setDescription(description ? description : props.comment.description);
        setCommentId(commentId ? commentId : props.comment.commentId);
    }

    useEffect(() => {
        setDefaults()
    })

    function formatDate(string){
        return new Date(string).toISOString().slice(0,10);
    }

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
            "commentImages":[]
        }

        let commentImage = {
            "commentId": commentId,
            "image": null
        }


        let config = { headers: {'Authorization': getAccessToken() }}

        let commentRes = await axios.put("http://localhost:8080/api/comments/" + props.comment.commentId, comment,config)
            .then((res)=> {
                setCommentId(res.data.commentId)
                commentImage.commentId = res.data.commentId
                console.log("HELLO")
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

    const prepareImages = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            fileList.push(e.target.files.item(i))
            imageList.push("/images/commentImages/" + e.target.files.item(i).name)
        }

    }

    useEffect(() => {
        setMedicalIssueId(props.comment.medicalIssueId);
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
                            defaultValue={props.comment.title}
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Comment Date</Form.Label>
                        <Form.Control
                            onChange={e => {setDate(e.target.value)}}
                            type="date"
                            placeholder="Date"
                            defaultValue={formatDate(props.comment.date)}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="commentDescription" label="Comment Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                onChange={e => {setDescription(e.target.value)}}
                                defaultValue={props.comment.description}
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

export default EditCommentModal;