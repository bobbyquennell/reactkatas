import React from 'react';

const Result = ({result, playAgain})=>{
    return(
      <div className="row">
         <div className="col-5 centered">
            <h2>{result}</h2>
            <button onClick={playAgain} className="btn btn-secondary">Play Again</button>
          </div>
      </div>
    );
};

export default Result;
