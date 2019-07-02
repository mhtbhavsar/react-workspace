import React from 'react';
import CssClasses from './SideDrawer.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';


const sideDrawer = (props) => {
    //.. Animations need to configure here for close and open sidedrawer..
    let attachedClasses = [CssClasses.SideDrawer, CssClasses.Close];

    if(props.open) {
        attachedClasses = [CssClasses.SideDrawer, CssClasses.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={CssClasses.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;