import React, { Component } from 'react';
import { List } from 'antd';
import ParkingLotHomeBodyListItem from './ParkingLotHomeBodyListItem';
import ParkingLotHomeBodyListHeader from './ParkingLotHomeBodyListHeader';

export default class ParkingLotHomeBodyList extends Component {
    render() {
        return (
            <>
                <List
                    header={<ParkingLotHomeBodyListHeader
                        sortParkingLotsByPrice={this.props.sortParkingLotsByPrice}
                        sortParkingLotsByAvailable={this.props.sortParkingLotsByAvailable}
                    />}
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
