import React from 'react';

const ValidationComponent = (props) => {
    let validationStr = "";

    if(props.count > 5){
        validationStr = "Text Long Enough";
    } else {
        validationStr = "Text is too short";
    }

    return(
        <div className="ValidationComponent">
            <p>Length count is : {validationStr}</p>
        </div>
    )
}

export default ValidationComponent