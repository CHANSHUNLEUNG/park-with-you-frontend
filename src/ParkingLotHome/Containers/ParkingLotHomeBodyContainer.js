import React, { Component } from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import ParkingLotHomeBodyHeader from '../ParkingLotHomeBody/ParkingLotHomeBodyHeader';
import ParkingLotHomeBodyList from '../ParkingLotHomeBody/ParkingLotHomeBodyList';
import ParkingLotHomeBodyListHeader from '../ParkingLotHomeBody/ParkingLotHomeBodyListHeader';

export default class ParkingLotHomeBodyContainer extends Component {
    render() {
        return (
            <>
                <Row>

                    <Col span={24}>
                        <Row gutter={[16, 50]} justify="center" >
                            <Col span={10}>
                            <ParkingLotHomeBodyHeader />
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Row gutter={[16, 50]} justify="center">
                            <Col span={10}>
                                <ParkingLotHomeBodyList />
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Row justify="center">
                            <Col span={10}>
                                <ParkingLotHomeBodyListHeader />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </>
        )
    }
}
