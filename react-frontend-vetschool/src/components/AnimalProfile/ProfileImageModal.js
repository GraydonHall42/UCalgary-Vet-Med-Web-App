import React, {useEffect, useState} from "react";
import useAuthorization from "../../hooks/useAuthorization";
import axios from "axios";
import {Button, Form, Modal} from "react-bootstrap";

function ProfileImageModal(props) {

    const [animalId, setAnimalId] = useState(props.animalid);
    const [date, setDate] = useState(null);
    const [loading, setLoading] = useState(true);
    const getAccessToken = useAuthorization();

    let imageList = [];
    let fileList = [];

    const submitProfilePictureRequest = async () => {
        console.log("Requested!")
        console.log(animalId)
        console.log(date)

        let config = { headers: {'Authorization': getAccessToken() }}



        imageList.map(async (imageObject) => {

            const profileImage = {
                "animalId": animalId,
                "date": date,
                "image": imageObject,
            }

            let commentRes = await axios.post("http://localhost:8080/api/profile-image", profileImage, config)
                .then((res)=> {
                    console.log(res.data)
                })
                .catch((err) => console.log(err))
        })

        fileList.map(async (fileObject) => {

            let formData = new FormData()

            formData.append('file',fileObject)

            let fileRes = await axios.post("http://localhost:8080/api/profile-image/upload", formData, config)
                .then((res)=> {
                    console.log(res.data)
                })
                .catch((err) => console.log(err))

        })

        imageList = [];
        fileList = [];
        setDate(null)
        props.onHide()
    }

    useEffect(() => {
        setAnimalId(props.animalid)
        setLoading(false)
    }, [])

    const prepareImages = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            fileList.push(e.target.files.item(i))
            imageList.push("/images/profileImages/" + e.target.files.item(i).name)
        }

    }

    const closeModal = () => {
        imageList = [];
        fileList = [];
        setDate(null)
        props.onHide()
    }

    if(loading) {
        return(<div> </div>)
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
                    New Profile Image
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Comment Date</Form.Label>
                        <Form.Control
                            onChange={e => {setDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Profile Images</Form.Label>
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
                <Button variant={"warning"} onClick={submitProfilePictureRequest}>Save Profile Photo</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProfileImageModal;