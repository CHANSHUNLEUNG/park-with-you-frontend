import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import ParkingLotHomeBodyContainer from './ParkingLotHomeBodyContainer'
import ParkingLotHomeHeaderContainer from './ParkingLotHomeHeaderContainer'


export default class ParkingLotHomeContainer extends Component {
    render() {
        return (
            <>
                
              <Row>

                    <Col span={24}>
                        <ParkingLotHomeHeaderContainer />
                    </Col>

                    <Col span={24}>
                        <ParkingLotHomeBodyContainer />
                    </Col>

                </Row>
            </>
        )
    }
}
