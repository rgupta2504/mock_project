import React from 'react';
export default class Main extends React.Component{
    
    render(){
        //console.log(this.props,);
        //console.log(this.props.children,"111");
        return(
            <div className="container-fluid">
                {React.cloneElement(this.props.children,this.props)}
            </div>
        )
    }
} 