import React from 'react';
import Number from './Number';

const Anwser = ({selectedNumbers, updateSelectedNumbers, decideClassName})=>{
    return(
        <div className="col-5">
          {selectedNumbers.map(i => <Number updateSelectedNumbers={updateSelectedNumbers} decideClassName="number" key={i} value={i}/>)}
        </div>
    );
};

export default Anwser;
