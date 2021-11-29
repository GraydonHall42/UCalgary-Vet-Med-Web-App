import React, {useState} from 'react'
import {
    Button,
    ButtonGroup,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    FormControl, Image,
    InputGroup,
    Row
} from "react-bootstrap";
import "../styles/AnimalSearchBar.css"

const SearchBarWithCriteria = (props) => {

    const [value,setValue]=useState(props.searchOptions[0]);
    const handleSelect=(e)=>{
        setValue(e)
    }

    function renderSearchCriteria() {
        return props.searchOptions.map((criteria, index) => {
            return (
                <Dropdown.Item eventKey={criteria}>{criteria}</Dropdown.Item>
            )
        })
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
                        {renderSearchCriteria()}
                        {/*<Dropdown.Item eventKey="Animal Name">Animal Name</Dropdown.Item>*/}
                        {/*<Dropdown.Item eventKey="Animal Type">Animal Type</Dropdown.Item>*/}
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

export default SearchBarWithCriteria;
