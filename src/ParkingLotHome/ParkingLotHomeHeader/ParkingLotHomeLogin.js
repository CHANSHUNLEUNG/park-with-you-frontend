import React, { Component } from "react";
import "./ParkingLotHomeHeader.css";
import { UserOutlined } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";

const FIRST_ELEMENT = 0;

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
    this.props.confirmLogin(this.checkIsUser());
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
    this.setState({
      passwordInput: event.target.value.trim(),
    });
  }

  checkIsUser() {
    const customers = this.props.customerList;
    const userNameString = this.state.usernameInput;
    var isUser = false;
    var matchedUsername = customers.filter(
      (customer) => customer.name === this.state.usernameInput
    );
    var matchedUser = matchedUsername.filter(
      (customer) => customer.password === this.state.passwordInput
    );
    if (matchedUser.length > 0) {
      isUser = true;
      this.props.setUserId(matchedUser[FIRST_ELEMENT].id);
      this.props.setUser(matchedUser[FIRST_ELEMENT]);
      this.props.showUserName(userNameString);
    }
    return isUser;
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
