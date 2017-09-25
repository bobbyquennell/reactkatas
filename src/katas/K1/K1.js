import React, {Component} from 'react';
import Adder from './Adder';
import Reset from './Reset';
import Result from './Result';
// const K1 =()=>{
//     return(
//         <button>Add</button>
//     )
// }

class K1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(increment){
        this.setState((prevState)=>({
            value : prevState.value + increment
        })
        );
    }
    ResetValue = ()=>{
        this.setState({
            value : 0
        });
    }
    render(){
        return (
            <div>
                <Adder clickHandler={this.handleClick} increment={1}/>
                <Adder clickHandler={this.handleClick} increment={5}/>
                <Adder clickHandler={this.handleClick} increment={10}/>
                <Adder clickHandler={this.handleClick} increment={20}/>
                <Adder clickHandler={this.handleClick} increment={100}/>
                <Reset clickHandler={this.ResetValue}/>
                <Result value={this.state.value}/>

            </div>
        );
    }
}
export default K1;
