import React from 'react'
import {Col, Container, Row, Table} from "react-bootstrap";
import ProfileNavigation from "../components/ProfileNavigation";
import AnimalProfileCard from "../components/AnimalProfileCard";

const AnimalInfoTable = (props) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th width={'30%'}>Animal Attribute</th>
                    <th width={'70%'}>Value</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Birthdate</td>
                <td>{props.birthdate}</td>
            </tr>
            <tr>
                <td>Age</td>
                <td>{props.age}</td>
            </tr>
            <tr>
                <td>Sex</td>
                <td>{props.sex}</td>
            </tr>
            <tr>
                <td>Color</td>
                <td>{props.color}</td>
            </tr>
            <tr>
                <td>Active</td>
                <td>{props.active}</td>
            </tr>
            <tr>
                <td>Microchip #</td>
                <td>{props.chipNum}</td>
            </tr>
            <tr>
                <td>Special Instructions</td>
                <td>{props.specialNotes}</td>
            </tr>
            </tbody>
        </Table>
    )
}

export default AnimalInfoTable;