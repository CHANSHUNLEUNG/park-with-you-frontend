import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, InputNumber, Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { Title } = Typography;

export default class ParkingLotHomeOrderDropdownListItem extends Component {
  static propTypes = {};
  constructor(props) {
    super(props)
    this.calculateRemainingTime = this.calculateRemainingTime.bind(this)
  
    this.state = {
      remainingMinute: 0,
      remainingSecond: 0,
    };
  }

  componentDidMount() {
    this.calculateRemainingTime();
  }
  
  calculateRemainingTime() {
    const endTime = moment(
      this.props.order.startParkingTime,
      "YYYY-MM-DD HH:mm:ss"
    ).add(8, "hours").add(this.props.order.duration, "seconds");
    const remainingTimeInSecond = endTime.diff(moment(), "seconds");
    if (remainingTimeInSecond <= 0) {
      this.setState({ remainingMinute: 0, remainingSecond: 0 });
    } else {
      const remainingMinute = parseInt(remainingTimeInSecond / 60)
      const remainingSecond = parseInt(remainingTimeInSecond % 60)
      this.setState({ remainingMinute, remainingSecond });
      setTimeout(this.calculateRemainingTime, 500)
    }
  }

  render() {
    const { remainingMinute, remainingSecond } = this.state
    const { order } = this.props
    return (
      <div>
        <Row>
          <Col span={18}>
            <Title level={4}>
              {order.parkingLotName + " - " + order.parkingPlaceName}
            </Title>
            <p>{order.address}</p>
            <p>Price: {order.unitPrice * (parseFloat(order.duration)/3600)}</p>
          </Col>
          <Col span={6}>
            <div>
              <span>
                {remainingMinute.toString().padStart(2, "0")}:
                {remainingSecond.toString().padStart(2, "0")}
              </span>
            </div>
            <div>
              <InputNumber min={1} defaultValue={1} />
              <Button shape="circle" icon={<PlusOutlined />} size="small"/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
