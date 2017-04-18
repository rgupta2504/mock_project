import React from 'react';
import {Link} from 'react-router';

export default class TraderHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        //console.log(this.props,'ghvvghv');
        return(
            <div>
                <h4>Trader Desktop
                    <span className="pull-right"> {this.props.user_logged.name} 
                        <Link to="/">  Sign Out</Link></span>
                </h4>
            </div>
        );
    }
}