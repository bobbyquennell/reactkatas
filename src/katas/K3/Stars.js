import React from 'react';
import _ from 'lodash';
import Star from './Star';
const Stars = ({numberOfStars})=>{
    let count = numberOfStars;
    return(
        <div className=" col-5">
            {/* {_.range(numberOfStars).map((i)=>{ return(<Star key={i}/>);})} */}
            {
              _.range(count).map(
                i =><Star key={i}/>
              )
            }
        </div>
    );
};

export default Stars;
