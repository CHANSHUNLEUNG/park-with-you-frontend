import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, InputNumber, Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const { Title } = Typography;

export default class OrderListItem extends Component {
  static propTypes = {};
  constructor(props) {
    super(props)
    this.calculateRemainingTime = this.calculateRemainingTime.bind(this)
  
    this.state = {
      remainingMinute: 0,
      remainingSecond: 0,
      item: {
        parkingLotName: "Times Square",
        parkingLotAddress: "1 Matheson Street, Causeway Bay, Hong Kong",
        parkingPlaceName: "P1",
        startingTime: "2020-04-27 15:08:00",
        duration: 3600,
      },
    };
  }

  componentDidMount() {
    this.calculateRemainingTime();
  }
  
  calculateRemainingTime() {
    const endTime = moment(
      this.state.item.startingTime,
      "YYYY-MM-DD HH:mm:ss"
    ).add(this.state.item.duration, "seconds");
    const remainingTimeInSecond = endTime.diff(moment(), "seconds");
    if (remainingTimeInSecond <= 0) {
      this.setState({ remainingMinute: 0, remainingSecond: 0 });
    } else {
      const remainingMinute = parseInt(remainingTimeInSecond / 60)
      const remainingSecond = parseInt(remainingTimeInSecond % 60)
      this.setState({ remainingMinute, remainingSecond });
      setTimeout(this.calculateRemainingTime, 0)
    }
  }

  render() {
    const { item, remainingMinute, remainingSecond } = this.state
    return (
      <div>
        <Row>
          <Col span={20}>
            <Title level={2}>
              {item.parkingLotName + " - " + item.parkingPlaceName}
            </Title>
            <p>{item.parkingLotAddress}</p>
          </Col>
          <Col span={4}>
            <div>
              <span>
                {remainingMinute.toString().padStart(2, "0")}:
                {remainingSecond.toString().padStart(2, "0")}
              </span>
            </div>
            <div>
              <InputNumber min={1} defaultValue={1} />
              <Button shape="circle" icon={<PlusOutlined />} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
