import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './containers/Home';
import Counter from './containers/Counter';

function Routers() {
    return <HashRouter>
        <div style={{height:'100%'}}>
            <Route exact path='/' component={Home} />
            <Route path='/counter' component={Counter} />
        </div>
    </HashRouter>
}

export default Routers;


