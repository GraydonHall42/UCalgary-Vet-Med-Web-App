/*
 * A simple React component
 */
import {Component} from "react";
import React from "react";
import CellEditable from "./CellEditable";

class TableEditable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            description: 'Created a web app for Mr. Locomotive',
            hours: '15',
            rate: '90',
            amount: '$1350'
        }
    }

    render() {
        return (
            <div className="invoice-body">
                <div className="d-flex flex-sm-row flex-column justify-content-center">
                    <div className="invoice-itemization container-fluid">
                        <table className="table table-bordered">
                            <thead className="thead-default">
                            <tr>
                                <th colspan="2">Description</th>
                                <th>Hours</th>
                                <th>Rate</th>
                                <th>Amount</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {this.renderCells()}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    renderCells() {

        return ['description', 'hours', 'rate', 'amount'].map(field => (
            <CellEditable key={field} value={ this.state[field] } onChange={value => this.setState({[field]: value})} />
        ))

    }

    componentDidUpdate() {
        const { description, hours, rate, amount } = this.state;
        console.log(`New State: ${description} - ${hours} - ${rate} - ${amount}`);
    }
}


export default TableEditable