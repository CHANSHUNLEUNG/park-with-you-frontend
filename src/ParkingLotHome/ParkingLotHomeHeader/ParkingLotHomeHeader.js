import React, { Component } from "react";
import logo from "../images/ParkWithYouLogo.png";
import cat from "../images/CAT.JPG";
import userIcon from "../images/userIcon.png";
import "./ParkingLotHomeHeader.css";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Row, Col, Layout, Button, Popconfirm, message } from "antd";
import { USER_NAME_INIT_STATE } from "../Constants/Constant";
import ParkingLotHomeLogin from "./ParkingLotHomeLogin";

const { Header } = Layout;

export default class ParkingLotHomeHeader extends Component {
  constructor(props) {
    super(props);

    this.confirmAction = this.confirmAction.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.confirmLogin = this.confirmLogin.bind(this);
    this.failLogin = this.failLogin.bind(this);
    this.showUserName = this.showUserName.bind(this);

    this.state = {
      isLoggedIn: false,
      LoginModalvisible: false,
      userId: 0,
      userName: USER_NAME_INIT_STATE,
    };
  }

  showUserName(userNameString) {
    this.setState({
      userName: userNameString,
    });
  }

  clearUserName() {
    this.setState({
      userName: USER_NAME_INIT_STATE,
    });
  }
  confirmAction() {
    if (this.state.isLoggedIn === true) {
      this.onLogout();
    }
    if (this.state.isLoggedIn === false) {
      this.onLogin();
    }
  }

  onLogin() {
    this.showLoginModal();
  }

  onLogout() {
    message.info("Logged Out.");
    this.setState({
      isLoggedIn: false,
    });
    this.clearUserName();
  }

  showLoginModal() {
    this.setState({
      LoginModalvisible: true,
    });
  }

  closeLoginModal() {
    this.setState({
      LoginModalvisible: false,
    });
  }

  handleConfirm() {
    var confirmMessage = "";
    if (this.state.isLoggedIn === true) {
      confirmMessage = "Confirm to Logout? ";
    }
    if (this.state.isLoggedIn === false) {
      confirmMessage = "Login now ?";
    }
    return confirmMessage;
  }

  confirmLogin() {
    message.info("Signed in");
    this.setState({
      isLoggedIn: true,
    });
    this.closeLoginModal();
  }

  failLogin() {
    message.info("Not registered or Wrong password! ");
  }
  render() {
    return (
      <div>
        <Layout>
          <Header className="homePageHeader">
            <div className="topleft">
              <Row gutter={16}>
                <Col className="gutter-row" span={8}>
                  <img src={logo} alt="" className="logo"></img>
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
                    <Button shape="round" icon={<UserOutlined />} size="medium">
                      {this.state.userName}
                    </Button>
                    <br />
                    <br />
                    <Popconfirm
                      placement="bottom"
                      title={this.handleConfirm}
                      onConfirm={this.confirmAction}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button
                        shape="round"
                        icon={<LogoutOutlined />}
                        size="medium"
                      >
                        {this.state.isLoggedIn ? "Sign out" : "Log in"}
                      </Button>
                    </Popconfirm>
                    <ParkingLotHomeLogin
                      LoginModalvisible={this.state.LoginModalvisible}
                      closeLoginModal={this.closeLoginModal}
                      confirmLogin={this.confirmLogin}
                      failLogin={this.failLogin}
                      showUserName={this.showUserName}
                    />
                  </div>
                </Col>
                <Col className="gutter-row" span={15}>
                  <img
                    src={this.state.isLoggedIn ? cat : userIcon}
                    className="userIcon"
                    alt=""
                  />
                </Col>
              </Row>
            </div>
          </Header>
        </Layout>
      </div>
    );
  }
}
