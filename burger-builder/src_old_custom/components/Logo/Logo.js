import React from 'react';
import CssClasses from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className={CssClasses.Logo}>
        <img src={burgerLogo} alt="My Burger"/>
    </div>
)

export default logo;