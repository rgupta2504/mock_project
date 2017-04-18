import React from 'react';
import TableComponent from '../order_table/TraderTable.component';
import {modal} from 'react-redux-modal'
import ReduxModal from 'react-redux-modal';
import {myModalComopnent} from './myModalComponent';

export default class TraderTaskbar extends React.Component{
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this);
        this.refresh=this.refresh.bind(this);
        this.table=this.table.bind(this);
        this.chart=this.chart.bind(this);
        this.random_number=this.random_number.bind(this);
        this.state={ presentation:0}
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
      var side_random=Math.floor((Math.random(side) * 2) );
      console.log(side[side_random]);

    //   var user_=[];
    console.log(this.props.instruments);
    //   this.props.users.map((item,index)=>{
    //       user_.push(item);
    //       //console.log(user_);
    //   })
    //   var symbol_random=Math.floor((Math.random(x) * 30) );
    //   console.log(user_[symbol_random]);
 


    //   symbol":"AAPL",
	// "quantity":6000,
	// "limitPrice":234,
	// "traderId"
   }
    
    render(){
        // console.log(this.props.instruments);
        //  console.log(this.props.users);
        var p;
        //var no=this.props.create()
        //console.log(no);
        if(this.state.presentation==0){
            p = <TableComponent {...this.props} />;
            //console.log(this.props,'sddsds');
        }
        else if(this.state.presentation==1){

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
            </div>
        );
    }
}