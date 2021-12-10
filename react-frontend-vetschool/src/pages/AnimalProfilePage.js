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

    function getAnimalById(id) {
        axios.get('http://localhost:8080/api/animals/' + id + '?fields')
            .then(res => {
                console.log(res.data)
                setAnimal(res.data)
                setWeightData(res.data.weights)
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
    }, [animal, weightData]);  // every time animal changes page will reload...


    let [medicalIssues, setMedicalIssues] = useState([
            
        {
            medicalId: 45,
            "animalId": 2,
            "issueName": "Flu",
            "currentStatus": "Red",
            "openDate": "2021-10-05",
            "closeDate": null,
            "description": "Animal puked this morning and is not moving much"
        },
        {
            "medicalId": 35,
            "animalId": 2,
            "issueName": "Torn ACL",
            "currentStatus": "Yellow",
            "openDate": "2021-10-05",
            "closeDate": null,
            "description": "Animal Tore his ACL"
        },
        {
            "medicalId": 29,
            "animalId": 2,
            "issueName": "Cut Leg",
            "currentStatus": "Green",
            "openDate": "2021-02-05",
            "closeDate": "2021-02-10",
            "description": "Animal has a cut above knee on leg"
        },
        {
            "medicalId": 25,
            "animalId": 2,
            "issueName": "Food Poisoning",
            "currentStatus": "Green",
            "openDate": "2020-10-15",
            "closeDate": "2020-10-17",
            "description": "Animal puked this morning"
        },
        {
            "medicalId": 18,
            "animalId": 2,
            "issueName": "Hurt Leg",
            "currentStatus": "Green",
            "openDate": "2020-06-15",
            "closeDate": "2020-06-20",
            "description": "Animal was limping on back left leg"
        }
    ]);

    const addWeightData = (weight, date) => {
        // const weightBody = {
        //     animalId:animalId,
        //     date:date,
        //     weight:weight
        // }

        const weightBody = {
            "animalId": 1,
            "date": "2022-01-15",
            "weight": "1000"

        }

        axios.put('http://localhost:8080/api/weight', weightBody)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })

        // let newData = [...weightData, { weight:weight, date: date}]
        // newData.sort(function(a,b){
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return new Date(a.date) - new Date(b.date);
        // });
        // setWeightData(newData);

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
