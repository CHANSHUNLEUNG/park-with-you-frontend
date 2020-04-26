import React, { Component } from "react";
import "./ParkingLotHomeHeader.css";
import { UserOutlined } from "@ant-design/icons";
//import sha256 from "sha256";
import { Button, Modal, Input } from "antd";
import axios from "axios";
import { BACKEND_HOST_URL ,CUSTOMER_INFO_PATH} from "../Constants/Constant";

export default class ParkingLotHomeLogin extends Component {
  constructor(props) {
    super(props);

    this.getUsernameInput = this.getUsernameInput.bind(this);
    this.getPasswordInput = this.getPasswordInput.bind(this);
    this.checkIsUser = this.checkIsUser.bind(this);

    this.state = {
      loading: false,
      usernameInput: "",
      passwordInput: "",
    };
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
    this.checkIsUser();
  };

  handleCancel = () => {
    this.props.closeLoginModal();
  };

  getUsernameInput(event) {
    let userNameString = event.target.value.trim();
    this.setState({
      usernameInput: userNameString,
    });
  }

  getPasswordInput(event) {
    //let passwordInputHash = sha256(event.target.value.trim());
    this.setState({
      passwordInput: event.target.value.trim(),
    });
  }

  checkIsUser() {
    const BACK_END_USER_LOGIN_URL =
      BACKEND_HOST_URL + CUSTOMER_INFO_PATH +"/" + this.state.usernameInput + "/login";
    const passwordRequest = {
      password: this.state.passwordInput,
    };
    axios
      .post(BACK_END_USER_LOGIN_URL, passwordRequest)
      .then((response) => {
        if (response.status === 200) {
          this.props.confirmLogin();
          this.props.showUserName(this.state.usernameInput);
        } 
      })
      .catch(() => {
        this.props.failLogin();
      });
  }

  render() {
    return (
      <div>
        <Modal
          destroyOnClose={true}
          visible={this.props.LoginModalvisible ? true : false}
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
            onChange={this.getUsernameInput}
            prefix={<UserOutlined />}
          />
          <Input.Password
            size="large"
            placeholder="Password"
            onChange={this.getPasswordInput}
          />
        </Modal>
      </div>
    );
  }
}
