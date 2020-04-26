import React, { Component } from "react";
import PropTypes from "prop-types";
import ParkingLotDetails from "../ParkingLotHomeMainContent/ParkingLotDetails";
import PaymentForm from "../ParkingLotHomeMainContent/PaymentForm";

export default class RightPanel extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      customer: {
        id: 1,
        username: "User",
      },
      parkingLot: {
        id: 1,
        name: "Parking Lot1",
        address: "Kowloon, Hong Kong",
        unitPrice: 120,
        capacity: 100,
        availableCount: 50,
        region: "Kowloon Tong",
      },
    };
  }

  render() {
    const { parkingLot, customer } = this.state;
    return (
      <div style={{ padding: "24px" }}>
        <ParkingLotDetails parkingLot={parkingLot} />
        <PaymentForm parkingLot={parkingLot} customer={customer} />
      </div>
    );
  }
}
