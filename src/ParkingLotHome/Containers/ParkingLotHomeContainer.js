import React, { Component } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Row, Col } from "antd";
import ParkingLotHomeBodyContainer from "./ParkingLotHomeBodyContainer";
import ParkingLotHomeHeaderContainer from "./ParkingLotHomeHeaderContainer";
import ParkingLotHomeMainContentContainer from "./ParkingLotHomeMainContentContainer";
import { BACKEND_HOST_URL, PARKING_LOT_INFO_PATH, TEST_PARKING_LOT_LIST } from "../Constants/Constant";

export default class ParkingLotHomeContainer extends Component {
  constructor(props) {
    super(props);

    this.updateParkingLotsInfo = this.updateParkingLotsInfo.bind(this);
    this.sortParkingLotsByPrice = this.sortParkingLotsByPrice.bind(this);
    this.sortParkingLotsByAvailable = this.sortParkingLotsByAvailable.bind(
      this
    );
    this.onListItemClicked = this.onListItemClicked.bind(this);
    this.setUser = this.setUser.bind(this);

    this.state = {
      parkingLotsInfo: [],
      selectedItem: null,
      user: null,
    };
  }

  componentDidMount() {
    // static test
    // this.setState({
    //   parkingLotsInfo: TEST_PARKING_LOT_LIST
    // }, this.sortParkingLotsByPrice());

    // production
    this.updateParkingLotsInfo();
  }

  sortParkingLotsByPrice() {
    let cloneParkingLotsInfo = this.state.parkingLotsInfo.slice();
    let sortedData = cloneParkingLotsInfo.sort((first, second) => {
      if (first["unitPrice"] < second["unitPrice"]) {
        return 1;
      }
      return (first["unitPrice"] > second["unitPrice"]) ? -1 : 0;
    });

    this.setState({
      parkingLotsInfo: sortedData,
    });
  }

  sortParkingLotsByAvailable() {
    let cloneParkingLotsInfo = this.state.parkingLotsInfo.slice();
    let sortedData = cloneParkingLotsInfo.sort((first, second) => {
      return first["availableCount"] - second["availableCount"];
    });

    this.setState({
      parkingLotsInfo: sortedData,
    });
  }

  updateParkingLotsInfo() {
    axios.get(BACKEND_HOST_URL + PARKING_LOT_INFO_PATH).then((response) => {
      response.status === 200
        ? this.setState({
          parkingLotsInfo: response.data,
        })
        : console.log("Error, cannot get parking lots info");
    });
  }

  onListItemClicked(item) {
    this.setState({ selectedItem: item });
  }

  setUser(user) {
    this.setState({ user });
  }

  render() {
    return (
      <>
        <Row>
          <Col span={24}>
            <ParkingLotHomeHeaderContainer setUser={this.setUser} />
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <ParkingLotHomeBodyContainer
              sortParkingLotsByPrice={this.sortParkingLotsByPrice}
              sortParkingLotsByAvailable={this.sortParkingLotsByAvailable}
              parkingLotsInfo={this.state.parkingLotsInfo}
              onListItemClicked={this.onListItemClicked}
            />
          </Col>
          <Col span={14}>
            <ParkingLotHomeMainContentContainer
              selectedParkingLot={this.state.selectedItem}
              user={this.state.user}
            />
          </Col>
        </Row>
      </>
    );
  }
}
