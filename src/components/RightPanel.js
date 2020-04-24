import React, { Component } from "react";
import PropTypes from "prop-types";
import ParkingLotDetails from "./ParkingLotDetails";
import PaymentForm from "./PaymentForm";

export default class RightPanel extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  constructor(props) {
    super(props);

    this.state = {
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
    const { parkingLot } = this.state;
    return (
      <div>
        <ParkingLotDetails parkingLot={parkingLot} />
        <PaymentForm parkingLot={parkingLot} />
      </div>
    );
  }
}
