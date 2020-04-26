import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from 'antd'

export default class ParkingLotDetails extends Component {
  static propTypes = {
    parkingLot: PropTypes.object
  }

  render() {
    const { parkingLot } = this.props
    return (
      <div>
        <Typography.Title style={{textAlign: "center"}}>{parkingLot.name}</Typography.Title>
        <Card>
          <p>Address: {parkingLot.address}</p>
          <p>Price per hour: {parkingLot.unit_price}</p>
          <p>Current Available Place: {parkingLot.available_count}</p>
        </Card>
      </div>
    );
  }
}
