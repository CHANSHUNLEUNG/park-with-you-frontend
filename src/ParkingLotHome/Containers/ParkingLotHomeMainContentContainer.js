import React, { Component } from "react";
import ParkingLotDetails from "../ParkingLotHomeMainContent/ParkingLotDetails";
import PaymentForm from "../ParkingLotHomeMainContent/PaymentForm";

export default class ParkingLotHomeMainContentContainer extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { selectedParkingLot, user } = this.props;
    return (
      <div style={{ padding: "24px" }}>
          <div>
            <ParkingLotDetails parkingLot={selectedParkingLot} />
            <PaymentForm
              parkingLot={selectedParkingLot}
              customer={user}
              onBookedLot={this.props.onBookedLot}
            />
          </div>
      </div>
    );
  }
}
