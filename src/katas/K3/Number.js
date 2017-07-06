import React from 'react';
class Number extends React.Component{
    constructor(props){
        super(props);
    }
    clickHandler=(event)=>{
        this.props.updateSelectedNumbers(this.props.value);
    }
    render(){
        return(
            <span className={this.props.decideClassName} onClick={this.clickHandler}>{this.props.value}</span>
        );
    }
}

export default Number;
