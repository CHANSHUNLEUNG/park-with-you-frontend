import React, { Component } from "react";
import { Collapse } from "antd";
import ParkingLotHomeOrderDropdownListItem from "./ParkingLotHomeOrderDropdownListItem";
import { TEST_ORDER_LIST } from "../Constants/Constant";
import BookingApi from "../apis/BookingApi";
const { Panel } = Collapse;

export default class ParkingLotHomeOrderDropdownList extends Component {

  render() {
    return (
      <Collapse defaultActiveKey={["1"]}>
        {this.props.orders.map((order) => {
          return (
            <Panel header={order["parkingLotName"]} key={order["orderId"]}>
              <ParkingLotHomeOrderDropdownListItem order={order} />
            </Panel>
          );
        })}
      </Collapse>
    );
  }
}
