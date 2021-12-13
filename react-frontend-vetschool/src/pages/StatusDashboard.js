import React, {useEffect, useState} from "react";
import "../styles/StatusDashboard.css"

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Container} from "react-bootstrap";
import axios from "axios";
import useAuthorization from '../hooks/useAuthorization';

function StatusDashboard() {

    const [medicalIssues, setMedicalIssues] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const getAccessToken = useAuthorization();

    function getActiveMedicalIssues() {
        let config = { headers: {'Authorization': getAccessToken() }}
        axios.get('http://localhost:8080/api/medical/active', config)
            .then(res => {
                console.log(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        getActiveMedicalIssues();
    }, []);  // empty array so only executes once

    const productsGenerator = quantity => {
        const items = [];
        for (let i = 0; i < quantity; i++) {
            items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
        }
        return items;
    };

    const products = productsGenerator(100);

    const columns = [
        {
            dataField: "id",
            text: "Product ID",
            sort: true
        },
        {
            dataField: "name",
            text: "Product Name",
            sort: true
        },
        {
            dataField: "price",
            text: "Product Price"
        }
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
                keyField="id"
                data={products}
                columns={columns}
                pagination={paginationFactory({ hideSizePerPage : true })}
            />
        </div>
        </Container>
    )
}

export default StatusDashboard
