import React, { Component } from "react";
import logo from "../images/ParkWithYouLogo.png";
import cat from "../images/CAT.JPG";
import "./ParkingLotHomeHeader.css";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import {
  Row,
  Col,
  Layout,
  Button,
  Popconfirm,
  message,
  Modal,
  Input,
} from "antd";

const { Header } = Layout;

export default class ParkingLotHomeHeader extends Component {
  constructor(props) {
    super(props);

    this.confirmAction = this.confirmAction.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.showModal = this.showModal.bind(this);

    this.state = {
      isLoggedIn: true,
      loading: false,
      visible: false,
    };
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
    this.showModal();
    message.info("Signed in");
    this.setState({
      isLoggedIn: true,
    });
  }

  onLogout() {
    message.info("Logged Out.");
    this.setState({
      isLoggedIn: false,
    });
  }

  showModal() {
    this.setState({
      visible: true,
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

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

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
                    <Button shape="round" icon={<UserOutlined />} size="medium">
                      User Name
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
                    <Modal
                      visible={this.state.visible}
                      title="Login"
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                      footer={[
                        <Button key="back" onClick={this.handleCancel}>
                          Return
                        </Button>,
                        <Button
                          key="submit"
                          type="primary"
                          loading={this.state.loading}
                          onClick={this.handleOk}
                        >
                          Submit
                        </Button>,
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Username"
                        prefix={<UserOutlined />}
                      />
                      <Input.Password size="large" placeholder="Password" />
                    </Modal>
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
