import React, { Component } from 'react';
import { List } from 'antd';
import ParkingLotMainListItem from './ParkingLotMainListItem';
import { TEST_PARKING_LOT_LIST } from '../Constants/Constant';

export default class ParkingLotMainList extends Component {
    render() {
        return (
            <>
                <List
                    bordered
                    dataSource={TEST_PARKING_LOT_LIST}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <ParkingLotMainListItem />
                        </List.Item>
                    )}
                />
            </>
        )
    }
}
