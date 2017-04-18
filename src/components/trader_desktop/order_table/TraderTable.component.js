import React from 'react';
// in ECMAScript 6
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
var dateFormat = require('dateformat');

export default class TableComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        //console.log(this.props.orders,'asfd'); 
        var orders = this.props.orders;
        return(
            <div>
                <h1>Table Component</h1>
                <BootstrapTable data={orders} striped={true} hover={true}>
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="creationTime" dataSort={true} dataAlign="center">Time</TableHeaderColumn>
                    <TableHeaderColumn dataField="side" dataAlign="center">Side</TableHeaderColumn>
                    <TableHeaderColumn dataField="symbol" dataAlign="center">Symbol</TableHeaderColumn>
                    <TableHeaderColumn dataField="quantity" dataAlign="center">Quantity</TableHeaderColumn>
                    <TableHeaderColumn dataField="quantityPlaced" dataAlign="center">QuantityPlaced</TableHeaderColumn>
                    <TableHeaderColumn dataField="quantityExecuted" dataAlign="center">QuantityExecuted</TableHeaderColumn>
                    <TableHeaderColumn dataField="limitPrice" dataAlign="center">LimitPrice</TableHeaderColumn>
                    <TableHeaderColumn dataField="priority" dataAlign="center">Priority</TableHeaderColumn>
                    <TableHeaderColumn dataField="status" dataAlign="center">Status</TableHeaderColumn>
                    <TableHeaderColumn dataField="traderId" dataAlign="center">TraderID</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}