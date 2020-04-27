import React, { Component } from "react";
import { Button } from "antd";
import { BookFilled } from "@ant-design/icons";
import { List } from "antd";

export default class ParkingLotHomeBodyListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.item);
  }

  render() {
    const { item } = this.props;
    const description = (
      <div>
        <div>{item.address}</div>
        <div>&nbsp;</div>
        <div>{"Price: $" + item.availableCount + "/hour"}</div>
        <div>{"Available: " + item.unitPrice}</div>
      </div>
    );
    return (
      <>
        <List.Item.Meta title={<a onClick={this.onClick}>{item.name}</a>} description={description} />
        <Button type="primary" shape="circle" icon={<BookFilled />} />
      </>
    );
  }
}
