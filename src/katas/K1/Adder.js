import React,{Component} from 'react';

const Adder = function(props){

    const onClick=()=>{
        props.clickHandler(props.increment);
    };

    return(
        <button onClick={onClick}>+{props.increment}</button>
    );
};

export default Adder;
