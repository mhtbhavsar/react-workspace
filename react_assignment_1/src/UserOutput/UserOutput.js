import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
    <div className="UserOutput">
        <h3>UserOutput</h3>
        <h4>Hello {props.name}!</h4>
        <p><button className="reset-button" onClick={props.resetHandler}>Reset</button></p>
    </div>
    )
}

export default userOutput;