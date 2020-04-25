import React, { Component } from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import ParkingLotHomeBodyHeader from '../ParkingLotHomeBody/ParkingLotHomeBodyHeader';
import ParkingLotHomeBodyList from '../ParkingLotHomeBody/ParkingLotHomeBodyList';

export default class ParkingLotHomeBodyContainer extends Component {
    render() {
        return (
            <>
                <Row>

                    <Col span={24}>
                        <Row gutter={[16]} justify="center" >
                            <Col span={10}>
                                <ParkingLotHomeBodyHeader />
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Row gutter={[16, 50]} justify="center">
                            <Col span={10}>
                                <ParkingLotHomeBodyList
                                    sortParkingLotsByPrice={this.props.sortParkingLotsByPrice}
                                    parkingLotsInfo={this.props.parkingLotsInfo} />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </>
        )
    }
}
