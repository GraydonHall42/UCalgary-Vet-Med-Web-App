import React, {useState} from 'react'
import {Dropdown} from "react-bootstrap";
import axios from "axios";
import useAuthorization from '../hooks/useAuthorization';


const AnimalStatusButton = (props) => {
    // PROPS TO PASS: the medical issue + the animalID (for the put request)

    const [status, setStatus] = useState(props.medicalIssue.status)
    const getAccessToken = useAuthorization();

    // make put request to database and change the medical issue status
    const handleSelect=(e)=>{
        // EDIT TO MATCH THE PUT REQUEST YOU NEED TO MAKE
        props.medicalIssue.status = e; // change status to either healthy, attention, or urgent

        let config = { headers: {'Authorization': getAccessToken() }}

        axios.put('http://localhost:8080/api/animals/' + props.animalId, props.medicalIssue, config)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })
        setStatus(e);
    }

    const renderButton=()=>{
        let color = "";
        let classname ="";
        if(status==="Low"){
            color="success"
            classname="statusButton healthyButton"
        } else if (status==="Medium"){
            color="warning"
            classname="statusButton attentionButton"
        } else if (status==="High"){
            color="danger"
            classname="statusButton urgentButton"
        }

        return(
            <Dropdown.Toggle
                size={"lg"}
                className= {classname}
                variant={color}
                id="dropdown-basic">
                {status}
            </Dropdown.Toggle>
        )
    }

    return (
        <Dropdown onSelect={handleSelect}>
            {renderButton()}
            <Dropdown.Menu>
                <Dropdown.Item eventKey={"Low"}>Low</Dropdown.Item>
                <Dropdown.Item eventKey={"Medium"}>Medium</Dropdown.Item>
                <Dropdown.Item eventKey={"High"}>High</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AnimalStatusButton;
