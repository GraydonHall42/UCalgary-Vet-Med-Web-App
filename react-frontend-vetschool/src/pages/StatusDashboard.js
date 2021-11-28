import React, {useState} from 'react';
import '../styles/StatusDashboard.css';

function StatusDashboard() {

    let [medicalIssues, setMedicalIssues] = useState({
        "animalId": 1,
        "animalName": "Sally",
        "animalType": "Dog",
        "medicalIssues": [
            {
                "medicalIssueId": 1,
                "animalId": 1,
                "issueName": "Scratched Ear",
                "currentStatus": "Green",
                "openDate": "2020-09-01 00:00:00",
                "closeDate": "2020-09-05 00:00:00",
                "description": "Sally Cut her ear and it was bleeding",
                "treatments": [
                    {
                        "treatmentId": 1,
                        "medicalIssueId": 1,
                        "title": "Give Stiches",
                        "date": "2020-09-01 00:00:00",
                        "description": "Gave sally stitches for her cut ear",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 1,
                                "treatmentId": 1,
                                "image": "img13.jpg"
                            },
                            {
                                "treatmentphotoId": 2,
                                "treatmentId": 1,
                                "image": "img14.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 2,
                        "medicalIssueId": 1,
                        "title": "Remove Stiches",
                        "date": "2020-09-05 00:00:00",
                        "description": "Took out stitches for sally, issue resolved",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 3,
                                "treatmentId": 2,
                                "image": "img15.jpg"
                            },
                            {
                                "treatmentphotoId": 4,
                                "treatmentId": 2,
                                "image": "img16.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            },
            {
                "medicalIssueId": 2,
                "animalId": 1,
                "issueName": "Broken Leg",
                "currentStatus": "Yellow",
                "openDate": "2021-09-01 00:00:00",
                "closeDate": null,
                "description": "Sally broke leg running",
                "treatments": [
                    {
                        "treatmentId": 3,
                        "medicalIssueId": 2,
                        "title": "Splint broken leg",
                        "date": "2021-09-01 00:00:00",
                        "description": "Gave sally splint for leg. Follow up to check healing in 2 months",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 5,
                                "treatmentId": 3,
                                "image": "img17.jpg"
                            },
                            {
                                "treatmentphotoId": 6,
                                "treatmentId": 3,
                                "image": "img18.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    },
                    {
                        "treatmentId": 4,
                        "medicalIssueId": 2,
                        "title": "Change splint dressing",
                        "date": "2021-10-01 00:00:00",
                        "description": "Changed dressing for Sallys splint",
                        "treatmentImages": [
                            {
                                "treatmentphotoId": 7,
                                "treatmentId": 4,
                                "image": "img19.jpg"
                            },
                            {
                                "treatmentphotoId": 8,
                                "treatmentId": 4,
                                "image": "img20.jpg"
                            }
                        ],
                        "author": {
                            "userId": 1,
                            "name": "John",
                            "email": "John@gmail.com",
                            "password": "1234",
                            "userType": "Vet"
                        }
                    }
                ]
            }
        ]
    })

    let [animalTypeFilter, setAnimalTypeFilter] = useState("");
    let [statusFilter, setStatusFilter] = useState("");


    function AnimalItem(animal){
        console.log(animal)
        return (
            <div className="dashboardListS">
                <div className="animalItemContainerS">
                    <button className="animalItemS">{animal.animalName}
                        <p>{animal.animalName}</p>
                        <p>the</p>
                        <p>{animal.animalType}</p>
                    </button>
                </div>
                <div className="medicalItemContainerS">
                    <button className="medicalIssueItemS">
                    <div className="itemTopS">
                        <div className="itemTopLeftS">
                            <p className="issueNameS">{animal.issueName}</p>
                        </div>
                        <div className="itemTopRightS">
                            <p className="currentStatusS">{animal.currentStatus}</p>
                        </div>
                    </div>
                    <div className="itemBottomS">
                        <div className="closedS">
                            <p>Closed: </p>
                        </div>
                        <div className="issueCloseDateS">
                            <p>{animal.closeDate}</p>
                        </div>
                        
                    </div>
                    </button>
                </div>
            </div>
            
        )
    }

    return (
        <div className="dashboardContainerS">
            <div className="titleContainerS">
                <h1 className="titleS">Animal Status Dashboard</h1>
            </div>
            <div className="filterContainerS">
                <div className="filterPanelS">
                    <label className="filterLabelS">Animal Type:</label>
                    <input className="filterInputS" value={animalTypeFilter} onChange={(e) => setAnimalTypeFilter(e.target.value)}/>
                </div>
                <div className="filterPanelS">
                    <label className="filterLabelS">Animal Status:</label>
                    <input className="filterInputS" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} />
                </div>
                <div className="buttonPanelS">
                    <button className="filterButtonS">Filter</button>
                </div>
            </div>
            <div className="statusListContainerS">
                <div className="medicalIssueListS">
                    {               
                        Object.entries(medicalIssues).map( ([animalId, animal]) => AnimalItem(animal) )
                    }
                </div>
            </div>
        </div>
    )
}

export default StatusDashboard
