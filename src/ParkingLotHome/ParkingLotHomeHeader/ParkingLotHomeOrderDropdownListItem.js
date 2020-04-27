import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, InputNumber, Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import BookingApi from "../apis/BookingApi";

const { Title, Text } = Typography;

export default class ParkingLotHomeOrderDropdownListItem extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.calculateRemainingTime = this.calculateRemainingTime.bind(this);
    this.onExtendButtonClick = this.onExtendButtonClick.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
    
    this.state = {
      remainingTimeType: "",
      remainingMinute: 0,
      remainingSecond: 0,
      duration: 1,
      order: this.props.order,
      isLoading: false
    };
  }

  componentDidMount() {
    this.calculateRemainingTime();
  }

  calculateRemainingTime() {
    const endTime = moment(
      this.state.order.startParkingTime,
      "YYYY-MM-DD HH:mm:ss"
    )
      .add(8, "hours")
      .add(this.state.order.duration, "seconds");
    const remainingTimeInSecond = endTime.diff(moment(), "seconds");
    if (remainingTimeInSecond <= 0) {
      this.setState({ remainingMinute: 0, remainingSecond: 0 });
    } else {
      const remainingMinute = parseInt(remainingTimeInSecond / 60);
      const remainingSecond = parseInt(remainingTimeInSecond % 60);
      let remainingTimeType = "";
      if (remainingMinute <= 14) {
        remainingTimeType = "danger";
      } else if (remainingMinute <= 29) {
        remainingTimeType = "warning";
      }
      this.setState({ remainingMinute, remainingSecond, remainingTimeType });
      setTimeout(this.calculateRemainingTime, 500);
    }
  }

  onDurationChange(value) {
    this.setState({ duration: value });
  }


  onExtendButtonClick() {
    this.setState({ isLoading: true });
    BookingApi.extendBooking(this.state.order.orderId, this.state.duration)
      .then(response => {
        this.setState((prevSate) => ({
          isLoading: false,
          order: {
            ...prevSate.order,
            duration: response.data.duration,
          },
        }));

      })
      .catch(error => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { order, remainingMinute, remainingSecond, remainingTimeType, isLoading } = this.state;
    return (
      <div>
        <Row>
          <Col span={18}>
            <Title level={4}>
              {order.parkingLotName + " - " + order.parkingPlaceName}
            </Title>
            <span>{order.address}</span>
            <p>
              Price: ${order.unitPrice * (parseFloat(order.duration) / 3600)}
            </p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <div>
              <Text type={remainingTimeType}>
                Remaining Time:&nbsp;
                {remainingMinute.toString().padStart(2, "0")}:
                {remainingSecond.toString().padStart(2, "0")}
              </Text>
            </div>
          </Col>
          <Col span={12}>
            {isLoading ? (
              <svg
                viewBox="0 0 1024 1024"
                focusable="false"
                class="anticon-spin"
                data-icon="loading"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path>
              </svg>
            ) : (
              <div>
                Extend:&nbsp;
              <InputNumber min={1} defaultValue={1} onChange={this.onDurationChange}/>
              <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={this.onExtendButtonClick}/>
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
