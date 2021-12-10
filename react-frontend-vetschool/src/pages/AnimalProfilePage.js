import React, {useEffect, useState} from 'react'
import AnimalProfileCard from '../components/AnimalProfileCard';
import AnimalProfileContent from '../components/AnimalProfileContent';
import {useParams} from "react-router-dom";


function AnimalProfilePage(props) {

    const {animalId} = useParams();  // animalID from route param
    const [modalShow, setModalShow] = useState(false);
    const [weightData, setWeightData] = useState([
        {
            weight:10,
            date:"2021-02-01"
        },{
            weight:11,
            date:"2021-04-01"
        },{
            weight:12,
            date:"2021-06-01"
        },{
            weight:13,
            date:"2021-08-01"
        },{
            weight:10,
            date:"2021-10-01"
        }
    ])





    useEffect(() => {
        console.log(animalId);
    });

    let [medicalIssues, setMedicalIssues] = useState([
            
        {
            "medicalId": 45,
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
        let newData = [...weightData, { weight:weight, date: date}]
        newData.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(a.date) - new Date(b.date);
        });
        setWeightData(newData);
    }

    return (
        <div className="medicalContainer">
            <AnimalProfileCard
                name="Spud"
                type="Dog"
                status="Healthy"
                lastCheckup="2021-10-01"
            />
            <AnimalProfileContent weightData={weightData} medicalData={medicalIssues} addWeightData={addWeightData}/>
        </div>
    )
}

export default AnimalProfilePage
