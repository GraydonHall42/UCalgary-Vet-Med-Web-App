import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useState} from "react";
import {UserContext} from "../UserContext";
import axios from "axios";


function CommentModal(props) {

    const [description, setDescription] = useState("")
    const [commentDate, setCommentDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const { user, setUser } = useContext(UserContext);
    const [ closed, setClosed ] = useState(true);
    const [animal, setAnimal] = useState("")
    // const submitBookingRequest = () => {
    //     console.log("Requested!")
    //     console.log(props.selectedAnimal)
    //     console.log(user)
    //     console.log(date)
    //     console.log(startTime)
    //     console.log(endTime)
    //
    //     const bookingRequest = {
    //         "bookingDate": date,
    //         "startTime": startTime,
    //         "returnTime": endTime,
    //         "adminAppStatus": "Pending",
    //         "animalId": props.selectedAnimal,
    //         "teacherId": user,
    //         "techAppStatus": "Pending"
    //     }
    //
    //     axios.post("http://localhost:8080/api/bookings", bookingRequest)
    //         .then((res)=> console.log(res))
    //         .catch((err) => console.log(err))
    //
    //     props.onHide()
    //     setDate(null)
    //     setDescription(null)
    //     setStartTime(null)
    //     setEndTime(null)
    // }

    const closeModal = () => {
        setCommentDate(null)
        setEndDate(null)
        setDescription(null)
        props.onHide()
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
                    New Comment: {animal.animalName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Comment Date</Form.Label>
                        <Form.Control
                            value={commentDate}
                            onChange={e => {setCommentDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel controlId="commentDescription" label="Comment Description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Comment Images</Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} /*onClick={submitBookingRequest}*/>Save Comment</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CommentModal;