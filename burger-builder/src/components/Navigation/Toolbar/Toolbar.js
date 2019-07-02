import React from 'react';
import CssClasses from './Toolbar.css';
import Logo from '../../Logo/Logo.js'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={CssClasses.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClick}/>
            <div className={CssClasses.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
    </header>
);

export default toolbar