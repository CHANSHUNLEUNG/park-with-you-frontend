import React, { Component } from "react";
import { Row, Col, Radio, Input } from "antd";
import {
  SORT_BY_NAME,
  SORT_BY_DISTANCE,
  SORT_BY_AVAILABLE,
  SORT_BY_PRICE,
} from "../Constants/Constant";
import { AudioOutlined } from "@ant-design/icons";

const { Search } = Input;

const SUFFIX = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
      paddingRight: 4,
    }}
  />
);

export default class ParkingLotHomeBodyListHeader extends Component {
  constructor(props) {
    super(props);

    this.handleSortMethodChange = this.handleSortMethodChange.bind(this);
    this.sortParkingLotsInfo = this.sortParkingLotsInfo.bind(this);
    this.state = {
      sortBy: SORT_BY_PRICE,
    };
  }

  sortParkingLotsInfo(sortMethod) {
    if (sortMethod === SORT_BY_PRICE) {
      this.props.sortParkingLotsByPrice();
    }
    if (sortMethod === SORT_BY_AVAILABLE) {
      this.props.sortParkingLotsByAvailable();
    }
  }

  handleSortMethodChange(event) {
    const sortMethod = event.target.value;
    this.setState(
      {
        sortBy: sortMethod,
      },
      this.sortParkingLotsInfo(sortMethod)
    );
  }

  getSearchBarInput(value) {
      console.log("User input: "+value.trim());
      this.props.getSearchBarInput(value.trim());

  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Search
              placeholder="Search parking lots by regions here "
              enterButton="Search"
              size="large"
              suffix={SUFFIX}
              onSearch={(value) => this.getSearchBarInput(value)}
            />
            <Radio.Group
              value={this.state.sortBy}
              onChange={this.handleSortMethodChange}
            >
              <Radio.Button value={SORT_BY_NAME}>Name</Radio.Button>
              <Radio.Button value={SORT_BY_DISTANCE}>Distance</Radio.Button>
              <Radio.Button value={SORT_BY_AVAILABLE}>Available</Radio.Button>
              <Radio.Button value={SORT_BY_PRICE}>Price</Radio.Button>
            </Radio.Group>
          </Col>
        </Row>
      </>
    );
  }
}
