import React, { Component } from 'react';
import { Button } from 'antd';
import Pure from './Pure';

class Demo extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return <div>
            <div>hello 123</div>
            <ul>
                <Pure/>
            </ul>
        </div>
    }
}

export default Demo;