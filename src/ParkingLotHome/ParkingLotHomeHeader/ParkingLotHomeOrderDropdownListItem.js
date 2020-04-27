import React, { Component } from 'react'

export default class ParkingLotHomeOrderDropdownListItem extends Component {
    render() {
        const {order} = this.props;
        return (
            <div>
                <div>
                    {"From: " + order["startParkingTime"]}
                </div>
                <div>
                    {"Duration: " + (parseFloat(order["duration"]) / 3600)}
                </div>
                <div>
                    {"Price: " + order["unitPrice"] * (parseFloat(order["duration"]) / 3600)}
                </div>
                <div>
                    {"Address: " + order["address"]}
                </div>
            </div>
        )
    }
}
