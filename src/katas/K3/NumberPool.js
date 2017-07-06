import React from 'react';
import Number from './Number';
import _ from 'lodash';
const NumberPool = ({updateSelectedNumbers, decideClassName})=>{
    return(
        <div className="row">
            <div className="centered numbers col-12">
                {_.range(1,10).map(i=><Number updateSelectedNumbers={updateSelectedNumbers} decideClassName={decideClassName(i)} key={i} value={i}/>)}
            </div>
        </div>
    );
};

export default NumberPool;
