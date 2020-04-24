import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

export default class ParkingLotDetails extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  
    this.state = {
      parkingLot: {
        id: 1,
        name: 'Parking Lot1',
        address: 'Kowloon, Hong Kong',
        unitPrice: 120,
        capacity: 100,
        availableCount: 50,
        region: 'Kowloon Tong'
      }
    }
  }
  

  render() {
    const { parkingLot } = this.state
    return (
      <div>
        <h1>{parkingLot.name}</h1>
        <Card>
          <p>Address: {parkingLot.address}</p>
          <p>Price per hour: {parkingLot.unitPrice}</p>
          <p>Current Available Place: {parkingLot.availableCount}</p>
        </Card>
      </div>
    );
  }
}
