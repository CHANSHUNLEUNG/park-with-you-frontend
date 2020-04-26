import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, TimePicker, InputNumber, Button, Typography, Space } from "antd";
import moment from "moment";
import BookingApi from "../apis/BookingApi";

const format = "HH:mm";

export default class PaymentForm extends Component {
  static propTypes = {
    parkingLot: PropTypes.object,
    customer: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.onTimePickerValueChange = this.onTimePickerValueChange.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
    this.onSubmitPayment = this.onSubmitPayment.bind(this);
    this.state = {
      duration: 1,
      startingTime: "",
    };
  }

  onTimePickerValueChange(time, timeString) {
    this.setState({ startingTime: time });
  }
  onDurationChange(value) {
    this.setState({ duration: value });
  }
  onSubmitPayment() {
    const { startingTime, duration } = this.state;
    const { parkingLot, customer } = this.props;
    BookingApi.bookParkingLot(parkingLot.id, customer.id, startingTime, duration)
      .then((response) => {})
      .catch((error) => {});
  }

  render() {
    const { parkingLot } = this.props;
    return (
      <div>
        <Typography.Title style={{ textAlign: "center" }}>
          Payment
        </Typography.Title>
        <Card>
          <div>
            <p>
              From:
              <TimePicker
                defaultValue={moment()}
                format={format}
                onChange={this.onTimePickerValueChange}
              />
            </p>
          </div>
          <div>
            <p>
              Duration:{" "}
              <InputNumber
                min={1}
                defaultValue={1}
                onChange={this.onDurationChange}
              />
              Hours
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p>Total Price: ${parkingLot.unitPrice * this.state.duration} </p>
          </div>
        </Card>
        <div style={{ textAlign: "right", marginTop: "24px" }}>
          <Button onClick={this.onSubmitPayment}>Proceed to payment</Button>
        </div>
      </div>
    );
  }
}
