import React from 'react';
import Card from './Card';
import CardList from './CardList';
import Form from './Form';

class K2 extends React.Component{


    constructor(props){
        super(props);
        this.state={
            CardInfos :[
            ],
        };
    }
    getNewCard = (cardInfo)=>{
        this.setState((prevState)=>({
            CardInfos: prevState.CardInfos.concat({...cardInfo})
        }));
    };
    render(){
        return(
            <div>
              <Form getNewCard={this.getNewCard}/>
              <CardList cardDataArray={this.state.CardInfos}/>
            </div>
        );
    }

}

export default K2;
