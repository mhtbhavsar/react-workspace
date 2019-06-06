import React from 'react'
import './CharComponent.css'

const CharComponent = (props) => {
    return(<div className="CharComponent" onClick={props.click}>
            <p>{props.chardata}</p>
            </div>
    )
}

export default CharComponent