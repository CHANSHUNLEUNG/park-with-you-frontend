import React, { Component } from 'react'
import axios from 'axios';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import ParkingLotMainHeader from '../ParkingLotMain/ParkingLotMainHeader';
import ParkingLotMainList from '../ParkingLotMain/ParkingLotMainList';
import ParkingLotMainListHeader from '../ParkingLotMain/ParkingLotMainListHeader';

export default class ParkingLotMain extends Component {
    render() {
        return (
            <>
                <Row>

                    <Col span={24}>
                                <ParkingLotMainHeader />
                    </Col>

                    <Col span={24}>
                        <Row gutter={[16, 50]} justify="center">
                            <Col span={10}>
                                <ParkingLotMainList />
                            </Col>
                        </Row>
                    </Col>

                    <Col span={24}>
                        <Row justify="center">
                            <Col span={10}>
                                <ParkingLotMainListHeader />
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </>
        )
    }
}
