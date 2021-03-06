import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import './K3.css';
import Stars from './Stars';
import Button from './Button';
import Refresh from './Refresh';
import Anwser from './Anwser';
import NumberPool from './NumberPool';
import Result from './Result';
import _ from 'lodash';
import HasPossibleSolution from './HasPossibleSolution';
class K3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedNumbers:[],
            usedNumbers:[],
            numberOfStars : Math.floor(Math.random()*9) + 1,
            RefreshTimesLeft:5,
            btnStatus:'',
            result:''
        };
    }
    updateSelectedNumbers = (Number)=>{
        this.setState((prevState)=>{
            if(prevState.selectedNumbers.indexOf(Number)>=0){
                console.log("selectedNumbers "+ prevState.selectedNumbers);
                console.log("filter result:" + prevState.selectedNumbers.filter((i)=>Number!==i));
                return({
                    selectedNumbers: prevState.selectedNumbers.filter((i)=>Number!==i),
                    btnStatus: ''
                });
            }else{
                return({
                    selectedNumbers: prevState.selectedNumbers.concat(Number),
                    btnStatus: ''
                });
            }
        });
    }
    decideClassName =(number)=>{
        if(this.state.selectedNumbers.indexOf(number)>=0){
            return 'number selected';
        }
        else if(this.state.usedNumbers.indexOf(number)>=0){
            return 'number used';
        }
        else{
            return 'number';
        }
    }
    checkAnwser =()=>{
        console.log("checking the anwser");
        let sum = this.state.selectedNumbers.reduce((a,b)=>a + b, 0);
        if(sum === 0){
            return;
        }
        if(sum === this.state.numberOfStars){
            if(this.state.btnStatus!=='success'){
                this.setState({
                    btnStatus: 'success'
                });
            }else{
                //store the used number, refresh stars, reset the btnStatus
                this.setState((prevState)=>{
                    return({
                        btnStatus:'',
                        usedNumbers: prevState.usedNumbers.concat(this.state.selectedNumbers),
                        selectedNumbers:[],
                        numberOfStars : Math.floor(Math.random()*9) + 1
                    });

                },this.checkResult);

            }

        }
        else{
            this.setState({
                btnStatus: 'failed'
            });
        }
    }
    refreshStars = ()=>{
        console.log('refreshStars');
        this.setState((prevState)=>{
            if(prevState.RefreshTimesLeft>0){
                return{
                    numberOfStars : Math.floor(Math.random()*9) + 1,
                    RefreshTimesLeft: prevState.RefreshTimesLeft>0?prevState.RefreshTimesLeft - 1: 0
                };
            }
        }, this.checkResult);
    }
    playAgain=()=>{
        this.setState({
            selectedNumbers:[],
            usedNumbers:[],
            numberOfStars : Math.floor(Math.random()*9) + 1,
            RefreshTimesLeft:5,
            btnStatus:'',
            result:''
        });
    }
    checkResult=()=>{
        //conditionally update the state based on the previous state so we need to run setState(prevState=>{})
        console.log('checkig result');
        this.setState(prevState=>{
            if(prevState.usedNumbers.length === 9){
                return({
                    result:'Done.Nice!'
                });
            }
            else{
                if(prevState.RefreshTimesLeft===0 && !this.ifAnySolution(prevState)){
                    return({
                        result:'Gamge Over!'
                    });
                }
            }
        });

    }
    ifAnySolution=({usedNumbers, numberOfStars})=>{
        const possibleNumbers = _.range(1,10).filter((i)=>usedNumbers.indexOf(i)===-1);
        console.log('possibleNumbers: ' + possibleNumbers);
        console.log('numberOfStars: ' + numberOfStars);
        return HasPossibleSolution(possibleNumbers, numberOfStars);
    }
    render(){
        const {selectedNumbers, numberOfStars, btnStatus, result, RefreshTimesLeft} = this.state;//refactoring: destructure those objects from this.state to avoid lot of "this.state"
        return(
            <div className="container K3">
                <h4>Play Nine</h4>
                <hr/>
                <div className="row">
                    <Stars numberOfStars={numberOfStars}/>
                    <div className="col-2 centered">
                        <Button checkAnwser={this.checkAnwser} btnStatus={btnStatus} selectedNumbers={selectedNumbers}/>
                        <Refresh refreshStars={this.refreshStars} RefreshTimesLeft={RefreshTimesLeft}/>
                    </div>
                    <Anwser selectedNumbers={selectedNumbers} updateSelectedNumbers={this.updateSelectedNumbers} decideClassName={this.decideClassName}/>
                </div>
                <br/>
                {
                  result.length>0 ?
                  <Result result={result} playAgain={this.playAgain}/>:
                  <NumberPool updateSelectedNumbers={this.updateSelectedNumbers} decideClassName={this.decideClassName}/>
                }


            </div>
        );
    }
}

export default K3;
