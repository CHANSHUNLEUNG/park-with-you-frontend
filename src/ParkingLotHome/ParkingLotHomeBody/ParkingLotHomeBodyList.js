import React, { Component } from 'react';
import { List } from 'antd';
import ParkingLotHomeBodyListItem from './ParkingLotHomeBodyListItem';
import ParkingLotHomeBodyListHeader from './ParkingLotHomeBodyListHeader';

export default class ParkingLotHomeBodyList extends Component {
    render() {
        return (
            <>
                <List
                    header={<ParkingLotHomeBodyListHeader />}
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
