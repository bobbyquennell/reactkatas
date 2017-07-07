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
            usedNumbers:[],
            numberOfStars : Math.floor(Math.random()*9) + 1,
            btnStatus:''
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

                });

            }

        }
        else{
            this.setState({
                btnStatus: 'failed'
            });
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
                        <Button checkAnwser={this.checkAnwser} btnStatus={this.state.btnStatus}/>
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
