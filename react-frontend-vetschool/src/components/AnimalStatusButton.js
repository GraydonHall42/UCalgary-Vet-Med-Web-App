import React, {useContext, useState} from 'react'
import {Dropdown} from "react-bootstrap";
import axios from "axios";
import {AnimalContext} from "../AnimalContext";


const AnimalStatusButton = (props) => {

    const [status, setStatus] = useState(props.animal.status)

    // make put request to database and change the animals status
    const handleSelect=(e)=>{
        props.animal.status = e; // change status to either healthy, attention, or urgent
        axios.put('http://localhost:8080/api/animals/' + props.animal.animalId, props.animal)
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
        if(status==="Healthy"){
            color="success"
            classname="statusButton healthyButton"
        } else if (status==="Attention"){
            color="warning"
            classname="statusButton attentionButton"
        } else if (status==="Urgent"){
            color="danger"
            classname="statusButton urgentButton"
        }

        return(
            <Dropdown.Toggle
                size={"mid"}
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
                <Dropdown.Item eventKey={"Healthy"}>Healthy</Dropdown.Item>
                <Dropdown.Item eventKey={"Attention"}>Attention</Dropdown.Item>
                <Dropdown.Item eventKey={"Urgent"}>Urgent</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AnimalStatusButton;
