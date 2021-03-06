import React from 'react';
import CssClasses from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className={CssClasses.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle;