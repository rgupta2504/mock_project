import React from 'react';
import TableComponent from '../order_table/TraderTable.component';
import TraderChartComponent from '../order_chart/TraderChartComponent';
import {modal} from 'react-redux-modal'
import ReduxModal from 'react-redux-modal';
import {myModalComopnent} from './myModalComponent';
import Websocket from 'react-websocket';
import cookie from 'react-cookie';


export default class TraderTaskbar extends React.Component{
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
        this.refresh=this.refresh.bind(this);
        this.table=this.table.bind(this);
        this.chart=this.chart.bind(this);
        this.random_number=this.random_number.bind(this);
        this.state={ presentation:0};
        this.handleData= this.handleData.bind(this);
    }
    delete(){
        this.props.fetchTableData('http://localhost:8080/orders','del');
    }
    refresh(){
        this.props.fetchTableData('http://localhost:8080/orders','get');        
    }
    table(){
        this.setState({presentation: 0});
    }
    chart(){
        this.setState({presentation: 1});
    }
     componentDidMount() {
        this.props.fetchData('http://localhost:8080/users');
        this.props.instrumentsData('http://localhost:8080/instruments');
    };

    addModal(method) {
    modal.add(myModalComopnent, {
      title: 'Create Multiple Trades',
      //random_number:this.random_number,
      random_number:method,
      size: 'medium', // large, medium or small,
      closeOnOutsideClick: true, // (optional) Switch to true if you want to close the modal by clicking outside of it,
      hideTitleBar: false, // (optional) Switch to true if do not want the default title bar and close button,
      hideCloseButton: false // (optional) if you don't wanna show the top right close button
      //.. all what you put in here you will get access in the modal props ;)
    });
  }
    random_number(x){
      //console.log('asd',x);
      //console.log(this.props.orders)
      var side=['buy','sell'];
      var instruments_=[];
            this.props.instruments.map((item,index)=>{
                instruments_.push(item);
                //console.log(instruments_);
            })
      for(let i=0;i<x;i++){
            var side_num=Math.floor((Math.random(side) * 2) );
            var side_random=side[side_num];
            //console.log(side[side_random]);
            
            var instruments_random=Math.floor((Math.random(x) * 30) );
            //console.log(instruments_[instruments_random]);
            var symbol_random=instruments_[instruments_random].symbol;
            //console.log(symbol_random)
            var limitPrice_random=instruments_[instruments_random].lastTrade;
            //console.log(limitPrice_random);

            var quantity_random=Math.floor((Math.random(side) * 100))
            //console.log(quantity_random);

            //var traderId_selected=this.props.user_logged.id
            var traderId_selected=cookie.load('Trader').id
            //console.log(this.props.user_logged.name);

            var data={
                side:side_random,
                symbol:symbol_random,
                quantity:quantity_random,
                limitPrice:limitPrice_random,
                traderId:traderId_selected
            }
            //console.log('sddfdff',data);

            this.props.fetchTableData('http://localhost:8080/orders','post',data);
      }
   }
    handleData(data){
        //console.log(data);
        //let result =JSON.parse(data);
        //console.log(result,+"sdfdsf");
        
        // var result=data.slice(2,);
        // console.log(result);
        // data= JSON.parse(result);
        // this.props.pushnotification(data[0],data[1]);
        
       if(data[0]=='4' && data[1]=='2'){
           data =JSON.parse(data.substring(2, ));
           //console.log(data);
           this.props.pushnotification(data[0],data[1]);
       }
       //console.log(data);
    //    let result = JSON.parse(data);
    //    this.props.fetchOrdersData('http://localhost:8080/orders','get');
}

    render(){
        // console.log(this.props.instruments);
        //  console.log(this.props.users);
        var p;
        if(this.state.presentation==0){
            p = <TableComponent {...this.props} />;
            //console.log(this.props,'sddsds');
        }
        else if(this.state.presentation==1){
            p=<TraderChartComponent {...this.props}/>;
        }
        else{
            p= <TableComponent {...this.props}/>
        }
        return(
            <div>
            <ReduxModal />
              {/* we need to pass the method*/}
                <button className="btn" onClick={this.addModal.bind(this,this.random_number)}>Trade</button>
                <button className="btn" onClick={this.delete}>Delete All</button>
                <button className="btn"onClick={this.refresh} >Refresh</button>
                {/*<button type="button" className=""><i className="fa fa-table" aria-hidden="true"></i></button>*/}
                <button className="navButton btn-xs pull-right" onClick={this.table}><img src={require('./table.png')} alt="" /></button>
                <button className="navButton btn-xs pull-right" onClick={this.chart}><img src={require('./chart.png')} alt="" /></button>
                {p}
                <Websocket url='ws://localhost:8080/socket.io/?transport=websocket' 
              onMessage={this.handleData}/>

            </div>
        );
    }
}