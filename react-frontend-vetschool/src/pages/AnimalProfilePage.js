import React, {useEffect, useMemo, useState} from 'react'
import AnimalProfileCard from '../components/AnimalProfileCard';
import AnimalProfileContent from '../components/AnimalProfileContent';
import {useParams} from "react-router-dom";
import axios from "axios";
import {AnimalContext} from "../AnimalContext";


function AnimalProfilePage(props) {
    const {animalId} = useParams();  // animalID from route param

    const [animal, setAnimal] = useState(null)
    const animalValue = useMemo(() => ({ animal, setAnimal }), [animal, setAnimal]);
    const [isLoading, setLoading] = useState(true);

    const [modalShow, setModalShow] = useState(false);
    const [weightData, setWeightData] = useState([null])
    const [medicalIssues, setMedicalIssues] = useState([null]);

    function getAnimalById(id) {
        axios.get('http://localhost:8080/api/animals/' + id + '?fields')
            .then(res => {
                console.log(res.data)
                setAnimal(res.data)
                setWeightData(res.data.weights)
                setMedicalIssues(res.data.medicalIssues)
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        getAnimalById(animalId);
    }, []);  // empty array so only executes once

    useEffect(() => {
        console.log("rerender because animal changes")
    }, [animal]);  // every time animal changes page will reload...

    const addWeightData = (weight, date) => {
        const weightBody = {
            animalId:animalId,
            date:date,
            weight:weight
        }

        axios.post('http://localhost:8080/api/weight', weightBody)
            .then(res => {
                console.log(res)
                getAnimalById(animalId);
            })
            .catch(err => {
                console.log(err);
            })

    }

    // while awaiting axios...
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <AnimalContext.Provider  value={animalValue}>
            <div className="medicalContainer">
                <AnimalProfileCard />
                <AnimalProfileContent weightData={weightData} medicalData={medicalIssues} addWeightData={addWeightData}/>
            </div>
        </AnimalContext.Provider>
    )
}

export default AnimalProfilePage
