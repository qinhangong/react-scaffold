import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Home from './containers/Home';
import Counter from './containers/Counter';
import Demo from './containers/Demo';


function Routers() {
    return <BrowserRouter >
        <div style={{height:'100%'}}>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
            <Route path='/demo' component={Demo} />            
        </div>
    </BrowserRouter >
}

export default Routers;


