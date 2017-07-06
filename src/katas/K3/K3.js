import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import './K3.css';
import Stars from './Stars';
import Button from './Button';
import Refresh from './Refresh';
import Anwser from './Anwser';
import NumberPool from './NumberPool';
class K3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedNumbers:[],
            numberOfStars : Math.floor(Math.random()*9) + 1
        };
    }
    updateSelectedNumbers = (Number)=>{
        this.setState((prevState)=>{
            if(prevState.selectedNumbers.indexOf(Number)>=0){
                console.log("selectedNumbers "+ prevState.selectedNumbers);
                console.log("filter result:" + prevState.selectedNumbers.filter((i)=>Number!==i));
                return({
                    selectedNumbers: prevState.selectedNumbers.filter((i)=>Number!==i)
                });
            }else{
                return({
                    selectedNumbers: prevState.selectedNumbers.concat(Number)
                });
            }
        });
    }
    decideClassName =(number)=>{
        if(this.state.selectedNumbers.indexOf(number)>=0){
            return 'number selected';
        }
        else{
            return 'number';
        }
    }
    render(){
        return(
            <div className="container K3">
                <h4>Play Nine</h4>
                <hr/>
                <div className="row">
                    <Stars numberOfStars={this.state.numberOfStars}/>
                    <div className="col-2 centered">
                        <Button />
                        <Refresh />
                    </div>
                    <Anwser selectedNumbers={this.state.selectedNumbers} updateSelectedNumbers={this.updateSelectedNumbers} decideClassName={this.decideClassName}/>
                </div>
                <NumberPool updateSelectedNumbers={this.updateSelectedNumbers} decideClassName={this.decideClassName}/>
            </div>
        );
    }
}

export default K3;
