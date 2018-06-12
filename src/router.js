import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Home from './containers/Home';
import Counter from './containers/Counter';

function Routers() {
    return <BrowserRouter >
        <div style={{height:'100%'}}>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
        </div>
    </BrowserRouter >
}

export default Routers;


