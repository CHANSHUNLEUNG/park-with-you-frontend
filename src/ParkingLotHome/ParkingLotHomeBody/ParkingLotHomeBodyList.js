import React, { Component } from 'react';
import { List } from 'antd';
import ParkingLotHomeBodyListItem from './ParkingLotHomeBodyListItem';

export default class ParkingLotHomeBodyList extends Component {
    render() {
        return (
            <>
                <List
                    bordered
                    dataSource={this.props.parkingLotsInfo}
                    renderItem={item => (
                        <List.Item key={item.id}>
                            <ParkingLotHomeBodyListItem item={item} />
                        </List.Item>
                    )}
                />
            </>
        )
    }
}
