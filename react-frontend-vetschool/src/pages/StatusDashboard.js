import React, {useEffect, useState} from "react";


import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Button, Container, Image} from "react-bootstrap";
import axios from "axios";
import useAuthorization from '../hooks/useAuthorization';
import {Link} from "react-router-dom";
import "../styles/StatusDashboard.css"
import filterFactory, { selectFilter, textFilter } from 'react-bootstrap-table2-filter';

function StatusDashboard() {

    const [medicalIssues, setMedicalIssues] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const getAccessToken = useAuthorization();

    function getActiveMedicalIssues() {
        let config = { headers: {'Authorization': getAccessToken() }}
        axios.get('http://localhost:8080/api/medical/active', config)
            .then(res => {
                console.log(res.data)
                setMedicalIssues(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getActiveMedicalIssues();
    }, []);  // empty array so only executes once



    function imageFormatter(cell, row){
        return (<Image style={{width:50, height:50, borderRadius:"2px"}} src={cell}/>)
    }

    function profileButton(cell, row){
        return (
            <div className={"m-auto"}>
                <Link to={"/animal-profile/"+cell}>
                    <Button className={"searchResultBtn"} variant={"danger"}>
                        Profile
                    </Button>
                </Link>
                <Link to={"/medical/"+row.medicalIssueId}>
                    <Button className={"searchResultBtn"} variant={"warning"}>
                        Medical Issue
                    </Button>
                </Link>
            </div>
        )
    }

    const selectOptions = {
        0: 'Healthy',
        1: 'Attention',
        2: 'Urgent'
    };

    const columns = [
        {
            dataField: "animal.profilePhoto",
            text: "Profile Photo",
            formatter:imageFormatter,
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center' };
            }
        },
        {
            dataField: "animal.animalName",
            text: "Animal Name",
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center'};
            }
        },
        {
            dataField: "animal.animalType",
            text: "Animal Type",
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center' };
            },
            filter: textFilter({
                className: 'test-classname',
                placeholder: 'Filter Criteria',
                style: {
                    textAlign: 'center'
                },
            })
        },
        {
            dataField: "issueName",
            text: "Issue Name",
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center' };
            },
        },
        {
            dataField: "animal.status",
            text: "Animal Status",
            headerStyle: (colum, colIndex) => {
                return { width: '10%', textAlign: 'center' };
            },
            filter: textFilter({
                className: 'test-classname',
                placeholder: 'Filter Criteria',
                style: {
                    textAlign: 'center'
                },
            })
        },
        {
            dataField: "currentStatus",
            text: "Issue Status",
            headerStyle: (colum, colIndex) => {
                return { width: '9%', textAlign: 'center' };
            },
            filter: textFilter({
                className: 'test-classname',
                placeholder: 'Filter Criteria',
                style: {
                    textAlign: 'center'
                },
            })
        },
        {
            dataField: "animal.animalId",
            text: "Navigate To",
            formatter:profileButton,
            align: 'center',
            headerStyle: (colum, colIndex) => {
                return { width: '20%', textAlign: 'center' };
            },
        },
    ];

    // while awaiting axios...
    if (isLoading) {
        return <div className="App"><h1>Loading...</h1></div>;
    }

    return (
        <Container className={"mt-3"}>


        <div className={"statusDash"}>
            <BootstrapTable
                bootstrap4
                keyField="medicalIssueId"
                data={medicalIssues}
                columns={columns}
                pagination={paginationFactory({ hideSizePerPage : true })}
                striped={true}
                filter={filterFactory()}
            />
        </div>
        </Container>
    )
}

export default StatusDashboard
