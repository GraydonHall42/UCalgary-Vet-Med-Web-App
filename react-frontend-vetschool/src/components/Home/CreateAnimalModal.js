import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../Context/UserContext";
import axios from "axios";
import useAuthorization from '../../hooks/useAuthorization';
import {set} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/css";


function CreateAnimalModal(props) {

    const { user, setUser } = useContext(UserContext);
    const [animalName, setAnimalName] = useState(null);
    const [animalType, setAnimalType] = useState(null);
    const [sex, setSex] = useState(null);
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [color, setColor] = useState(null);
    const [active, setActive] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [microChipNum, setMicroChipNum] = useState(null);
    const [breed, setBreed] = useState(null);
    const [status, setStatus] = useState(null);
    const [location, setLocation] = useState(null);
    const [animalId, setAnimalId] = useState(null);
    const [file, setFile] = useState(null);
    const [date, setDate] = useState(null);
    // const { user, setUser } = useContext(UserContext);
    // const [animalName, setAnimalName] = useState("Potato");
    // const [animalType, setAnimalType] = useState("Dog");
    // const [sex, setSex] = useState("male");
    // const [profilePhoto, setProfilePhoto] = useState("/image");
    // const [color, setColor] = useState("brown");
    // const [active, setActive] = useState(null);
    // const [birthDate, setBirthDate] = useState("2000-01-01");
    // const [microChipNum, setMicroChipNum] = useState(1234);
    // const [breed, setBreed] = useState("Chihuahua");
    // const [status, setStatus] = useState("Healthy");
    // const [location, setLocation] = useState("Barn C");
    // const [animalId, setAnimalId] = useState(null);
    // const [date, setDate] = useState(null);
    const getAccessToken = useAuthorization();

    let imageList = [];
    // let fileList = [];

    const submitAnimalProfileRequest = async () => {

        console.log(profilePhoto)

        const animal = {
            "animalName": animalName,
            "animalType": animalType,
            "sex": sex,
            "profilePhoto": profilePhoto,
            "birthDate": birthDate,
            "color": color,
            "microchipNum": microChipNum,
            "active": 1,
            "breed": breed,
            "lastCheckUp": null,
            "status": status,
            "location": location
        }

        const profileImage = {
            "animalId": animalId,
            "date": "2021-12-14 00:00:00",
            "image": profilePhoto,
        }

        let config = { headers: {'Authorization': getAccessToken() }}



        let profileRes = await axios.post("http://localhost:8080/api/animals", animal, config)
            .then((res)=> {
                setAnimalId(res.data.animalId)
                profileImage.animalId = res.data.animalId
            })
            .catch((err) => {
                console.log(err)
                console.log("HELLO")
            })

        console.log(profileImage)

        let commentRes = await axios.post("http://localhost:8080/api/profile-image", profileImage, config)
            .then((res)=> {
                console.log(res.data)
                console.log("YES")
            })
            .catch((err) => console.log(err))

            let formData = new FormData()

            formData.append('file',file)

            let imageUploadRes = await axios.post("http://localhost:8080/api/profile-image/upload", formData, config)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err))


        imageList = [];
        // fileList = [];
        setAnimalName(null)
        setAnimalType(null)
        setFile(null)
        setSex(null)
        setProfilePhoto(null)
        setColor(null)
        setActive(null)
        setMicroChipNum(null)
        setBirthDate(null)
        setBreed(null)
        setStatus(null)
        setLocation(null)
        setAnimalId(null)
        setDate(null)
        props.onHide()
    }


    const closeModal = () => {
        // imageList = [];
        // fileList = [];
        setAnimalName(null)
        setAnimalType(null)
        setFile(null)
        setSex(null)
        setProfilePhoto(null)
        setColor(null)
        setActive(null)
        setMicroChipNum(null)
        setBirthDate(null)
        setBreed(null)
        setStatus(null)
        setLocation(null)
        setAnimalId(null)
        setDate(null)
        props.onHide()
    }

    useEffect(() => {

    })

    const prepareImages = (e) => {
        setFile(e.target.files.item(0))
        setProfilePhoto("/images/profileImages/" + e.target.files.item(0).name)
        console.log(e)
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
                    New Animal
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Animal Name</Form.Label>
                        <Form.Control
                            onChange={e => {setAnimalName(e.target.value)}}
                            type="text"
                            placeholder="Enter Animal Name"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Animal Type</Form.Label>
                        <Form.Select aria-label="Severity drop down"
                                     onChange={e => {
                                         setAnimalType(e.target.value) }}>
                            <option>Select Animal Type</option>
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                            <option value="Horse" >Horse</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Sex</Form.Label>
                        <Form.Select aria-label="Severity drop down"
                                     onChange={e => {
                                         setSex(e.target.value) }}>
                            <option>Select Gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="position-relative mb-3">
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control
                            type="file"
                            name="Profile Images"
                            onChange={e => prepareImages(e)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            onChange={e => {setColor(e.target.value)}}
                            type="text"
                            placeholder="Enter Color"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Birth Date</Form.Label>
                        <Form.Control
                            onChange={e => {setBirthDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Micro Chip #</Form.Label>
                        <Form.Control
                            onChange={e => {setMicroChipNum(e.target.value)}}
                            type="text"
                            placeholder="Enter Micro Chip #"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control
                            onChange={e => {setBreed(e.target.value)}}
                            type="text"
                            placeholder="Enter Breed"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Severity drop down"
                                     onChange={e => {
                                         setStatus(e.target.value) }}>
                            <option>Status</option>
                            <option value="Healthy">Healthy</option>
                            <option value="Attention">Attention</option>
                            <option value="Urgent">Urgent</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            onChange={e => {setBreed(e.target.value)}}
                            type="text"
                            placeholder="Enter Location"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"warning"} onClick={submitAnimalProfileRequest}>Save Profile</Button>
                <Button variant={"danger"} onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateAnimalModal;