import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import './K3.css';
import Stars from './Stars';
import Button from './Button';
import Refresh from './Refresh';
import Anwser from './Anwser';
import NumberPool from './NumberPool';
class K3 extends React.Component{
    render(){
        return(
            <div className="container K3">
                <h4>Play Nine</h4>
                <hr/>
                <div className="row">
                    <Stars />
                    <div className="col-2 centered">
                        <Button />
                        <Refresh />
                    </div>
                    <Anwser/>
                </div>
                <NumberPool/>

            </div>
        );
    }
}

export default K3;
