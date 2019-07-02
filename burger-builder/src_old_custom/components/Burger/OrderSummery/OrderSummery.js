import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
// import CssClasses from './Modal.css'

const orderSummery = (props) => {

    const ingredientSummery = Object.keys(props.ingredients)
    .map(igkey => {
        return <li key={igkey}><span style={{textTransform : 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
    })

    return (
        <Aux>
            <h3>Order Summery</h3>
            <p>A Delicious burger with the following ingredients : </p>
            <ul>
                {ingredientSummery}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={() => props.purchaseCanceled()}>CANCEL</Button>
            <Button btnType='Success' clicked={() => props.purchaseContinued()}>CONTINUE</Button>
        </Aux>
    
)}

export default orderSummery;