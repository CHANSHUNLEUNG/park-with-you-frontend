import React, { Component } from 'react'
import 'antd/dist/antd.css';
import axios from 'axios';
import { Row, Col } from 'antd';
import ParkingLotHomeBodyContainer from './ParkingLotHomeBodyContainer'
import ParkingLotHomeHeaderContainer from './ParkingLotHomeHeaderContainer'
import { BACKEND_HOST_URL, PARKING_LOT_INFO_PATH, TEST_PARKING_LOT_LIST } from '../Constants/Constant';


export default class ParkingLotHomeContainer extends Component {
    constructor(props) {
        super(props)

        this.updateParkingLotsInfo = this.updateParkingLotsInfo.bind(this);
        this.sortParkingLotsByPrice = this.sortParkingLotsByPrice.bind(this);
        this.sortParkingLotsByAvailable = this.sortParkingLotsByAvailable.bind(this);

        this.state = {
            parkingLotsInfo: []
        }
    }

    componentDidMount() {
        // static test
        // this.setState({
        //     parkingLotsInfo: TEST_PARKING_LOT_LIST
        // }, this.sortParkingLotsByPrice());

        // production
        this.updateParkingLotsInfo();
    }

    sortParkingLotsByPrice() {
        let cloneParkingLotsInfo = this.state.parkingLotsInfo.slice();
        let sortedData = cloneParkingLotsInfo.sort((first, second) => {
            return first["unit_price"] - second["unit_price"];
        })

        this.setState({
            parkingLotsInfo: sortedData
        })
    }

    sortParkingLotsByAvailable() {
        let cloneParkingLotsInfo = this.state.parkingLotsInfo.slice();
        let sortedData = cloneParkingLotsInfo.sort((first, second) => {
            return first["available_count"] - second["available_count"];
        })

        this.setState({
            parkingLotsInfo: sortedData
        })
    }

    updateParkingLotsInfo() {
        axios.get(BACKEND_HOST_URL + PARKING_LOT_INFO_PATH).then(response => {
            (response.status === 200) ? this.setState({
                parkingLotsInfo: response.data
            })
                : console.log("Error, cannot get parking lots info");
        })
    }

    render() {
        return (
            <>

                <Row>

                    <Col span={24}>
                        <ParkingLotHomeHeaderContainer />
                    </Col>

                    <Col span={24}>
                        <ParkingLotHomeBodyContainer
                            sortParkingLotsByPrice={this.sortParkingLotsByPrice}
                            sortParkingLotsByAvailable={this.sortParkingLotsByAvailable}
                            parkingLotsInfo={this.state.parkingLotsInfo} />
                    </Col>

                </Row>
            </>
        )
    }
}
