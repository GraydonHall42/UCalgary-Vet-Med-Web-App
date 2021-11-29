import React, {useState} from 'react'
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    FormControl,
    InputGroup,
    Row
} from "react-bootstrap";
import "../styles/AnimalSearchBar.css"

const AnimalSearchBar = (props) => {

    const [value,setValue]=useState('Animal Name');
    const handleSelect=(e)=>{
        setValue(e)
    }

    return (
        <div>
            <Container>
                <InputGroup className="mb-3" size={"lg"}>
                    <DropdownButton
                        className="btn-block"
                        variant="warning"
                        size="lg"
                        title={"Search Criteria"}
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="Animal Name">Animal Name</Dropdown.Item>
                        <Dropdown.Item eventKey="Animal Type">Animal Type</Dropdown.Item>
                    </DropdownButton>
                    <FormControl
                        aria-label="Text input with dropdown button"
                        placeholder={"Enter "+ value}
                    />
                    <Button variant="danger" size="lg">
                        Search
                    </Button>
                </InputGroup>
            </Container>
        </div>

    )
}

export default AnimalSearchBar;
