import React, {useContext, useState} from 'react'
import {Button, Card, Col, Container, Image, Row, Table} from "react-bootstrap";
// import puppyPhoto from '../assets/puppy.jpg';
import puppyPhoto from '../assets/spud.jpg';
import "../styles/AnimalSearchResult.css"
import {UserContext} from "../UserContext";

const AnimalSearchResult = (props) =>  {
    const { user, setUser } = useContext(UserContext);

    const handleClick = (animal) => {
        props.setModalShow(true)
        props.setSelectedAnimal(animal)
    }


    function renderTableData() {
        return props.animals.map((animal, index) => {
            const { animalId, animalName, animalType, sex, photoPath } = animal //destructuring
            return (
                <tr key={animalId} className={"align-middle"}>
                    <td><Image src={photoPath} fluid roundedCircle className={"animalSearchImage"}/></td>
                    <td>
                        {animalName}
                    </td>
                    <td>
                        {animalType}
                    </td>
                    <td>
                        {sex}
                    </td>
                    <td>
                        <Button className={"searchResultBtn"} variant={"danger"}>
                            Go to profile
                        </Button>
                        <br />
                        <Button
                            disabled={user.userType!=='Teaching Technician'}
                            className={"searchResultBtn"}
                            variant={"warning"}
                            onClick={()=>handleClick(animal)}
                        >
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

