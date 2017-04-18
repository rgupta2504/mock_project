import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export default class LoginComponent extends React.Component{
    constructor(props){
            super(props)
        };
    componentDidMount() {
        this.props.fetchData('http://localhost:8080/users');
    };
    userlogin(){
            var loginName=ReactDOM.findDOMNode(this.refs.targetvalue).value
            //console.log(loginName);
            var data=this.props.users;
            var logginName;
            var selected;
            //console.log(data);
            data.map((user,index)=>{
            if(loginName===user.name){
                //console.log('true');
                logginName=loginName;
                selected=user;
                //console.log(user);
            }
            else{
                //console.log('false');
            }
        })
        this.props.currentLoginUser(selected);
        }
    render(){
        //console.log(this.props);
        //console.log(this.props.users);
        var options= this.props.users.map((item,index)=>{
            return <option value={item.name} key={index}> {item.name}</option>
        })
        return(
            <div>
                <h1>Log  </h1>
                <select ref="targetvalue">
                    {options}
                </select>

                <div>
                    <Link to="/trader">
                        <button onClick={this.userlogin.bind(this)}>Login</button>
                    </Link>
                </div>
            </div>
        );
    }
}