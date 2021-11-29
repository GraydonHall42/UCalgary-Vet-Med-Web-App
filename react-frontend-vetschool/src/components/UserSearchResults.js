import React, {useState} from 'react'
import {Button, Card, Col, Container, Dropdown, DropdownButton, Image, Row, Table} from "react-bootstrap";
import "../styles/UserSearchResults.css"

const AnimalSearchResult = (props) =>  {

    const [action,setAction]=useState('');
    const handleSelect=(e)=>{
        setAction(e)
    }


    function renderTableData() {
        return props.users.map((user, index) => {
            const { id, fName, lName, phone, email, type, photoPath } = user //destructuring
            return (
                <tr key={id} className={"align-middle"}>
                    <td><Image src={photoPath} fluid roundedCircle className={"userSearchImage"}/></td>
                    <td>
                        {fName}
                    </td>
                    <td>
                        {lName}
                    </td>
                    <td>
                        {phone}
                    </td>
                    <td>
                        {email}
                    </td>
                    <td>
                        {type}
                    </td>
                    <td>
                        <DropdownButton
                            className="btn-block"
                            variant="warning"
                            size="sm"
                            title={"Action"}
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="Block User">Block User</Dropdown.Item>
                            <Dropdown.Item eventKey="Edit User">Edit User</Dropdown.Item>
                            <Dropdown.Item eventKey="Delete User">Delete User</Dropdown.Item>
                        </DropdownButton>
                    </td>
                </tr>
            )
        })
    }


    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th width={'10%'}>Photo</th>
                <th width={'15%'}>First Name</th>
                <th width={'15%'}>Last Name</th>
                <th width={'15%'}>Phone Number</th>
                <th width={'15%'}>Email</th>
                <th width={'15%'}>User Type</th>
                <th width={'15%'}>Action</th>
            </tr>
            </thead>
            <tbody>
                {renderTableData()}
            </tbody>
        </Table>
    )
}

export default AnimalSearchResult;

