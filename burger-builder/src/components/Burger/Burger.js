import React from 'react';
import CssClasses from '../Burger/Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';


const burger = (props) => {
    /**
     * This is the object contains multiple key value paires and can't make loop easily to display burger
     * We need to extract keys and values 
     * Need to use Object.keys to extract keys and make loop
     * For moreinfo :- https://www.w3schools.com/jsref/jsref_obj_array.asp
     */
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // Here Array() is the javascript obejct to create array
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey+i} type={igKey}/>
        })
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, [])

    console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return(
        <div className={CssClasses.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;