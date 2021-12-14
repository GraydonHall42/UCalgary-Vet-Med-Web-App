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
import "../../styles/AnimalSearchBar.css"

const SearchBarWithCriteria = (props) => {


    const handleSelect=(e)=>{
        props.setSearchCriteria(e)
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
                    </DropdownButton>
                    <FormControl
                        onChange={(e) => props.setAnimalName(e.target.value)}
                        aria-label="Text input with dropdown button"
                        placeholder={"Enter "+ props.searchCriteria}
                        value={props.animalName}
                    />
                </InputGroup>
            </Container>
        </div>

    )
}

export default SearchBarWithCriteria;
