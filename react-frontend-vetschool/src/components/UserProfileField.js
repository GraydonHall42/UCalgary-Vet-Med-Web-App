import React, {useState} from 'react'
import {
    Button,
    FormControl,
    InputGroup
} from "react-bootstrap";
import "../styles/UserProfilePage.css"

const UserProfileField = (props) =>  {

    const [editable, setEditable] = useState(true)

    function handleClick(){
        setEditable(!editable)
    }

    return(
        <div>
            <InputGroup className="mt-2">
                <InputGroup.Text id={props.fieldName}>
                    {props.fieldLabel}
                </InputGroup.Text>
                <FormControl
                    defaultValue={props.fieldValue}
                    aria-label={props.fieldValue}
                    aria-describedby={props.fieldName}
                    disabled={editable}
                />
                <Button
                    variant={"warning"}
                    variant={editable? "warning" : "danger"}
                    onClick={handleClick}
                >
                    {editable? "Edit" : "Lock"}
                </Button>
            </InputGroup>
        </div>
    )
}

export default UserProfileField;

