import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.css';
import './K3.css';
class K3 extends React.Component{
    render(){
        return(
            <div className="container K3">
                <h4>Play Nine</h4>
                <hr/>
                <div className="row">
                    <div className=" col-5">
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                        <i className="fa fa-star star"/>
                    </div>
                    <div className="col-2 centered">
                        <button className="btn btn-default">=</button>
                        <button style={{textAlign:'center'}} className="btn btn-warning btn-sm">
                            <i className="fa fa-refresh"/> 5
                        </button>
                    </div>
                    <div className="col-5">
                        <span className="number">1</span>
                        <span className="number">2</span>
                        <span className="number">4</span>
                    </div>
                </div>


                <div className="row">
                    <div className="centered numbers col-12">
                        <span className="number">1</span>
                        <span className="number">2</span>
                        <span className="number">3</span>
                        <span className="number">4</span>
                        <span className="number">5</span>
                        <span className="number">6</span>
                        <span className="number">7</span>
                        <span className="number">8</span>
                        <span className="number">9</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default K3;
