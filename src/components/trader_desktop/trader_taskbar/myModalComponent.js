import React from 'react';
import ReactDOM from 'react-dom';

export class myModalComopnent extends React.Component {
    constructor(props) {
        super(props);
        //console.log('## MODAL DATA AND PROPS:', this.props);
    }
    createThisModal(){
        var x=ReactDOM.findDOMNode(this.refs.targetvalue).value
        //console.log(x);
        this.props.removeModal();
        this.props.random_number(x);
    }
    removeThisModal() {
        this.props.removeModal();
    }

    render() {
        return (
            <div>
                <p>Enter number of trades</p>
                <input type="text" ref="targetvalue"></input>
                <div className="pull-right">
                    <button
                        type="button"
                        onClick={this.createThisModal.bind(this)}>
                        create
                    </button>
                    <button
                        type="button"
                        onClick={this.removeThisModal.bind(this)}>
                        cancel
                    </button>
                </div>
            </div>
        );
    }
}