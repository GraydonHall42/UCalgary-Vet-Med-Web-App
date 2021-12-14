import React, {useState} from 'react'
import { Button, FormControl, InputGroup } from "react-bootstrap";
import "../../styles/UserProfilePage.css"

const UserProfileField = (props) =>  {

    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState(props.fieldValue);

    function handleClick(){
        // If edit gets locked
        if(editable) {
            props.setValue(value);
            props.setOpenFields(props.openFields - 1)
        }
        else {
            props.setOpenFields(props.openFields + 1)
        }
        
        setEditable(!editable)

    }

    return(
        <div>
            <InputGroup className="mt-2">
                <InputGroup.Text id={props.fieldName}>
                    {props.fieldLabel}
                </InputGroup.Text>
                <FormControl
                    value={value}
                    aria-describedby={props.fieldName}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!editable}
                />
                <Button
                    variant={"warning"}
                    variant={!editable ? "warning" : "danger"}
                    onClick={handleClick}
                >
                    {!editable ? "Edit" : "Enter"}
                </Button>
            </InputGroup>
        </div>
    )
}

export default UserProfileField;

