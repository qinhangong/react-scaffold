import React from 'react';
import styles from './index.less';
import imgUrl from '../../../assets/img/react-logo.svg'

function Home() {
    return (
        <div className={styles.home}>
            <img src={imgUrl} style={{width:80,height:80}}/>
        </div>
    )

}

export default Home;