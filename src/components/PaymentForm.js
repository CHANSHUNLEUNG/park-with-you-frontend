import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, TimePicker, InputNumber, Button, Typography } from "antd";
import moment from "moment";

const format = "HH:mm";

export default class PaymentForm extends Component {
  static propTypes = {
    parkingLot: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.onTimePickerValueChange = this.onTimePickerValueChange.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
    this.state = {
      duration: 1,
      startingTime: "",
    };
  }

  onTimePickerValueChange(time, timeString) {
    this.setState({ startingTime: timeString });
  }
  onDurationChange(value) {
    this.setState({ duration: value });
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
            From:
            <TimePicker
              defaultValue={moment()}
              format={format}
              onChange={this.onTimePickerValueChange}
            />
          </div>
          <div>
            Duration:{" "}
            <InputNumber
              min={1}
              defaultValue={1}
              onChange={this.onDurationChange}
            />
            Hours
          </div>
          <div style={{ textAlign: "right" }}>Total Price: ${parkingLot.unitPrice * this.state.duration} </div>
        </Card>
        <div style={{ textAlign: "right" }}>
          <Button>Proceed to payment</Button>
        </div>
      </div>
    );
  }
}
