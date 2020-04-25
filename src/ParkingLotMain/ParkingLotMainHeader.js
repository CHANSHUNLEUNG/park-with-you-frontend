import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./images/parking_logo.png";
import cat from "./images/CAT.JPG";
import "./MainHeader.css";
import { UserOutlined, LogoutOutlined} from '@ant-design/icons';
import { Row, Col, Layout, Button } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const style = { background: "#0092ff", padding: "8px 0" };

export default class ParkingLotMainHeader extends Component {
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
