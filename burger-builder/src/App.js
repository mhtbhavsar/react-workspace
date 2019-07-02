import React, { Component } from 'react';
import Layouts from '../src/components/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
import CssClasses from '../src/components/Layout/Layout.css'


class App extends Component {
  render () {
   return ( 
    <div className={CssClasses.Content}>
        <Layouts>
          <BurgerBuilder/>
          <p>Test</p>
        </Layouts>
    </div> 
    )
  };
};

export default App;
