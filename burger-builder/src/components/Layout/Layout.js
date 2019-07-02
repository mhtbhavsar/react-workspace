import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import CssClasses from '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer : true
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer : false });
    };

    
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer : !prevState.showSideDrawer };
        });
    };

    render(){
        return (    
            <Aux>
                <Toolbar drawerToggleClick={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <main className={CssClasses.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };

}

export default Layout;