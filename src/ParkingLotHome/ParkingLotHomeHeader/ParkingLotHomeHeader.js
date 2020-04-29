import React, { Component } from "react";
import logo from "../images/ParkWithYouLogo.png";
import cat from "../images/CAT.JPG";
import userIcon from "../images/userIcon.png";
import "./ParkingLotHomeHeader.css";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Row, Col, Layout, Button, Popconfirm, message, Badge } from "antd";
import { USER_NAME_INIT_STATE } from "../Constants/Constant";
import ParkingLotHomeLogin from "./ParkingLotHomeLogin";
import ParkingLotHomeUserInfo from "./ParkingLotHomeUserInfo";
import ParkingLotHomeRegister from "./ParkingLotHomeRegister";
import ParkingLotHomeOrderDropdown from "./ParkingLotHomeOrderDropdown";

const { Header } = Layout;

export default class ParkingLotHomeHeader extends Component {
  constructor(props) {
    super(props);

    this.confirmAction = this.confirmAction.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.showLoginModal = this.showLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.closeUserInfoModal = this.closeUserInfoModal.bind(this);
    this.closeRegisterModal = this.closeRegisterModal.bind(this);
    this.confirmLogin = this.confirmLogin.bind(this);
    this.failLogin = this.failLogin.bind(this);
    this.showUserName = this.showUserName.bind(this);
    this.checkLoginStatus = this.checkLoginStatus.bind(this);
    this.setUser = this.setUser.bind(this);
    this.registerFailedAsUserExists = this.registerFailedAsUserExists.bind(this);
    this.registerFailedAsInappropriateInput = this.registerFailedAsInappropriateInput.bind(this);
    this.registerSuccess = this.registerSuccess.bind(this);

    this.state = {
      isLoggedIn: false,
      LoginModalvisible: false,
      registerModalVisible: false,
      userInfoModalVisible: false,
      userId: 0,
      userName: USER_NAME_INIT_STATE,
      user:[],
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
    this.props.setUser(null);
    this.clearUserName();
    window.location.reload();
  }

  showLoginModal() {
    this.setState({
      LoginModalvisible: true,
    });
  }

  closeUserInfoModal() {
    this.setState({
      userInfoModalVisible: false,
    })
  }

  closeLoginModal() {
    this.setState({
      LoginModalvisible: false,
    });
  }

  closeRegisterModal() {
    this.setState({
      registerModalVisible: false,
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

  registerSuccess(newUser){
    message.info("Create user "+ newUser +" successfuly");
    this.closeRegisterModal();
  }

  registerFailedAsUserExists(){
    message.info("Fail to create user, user name already exists");
  }

  registerFailedAsInappropriateInput(){
    message.info("Fail to create user, user name or password or bank account cannot be blank");
  }
  
  checkLoginStatus() {
    if (this.state.isLoggedIn === true) {
      this.setState({
        userInfoModalVisible: true,
      });
    }
    if (this.state.isLoggedIn === false) {
      this.setState({
        registerModalVisible: true,
      });
    }
  }

  setUser(user) {
    this.props.setUser(user);
    this.setState({
      user:user
    });
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
                    <Button shape="round" icon={<UserOutlined />} size="medium" onClick={this.checkLoginStatus}>
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
                      setUser={this.setUser}
                    />
                    <ParkingLotHomeUserInfo
                      userInfoModalVisible={this.state.userInfoModalVisible}
                      closeUserInfoModal={this.closeUserInfoModal}
                      user = {this.state.user}
                      setUser={this.setUser}
                    />
                    <ParkingLotHomeRegister
                      registerModalVisible={this.state.registerModalVisible}
                      closeRegisterModal={this.closeRegisterModal}
                      registerFailedAsInappropriateInput = {this.registerFailedAsInappropriateInput}
                      registerFailedAsUserExists = {this.registerFailedAsUserExists}
                      registerSuccess = {this.registerSuccess}
                    />
                    <div className="order-dropdown">
                      <Badge count={this.props.orders.length}>
                        <ParkingLotHomeOrderDropdown orders={this.props.orders} />
                      </Badge>
                    </div>
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
