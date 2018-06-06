import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Home from './containers/Home';
import DragDemo from './containers/DragDemo';

function Routers() {
    return <HashRouter>
        <div style={{height:'100%'}}>
            <Route exact path='/' component={Home} />
            <Route path='/drag' component={DragDemo} />
        </div>
    </HashRouter>
}

export default Routers;


