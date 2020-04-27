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
      order: this.props.order
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
    BookingApi.extendBooking(this.state.order.orderId, this.state.duration)
      .then(response => {
        this.setState((prevSate) => ({
          order: {
            ...prevSate.order,
            duration: response.data.duration,
          },
        }));

      })
      .catch();
  }

  render() {
    const { order, remainingMinute, remainingSecond, remainingTimeType } = this.state;
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
            <div>
              Extend:&nbsp;
              <InputNumber min={1} defaultValue={1} onChange={this.onDurationChange}/>
              <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={this.onExtendButtonClick}/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
