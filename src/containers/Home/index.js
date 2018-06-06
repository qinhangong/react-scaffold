import React, { Component } from 'react';
import { Card } from 'antd';
import styles from './index.less';
import imgUrl from '../../../assets/img/react-logo.svg'

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
                <Card
                    hoverable
                    style={{ width: this.state.imgWidth,boxSizing:'content-box',padding:15,border:'none'}}
                    cover={<img className={styles.image} src={imgUrl} style={{ width: this.state.imgWidth }} />}
                >
                    <Meta
                        style={{textAlign:'center'}}
                        title="Hello React"
                        description="https://reactjs.org/"
                    />
                </Card>
                
            </div>
        )
    }
}

export default Home;