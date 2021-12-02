import React, { useState } from 'react';
import { Container, Row, Col, Image, Modal, Button} from 'react-bootstrap';
import image1 from '../assets/imageSet/n02106166_6659.jpg';
import image2 from '../assets/imageSet/n02106166_6698.jpg';
import image3 from '../assets/imageSet/n02106166_6710.jpg';
import image4 from '../assets/imageSet/n02106166_6824.jpg';
import image5 from '../assets/imageSet/n02106166_6879.jpg';
import image6 from '../assets/imageSet/n02106166_6833.jpg';
import image7 from '../assets/imageSet/n02106166_7074.jpg';
import image8 from '../assets/imageSet/n02106166_7105.jpg';
import image9 from '../assets/imageSet/n02106166_7282.jpg';
import image10 from '../assets/imageSet/n02106166_7329.jpg';
import image11 from '../assets/imageSet/n02106166_7447.jpg';
import image12 from '../assets/imageSet/n02106166_7454.jpg';
import image13 from '../assets/imageSet/n02106166_5.jpg';
import image14 from '../assets/imageSet/n02106166_7.jpg';
import image15 from '../assets/imageSet/n02106166_18.jpg';
import '../styles/ImageSet.css';

const ImageSet = () => {

    const [images, setImages] = useState([
        {
            imagesName: "Profile Pictures",
            collection: [
                { imageId: 1, image: image1 },
                { imageId: 2, image: image2 },
                { imageId: 3, image: image3 },
                { imageId: 4, image: image4 },
                { imageId: 15, image: image15 }
            ]
        }, {
            imagesName: "Treatment Photos (10-31-2021)",
            collection: [
                { imageId: 5, image: image5 },
                { imageId: 6, image: image6 },
                { imageId: 7, image: image7 }
            ]
        }, {
            imagesName: "Treatment Photos (11-07-2021)",
            collection: [
                { imageId: 8, image: image8 },
                { imageId: 9, image: image9 },
                { imageId: 10, image: image10 },
                { imageId: 11, image: image11 },
                { imageId: 12, image: image12 },
                { imageId: 13, image: image13 },
                { imageId: 14, image: image14 }
            ]
        }
    ])

    const imageMapping = (images) => {
        return(
            <Container>
                <Row className="darkGray scrollable ps-4 pb-2 pt-2">
                {images.map((imageObject, index) => ([
                            <Row className="darkGray ps-4 pb-2 pt-2 pe-0 text-white">
                                <Row className="bg-danger rounded pt-1 pb-1">
                                    <h5>{imageObject.imagesName}</h5>
                                </Row>
                                <Row /*xxl={4} xl={4} lg={4} md={3} sm={2} xs={1} */className="bg-light p-4 rounded border">

                                        {imageObject.collection.map((imageImages) => (
                                            <Col xxl={3} xl={3} lg={3} md={4} sm={6} xs={12}>
                                            <Image src={imageImages.image} alt={"animal"} thumbnail className="shadow-lg"/>
                                            </Col>
                                        ))}
                                    {index < 1 &&
                                        <Row className="pt-2">
                                        <Button variant="warning" className>Add Profile Photos</Button>
                                        </Row>}

                                </Row>

                            </Row>]
                        ))}
                </Row>
            </Container>
        )
    }

    return(
                imageMapping(images)
    )

};

export default ImageSet;