import React, {useState} from 'react';
import AnimalProfileCard from '../components/AnimalProfileCard';
import ProfileNavigation from '../components/ProfileNavigation';
import '../styles/MedicalIssueList.css';

function MedicalCommentList() {

    let [medicalIssues, setMedicalIssues] = useState({
            
        45: 
        {
            "animalId": 2,
            "issueName": "Flu",
            "currentStatus": "Red",
            "openDate": "2021-10-05",
            "closeDate": null,
            "description": "Animal puked this morning and is not moving much"
        },
        35: 
        {
            "animalId": 2,
            "issueName": "Torn ACL",
            "currentStatus": "Yellow",
            "openDate": "2021-10-05",
            "closeDate": null,
            "description": "Animal Tore his ACL"
        },
        29: 
            {
                "animalId": 2,
                "issueName": "Cut Leg",
                "currentStatus": "Green",
                "openDate": "2021-02-05",
                "closeDate": "2021-02-10",
                "description": "Animal has a cut above knee on leg"
            },
        25: 
            {
                "animalId": 2,
                "issueName": "Food Poisoning",
                "currentStatus": "Green",
                "openDate": "2020-10-15",
                "closeDate": "2020-10-17",
                "description": "Animal puked this morning"
            },
        20:
            {
                "animalId": 2,
                "issueName": "Hurt Leg",
                "currentStatus": "Green",
                "openDate": "2020-06-15",
                "closeDate": "2020-06-20",
                "description": "Animal was limping on back left leg"
            }
    });

    function Item(issue){
        return (
            <button className="medicalIssueItem">
                <div className="itemTop">
                    <div className="itemTopLeft">
                        <p className="issueName">{issue.issueName}</p>
                    </div>
                    <div className="itemTopRight">
                        <p className="currentStatus">{issue.currentStatus}</p>
                    </div>
                </div>
                <div className="itemBottom">
                    <div className="closed">
                        <p>Closed: </p>
                    </div>
                    <div className="issueCloseDate">
                        <p>{issue.closeDate}</p>
                    </div>
                    
                </div>
            </button>
        )
    }

    return (
        <div className="medicalContainer">
            <AnimalProfileCard
                name="Spud"
                type="Dog"
                status="Healthy"
                lastCheckup="2021-10-01"
            />
            <ProfileNavigation />
            <div className="listContainer">
                <div className="medicalIssueList">
                    {               
                        Object.entries(medicalIssues).map( ([issueId, issue]) => Item(issue))
                    }
                </div>
            </div>
            <div className="addButtonContainer">
                <button className="addButton">Create New Medical Issue</button>
            </div>
        </div>
    )
}

export default MedicalCommentList
