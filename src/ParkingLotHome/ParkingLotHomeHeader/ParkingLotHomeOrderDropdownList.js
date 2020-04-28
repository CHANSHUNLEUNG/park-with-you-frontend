import React, { Component } from "react";
import { Collapse } from "antd";
import ParkingLotHomeOrderDropdownListItem from "./ParkingLotHomeOrderDropdownListItem";
const { Panel } = Collapse;

export default class ParkingLotHomeOrderDropdownList extends Component {

  render() {
    const sortedOrder = [...this.props.orders].sort(
      (order1, order2) => order2.orderId - order1.orderId
    );
    return (
      <Collapse defaultActiveKey={["1"]}>
        {sortedOrder.map((order) => {
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
