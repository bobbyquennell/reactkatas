import React from 'react';

const Card = ({avatar_url, name, company})=>{
    return(
        <div style={{float:"left",margin:"20px 30%", width:"100%"}}>
            <div style={{float:"left",width:"80px", margin:"0 20px 0 0"}}><img style={{width:"75px"}} src={avatar_url}/></div>
            <div style={{float:"left", margin:"10px 0", width:"auto"}}>
                <span style={{fontSize:"1.2em", textAlign:"left"}}><b>{name}</b></span>
                <br/>
                <br/>
                <span style={{margin:"2px 0",textAlign:"left"}}>{company}</span>
            </div>
        </div>
    );
};

export default Card;
