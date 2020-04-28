import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  TimePicker,
  InputNumber,
  Button,
  Typography,
  Alert,
  notification,
} from "antd";
import { FrownOutlined, SmileOutlined } from "@ant-design/icons";
import moment from "moment";
import BookingApi from "../apis/BookingApi";
import ShareLinkModal from "./ShareLinkModal";

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
    this.isPaymentValid = this.isPaymentValid.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.showShareLinkModal = this.showShareLinkModal.bind(this);

    this.state = {
      duration: 1,
      startingTime: moment(),
      paymentSuccess: false,
      shareLinkModalVisible: false,
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
    BookingApi.bookParkingLot(
      parkingLot.id,
      customer.id,
      startingTime,
      duration
    )
      .then((response) => {
        this.setState({
          paymentSuccess: true,
        });
        notification.open({
          message: "Order Parking Lot Success",
          description: `${
            parkingLot.name
          } with start time ${startingTime.format("HH:mm")}`,
          icon: <SmileOutlined style={{ color: "#52c41a" }} />,
        });
        this.props.onBookedLot();
      })
      .catch((error) => {
        const response = error.response.data;
        notification.open({
          message: response.error,
          description: response.message,
          icon: <FrownOutlined style={{ color: "#ff6163" }} />,
        });
      });
  }

  isPaymentValid() {
    return (
      this.props.parkingLot.availableCount > 0 &&
      this.state.startingTime !== null
    );
  }

  isLoggedIn() {
    return this.props.customer !== null;
  }

  showShareLinkModal() {
    this.setState((prevState) => {
      return {
        shareLinkModalVisible: !prevState.shareLinkModalVisible,
      };
    });
  }

  render() {
    const { parkingLot, customer } = this.props;
    const discount = customer.availableCouponCount > 0 ? customer.discount : 0;
    return (
      <div>
        <Typography.Title style={{ textAlign: "center" }}>
          Payment
        </Typography.Title>
        <Card>
          {!this.isLoggedIn() ? (
            <Alert
              message="Warning"
              description="Please login to make payment"
              type="warning"
              showIcon
            />
          ) : null}
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            From:&nbsp;
            <TimePicker
              defaultValue={moment()}
              format={format}
              onChange={this.onTimePickerValueChange}
              disabled={!this.isLoggedIn()}
            />
          </div>
          <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            Duration:&nbsp;
            <InputNumber
              min={1}
              defaultValue={1}
              onChange={this.onDurationChange}
              disabled={!this.isLoggedIn()}
            />
            Hours
          </div>
          <div style={{ textAlign: "right" }}>
            {discount > 0 ? (
              <>
                <p>
                  Original Price: ${parkingLot.unitPrice * this.state.duration}
                </p>
                <p>Discount: -${discount}</p>
              </>
            ) : null}
            <p>
              Total Price: $
              {parkingLot.unitPrice * this.state.duration - discount}{" "}
            </p>
          </div>
        </Card>
        <div style={{ textAlign: "right", marginTop: "24px" }}>
          <Button
            disabled={!this.isLoggedIn() || !this.isPaymentValid()}
            onClick={this.onSubmitPayment}
          >
            Proceed to payment
          </Button>
          <br />
          <br />
          <Button
            type="link"
            disabled={!this.state.paymentSuccess}
            onClick={this.showShareLinkModal}
          >
            Share Link To Get Coupon
          </Button>{" "}
          <ShareLinkModal
            shareLinkModalVisible={this.state.shareLinkModalVisible}
            showShareLinkModal={this.showShareLinkModal}
          />
        </div>
      </div>
    );
  }
}
