import React from 'react';
import TraderHeader from './trader_header/TraderHeader.component';
import TraderTaskbar from './trader_taskbar/TraderTaskbar.component';
//import TableComponent from './order_table/TraderTable.component';
import cookie from 'react-cookie';


export default class TraderDesktopComponent extends React.Component {
    componentDidMount() {
        this.props.fetchTableData('http://localhost:8080/orders', 'get');
    }
    render() {
        //console.log(this.props,'inside desktop');
        if (cookie.load('Trader')) {
            return (
                <div>
                    <TraderHeader {...this.props} />
                    <TraderTaskbar {...this.props} />
                </div>
            )
        }
    }
}