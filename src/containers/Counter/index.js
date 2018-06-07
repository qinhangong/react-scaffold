import React, { Component } from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';
import {increment,decrement,incrementAsync,decrementAsync} from '../../actions/counter';
import styles from './index.less';

class Counter extends Component {
    componentDidMount() {
        console.log(this.props)
    }

    handleClick(type) {
        this.props[type]();
    }

    render() {

        return (
            <div className={styles.demo}>
                <h3>redux经典demo</h3>
                <p>计数: {this.props.counter}</p>
                <Button className={styles.btn} type='primary' onClick={this.handleClick.bind(this, 'increment')}>加 +</Button>
                <Button className={styles.btn} type='primary' onClick={this.handleClick.bind(this, 'decrement')}>减 -</Button>
                <Button className={styles.btn} type='primary' icon="clock-circle" onClick={this.handleClick.bind(this, 'incrementAsync')}>1秒后加 +</Button>
                <Button className={styles.btn} type='primary' icon="clock-circle" onClick={this.handleClick.bind(this, 'decrementAsync')}>1秒后减 -</Button>            
            </div>
        )
    }
}

const mapStateToProps = state => state ;

const mapDispatchToProps = {
    increment,
    decrement,
    incrementAsync,
    decrementAsync
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);