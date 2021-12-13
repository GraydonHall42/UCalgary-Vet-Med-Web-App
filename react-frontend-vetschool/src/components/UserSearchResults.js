import React, {useState} from 'react'
import {Button, Card, Col, Container, Dropdown, DropdownButton, Image, Row, Table} from "react-bootstrap";
import "../styles/UserSearchResults.css"

const AnimalSearchResult = (props) =>  {

    const [action,setAction]=useState('');
    const handleSelect=(e)=>{
        setAction(e)
    }

    const getRoles = (roles) => {
        let rolesString = "";
        roles.forEach(role => {
            rolesString = rolesString + " " + role.name + "\n";
        })
        return rolesString;
    }

    const handleClick = (user) => {
        props.setIsModalShowing(true)
        props.setSelectedUser(user)
    }


    function renderTableData() {
        return props.users.map((user, index) => {
            const { id, firstName, lastName, phone, email, roles, photoPath } = user //destructuring
            return (
                <tr key={id} className={"align-middle"}>
                    <td><Image src={photoPath} fluid roundedCircle className={"userSearchImage"}/></td>
                    <td>
                        {firstName}
                    </td>
                    <td>
                        {lastName}
                    </td>
                    <td>
                        {phone}
                    </td>
                    <td>
                        {email}
                    </td>
                    <td>
                        {getRoles(roles)}
                    </td>
                    <td>
                        <Button variant="warning" onClick={() => handleClick(user)}>
                            Edit
                        </Button>
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
                <th width={'17%'}>First Name</th>
                <th width={'17%'}>Last Name</th>
                <th width={'12%'}>Phone Number</th>
                <th width={'22%'}>Email</th>
                <th width={'12%'}>User Type</th>
                <th width={'10%'}></th>
            </tr>
            </thead>
            <tbody>
                {renderTableData()}
            </tbody>
        </Table>
    )
}

export default AnimalSearchResult;

