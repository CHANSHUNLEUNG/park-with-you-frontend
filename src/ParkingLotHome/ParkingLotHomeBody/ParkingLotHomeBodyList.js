import React, { Component } from 'react';
import { List } from 'antd';
import ParkingLotHomeBodyListItem from './ParkingLotHomeBodyListItem';
import { TEST_PARKING_LOT_LIST } from '../Constants/Constant';

export default class ParkingLotHomeBodyList extends Component {
    render() {
        return (
            <>
                <List
                    bordered
                    dataSource={TEST_PARKING_LOT_LIST}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <ParkingLotHomeBodyListItem />
                        </List.Item>
                    )}
                />
            </>
        )
    }
}
