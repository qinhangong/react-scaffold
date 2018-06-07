import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Card, Menu } from 'antd';
import styles from './index.less';
import imgUrl from '../../../assets/img/react-logo.svg';

const { Meta } = Card;
class Home extends Component {
    constructor() {
        super();
        this.state = {
            imgWidth: 0,
            imgHeight: 0,
        }
    }

    componentDidMount() {
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            this.setState({
                imgWidth: img.width
            })
        }
    }

    render() {
        return (
            <div className={styles.home}>
                <div className={styles.header}>
                    <Menu
                        onClick={this.handleClick}
                        mode="horizontal"
                    >
                        <Menu.Item key="counter"><Link to='/counter'>counter</Link>  </Menu.Item>
                    </Menu>
                </div>
                <div className={styles.logo}>
                    <Card
                        hoverable
                        style={{ width: this.state.imgWidth, boxSizing: 'content-box', padding: 15, border: 'none' }}
                        cover={<img className={styles.image} src={imgUrl} style={{ width: this.state.imgWidth }} />}
                    >
                        <Meta
                            style={{ textAlign: 'center' }}
                            title="Hello React"
                            description="https://reactjs.org/"
                        />
                    </Card>
                </div>
            </div>
        )
    }
}

export default Home;