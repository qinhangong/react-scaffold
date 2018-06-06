import React, { Component } from 'react';
import { Table, Checkbox } from 'antd';
import styles from './index.less';
console.log(styles)
class DragDemo extends Component {
    componentDidMount() {
        //console.log(this.props.history)
    }

    render() {
        const columns = [{
            width: '40%',
            title: '字段',
            dataIndex: 'column',
        }, {
            width: '40%',
            title: '类型',
            dataIndex: 'type',
        }, {
            width: '20%',
            title: '是否主键',
            dataIndex: 'primaryKey',
            render: (flag) => {
                return <Checkbox checked={flag} />
            }
        }];

        const data = [{
            key: '1',
            column: 'id',
            type: 'string',
            primaryKey: true,
        }, {
            key: '2',
            column: 'name',
            type: 'string',
            primaryKey: false,
        }, {
            key: '3',
            column: 'age',
            type: 'number',
            primaryKey: false,
        }];


        return (
            <div className={styles.drag}>
                <Table
                    bordered
                    size='small'
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    style={{ width: 500 }}
                    className='source-table'
                />
            </div>
        )
    }
}

export default DragDemo;