import React, { Component } from "react";
import logo from "../images/parking_logo.png";
import cat from "../images/CAT.JPG";
import "./ParkingLotHomeHeader.css";
import { UserOutlined, LogoutOutlined} from '@ant-design/icons';
import { Row, Col, Layout, Button } from "antd";

const { Header } = Layout;

export default class ParkingLotHomeHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Layout>
          <Header className="homePageHeader">
            <div className="topleft">
              <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                  <img src={logo} className="logo"></img>
                </Col>
                <Col className="gutter-row" span={15}>
                  <div className="slogan">
                    <br />
                    Park With You
                    <br />
                    Park?Park With You
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={16}>
                <Col className="gutter-row" span={15}>
                  <div className="topright">
                    <Button shape="round" icon={<UserOutlined/>} size = 'medium'>User Name</Button>
                    <br />
                    <br />
                    <Button shape="round" icon={<LogoutOutlined />} size = 'medium'>Sign Out</Button>
                  </div>
                </Col>
                <Col className="gutter-row" span={15}>
                  <img src={cat} className="userIcon" />
                </Col>
              </Row>
            </div>
          </Header>
        </Layout>
      </div>
    );
  }
}
