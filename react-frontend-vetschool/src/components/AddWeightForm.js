import React, {useRef, useState} from 'react'
import WeightGraph from "../components/WeightGraph";
import {Button, Card, Form} from "react-bootstrap";
import "../styles/AddWeightForm.css"


const AddWeightForm = (props) => {

    const [weight, setWeight] = useState(null)
    const [date, setDate] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        props.addWeightData(weight, date)
        setWeight(null)
        setDate(null)
        e.target.reset()
    };

    return (
        <Card>
            <Card.Title className="cardTitle">Add data</Card.Title>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Weight</Form.Label>
                        <Form.Control
                            value={weight}
                            onChange={e => {setWeight(e.target.value)}}
                            type="number"
                            placeholder="Enter weight"
                            step="0.1"
                        />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            value={date}
                            onChange={e => {setDate(e.target.value)}}
                            type="date"
                            placeholder="Date" />
                    </Form.Group>

                    <Button variant="warning" type="submit" disabled={!(date && weight)}>
                        Add data point
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default AddWeightForm;