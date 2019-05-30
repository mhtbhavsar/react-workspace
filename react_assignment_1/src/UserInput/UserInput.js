import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
    <div className="UserInput">
        <h3>UserInput</h3>
        <label>First Name : </label>
        <input type="text" name="first_name" onChange={props.changed}/> <br/>
        <label>Last Name : </label>
        <input type="text" name="last_name" onChange={props.changed}/>
    </div>
    )
}

export default userInput;