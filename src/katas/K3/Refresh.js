import React from 'react';

const Refresh = ({refreshStars, RefreshTimesLeft})=>{
    return(
        <button disabled={RefreshTimesLeft === 0} onClick={refreshStars} style={{textAlign:'center'}} className="btn btn-warning btn-sm clickable">
            <i className="fa fa-refresh"/> {RefreshTimesLeft}
        </button>
    );
};

export default Refresh;
