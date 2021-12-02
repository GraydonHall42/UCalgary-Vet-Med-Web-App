import React, {useState} from 'react'
import MedicalIssueProfileCard from "../components/MedicalIssueProfileCard";
import image1 from "../assets/imageSet/n02106166_6659.jpg";
import image2 from "../assets/imageSet/n02106166_6698.jpg";
import image3 from "../assets/imageSet/n02106166_6710.jpg";
import image5 from "../assets/imageSet/n02106166_6879.jpg";
import image6 from "../assets/imageSet/n02106166_6833.jpg";
import image8 from "../assets/imageSet/n02106166_7105.jpg";
import image9 from "../assets/imageSet/n02106166_7282.jpg";
import image10 from "../assets/imageSet/n02106166_7329.jpg";
import image11 from "../assets/imageSet/n02106166_7447.jpg";
import image12 from "../assets/imageSet/n02106166_7454.jpg";
import IndividualMedicalIssueSet from "../components/IndividualMedicalIssueSet";

const IndividualMedicalIssuePage = () => {

    const [medicalIssue, setMedicalIssue] = useState(
        {
            medical_issue_id: 3,
            medical_issue_name: "Broken Leg",
            animal_name: "Spud",
            status: "Green",
            openDate: "2020-09-10",
            closeDate: "2020-10-31",
            treatmentList: [
                {
                    comment_id: 1,
                    medical_issue_id: 3,
                    author_id: 4,
                    title: "Treatment 1",
                    author: "Dr.Doctor",
                    date: "2020-09-16",
                    description: "Border Collie stitch wounds shows signs of closing",
                    collection: [
                        { imageId: 1, image: image1 },
                        { imageId: 2, image: image2 },
                        { imageId: 3, image: image3 }
                    ]
                }, {
                    comment_id: 2,
                    medical_issue_id: 3,
                    author_id: 4,
                    title: "Treatment 2",
                    author: "Dr.Doctor",
                    date: "2020-10-16",
                    description: "Border Collie is able to walk without assistance.",
                    collection: [
                        { imageId: 5, image: image5 },
                        { imageId: 6, image: image6 }
                    ]
                }, {
                    comment_id: 3,
                    medical_issue_id: 3,
                    author_id: 4,
                    title: "Treatment 3",
                    author: "Dr.Doctor",
                    date: "2020-10-18",
                    description: "Border Collie walking ability tested on treadmill, walking speed at 1 km/h",
                    collection: [
                        { imageId: 8, image: image8 },
                        { imageId: 9, image: image9 },
                        { imageId: 10, image: image10 },
                        { imageId: 11, image: image11 },
                        { imageId: 12, image: image12 }
                    ]
                }]
        })

    return(
        <>
            <MedicalIssueProfileCard medicalIssue={medicalIssue}/>
            <IndividualMedicalIssueSet medicalIssue={medicalIssue}/>
        </>
    )
};

export default IndividualMedicalIssuePage;