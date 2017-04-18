import React from 'react';
//var Legend =require('react-d3-core').Legend

var Yaxis = require('react-d3-core').Yaxis;
var Xaxis = require('react-d3-core').Xaxis;
var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;

export default class TraderChartComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var orderData=[];
        var height=50;

        if(this.props.orders){
            this.props.orders.map((item,index)=>{
                var id=item.id;
                var quantityExecuted = (item.quantityExecuted/item.quantity);
                var qPlaced =item.quantityPlaced-item.quantityExecuted;
                var quantityPlaced =(qPlaced/item.quantity);
                var quantity=1-quantityExecuted-quantityPlaced;
                orderData.push({id,quantityExecuted,quantityPlaced,quantity});
                height+=49;
            });
        }
        else if(!this.props.order){

        }

        var y= function(d){
            return d.id;
        }
        var x=function(d){
            return +d;
        }
        var chartSeries = [{
            "field": "quantityExecuted",
            "name": "Executed",
            "color": "#ff8000"
        },
        {
            "field": "quantityPlaced",
            "name": "Placed",
            "color": "#febb68"
        },
        {
            "field": "quantity",
            "name": "quantity",
            "color": "#ffefbf"
        }
        ],

        //xLabel="Order Execution Status",
        showXGrid= true,
        showYGrid= true,
        width=1000,
        yScale ="ordinal",
        yLabel=" Order id",
        xTicks = [10, "%"],
        margins={top:40,rigth:50,bottom:40,left:50}
        //console.log(orderData);
        return (
            <div>
                <BarStackHorizontalChart
                    showXGrid={showXGrid}
                    showYGrid={showYGrid}
                    width={width}
                    xTicks={xTicks}
                    height={height}
                    data={orderData}
                    chartSeries={chartSeries}
                    x={x}
                    y={y}
                    yScale={yScale}
                    //xLabel={xLabel}
                    title='Order Execution Status'
                />
            </div>
        )
    }
}