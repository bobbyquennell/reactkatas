import React from 'react';

const Button = ({checkAnwser, btnStatus})=>{
    let btn;
    switch (btnStatus)
    {
    case 'success':
        btn = <button onClick={checkAnwser} className="btn btn-success clickable"><i className="fa fa-check"/></button>;
        break;
    case 'failed':
        btn = <button onClick={checkAnwser} className="btn btn-danger clickable">
            X
        </button>;
        break;
    default:
        btn =<button onClick={checkAnwser} className="btn btn-default clickable">=</button>;

    }
    return(
         btn
    );
};

export default Button;
