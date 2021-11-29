import React, {useState} from 'react'
import {Button, Card, Col, Container, Image, Row, Table} from "react-bootstrap";
// import puppyPhoto from '../assets/puppy.jpg';
import puppyPhoto from '../assets/spud.jpg';
import "../styles/AnimalSearchResult.css"

const AnimalSearchResult = (props) =>  {


    function renderTableData() {
        return props.animals.map((animal, index) => {
            const { id, name, type, sex, photoPath } = animal //destructuring
            return (
                <tr key={id} className={"align-middle"}>
                    <td><Image src={photoPath} fluid roundedCircle className={"animalSearchImage"}/></td>
                    <td>
                        {name}
                    </td>
                    <td>
                        {type}
                    </td>
                    <td>
                        {sex}
                    </td>
                    <td>
                        <Button className={"searchResultBtn"} variant={"danger"}>
                            Go to profile
                        </Button>
                        <br />
                        <Button className={"searchResultBtn"} variant={"warning"}>
                            Request visit
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
                <th width={'20%'}>Photo</th>
                <th width={'20%'}>Name</th>
                <th width={'20%'}>Animal Type</th>
                <th width={'20%'}>Sex</th>
                <th width={'20%'}>Action</th>
            </tr>
            </thead>
            <tbody>
                {renderTableData()}
            </tbody>
        </Table>
    )
}

export default AnimalSearchResult;

