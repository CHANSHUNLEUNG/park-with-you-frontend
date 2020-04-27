import React, { Component } from 'react'
import ParkingLotHomeHeader from '../ParkingLotHomeHeader/ParkingLotHomeHeader'

export default class ParkingLotHomeHeaderContainer extends Component {
    render() {
        return (
          <>
            <ParkingLotHomeHeader setUser={this.props.setUser} orders={this.props.orders} />
          </>
        );
    }
}
