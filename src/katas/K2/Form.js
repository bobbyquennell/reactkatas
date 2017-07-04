import React from 'react';
import axios from 'axios';
class Form extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            inputValue:''
        };
        this.onSubmitHanlder = this.onSubmitHanlder.bind(this);
    }
    onChangeHandler = (event)=>{
        this.setState({inputValue: event.target.value});
    };
    onSubmitHanlder = function(event){
        event.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.inputValue}`)
        //option1: using classic function, have to bind "this" explicitly
        // .then(function(response){
        //     this.props.getNewCard(response.data);
        // }.bind(this));
        /* option2: using arrow function, the "this" keyword is not undefined in below code */
        .then(response =>{
            // console.log(response.data);
            this.props.getNewCard(response.data);
            this.setState({inputValue:''});
        });
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmitHanlder} style={{margin:"0 auto", width:"50%"}}>
                    <input name="haha" onChange={this.onChangeHandler} value={this.state.inputValue} required/>
                    <button name="haha" value="button" type="submit">Add Card</button>
                </form>
            </div>
        );
    }
}


export default Form;
