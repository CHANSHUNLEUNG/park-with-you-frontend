import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, Row, Col, Button } from 'antd'
import { SendOutlined } from "@ant-design/icons";

export default class ParkingLotDetails extends Component {
  static propTypes = {
    parkingLot: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.onNavigate = this.onNavigate.bind(this);
  
    this.state = {
       
    }
  }
  
  onNavigate() {
    const link = encodeURI(`https://www.google.com/maps/dir/?api=1&destination=${this.props.parkingLot.address}`);
    window.open(link, '_blank');
    
  }

  render() {
    const { parkingLot } = this.props
    return (
      <div>
        <Typography.Title style={{textAlign: "center"}}>{parkingLot.name}</Typography.Title>
        <Card>
          <Row>
            <Col span={20}>
              <p>Address: {parkingLot.address}</p>
              <p>Price per hour: {parkingLot.unitPrice}</p>
              <p>Current Available Place: {parkingLot.availableCount}</p>
            </Col>
            <Col span={4}>
              <Button onClick={this.onNavigate} type="primary" shape="circle" icon={<SendOutlined />} size="large" />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
