import React, { Component } from "react";
import "./ParkingLotHomeHeader.css";
import { UserOutlined } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";

export default class ParkingLotHomeRegister extends Component {
  constructor(props) {
    super(props);
    this.getNewUserNameInput = this.getNewUserNameInput.bind(this);
    this.getNewUserPasswordInput = this.getNewUserPasswordInput.bind(this);
    this.getNewBankAccountInput = this.getNewBankAccountInput.bind(this);
    this.state = {
      loading: false,
      newUsernameInput: "",
      newPasswordInput: "",
      newBankAccountInput: "",
    };
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  handleCancel = () => {
    this.props.closeRegisterModal();
  };

  getNewUserNameInput(event) {
    let userNameString = event.target.value.trim();
    console.log(userNameString);
    this.setState({
      newUsernameInput: userNameString,
    });
  }

  getNewUserPasswordInput(event) {
    let userPasswordString = event.target.value.trim();
    console.log(userPasswordString);
    this.setState({
      newPasswordInput: userPasswordString,
    });
  }

  getNewBankAccountInput(event) {
    let userBankAccountString = event.target.value.trim();
    console.log(userBankAccountString);
    this.setState({
      newBankAccountInput: userBankAccountString,
    });
  }

  render() {
    return (
      <div>
        <Modal
          destroyOnClose={true}
          visible={this.props.registerModalVisible ? true : false}
          title="Registration"
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
              Register
            </Button>,
          ]}
        >
          <Input
            size="large"
            placeholder="Username"
            onChange={this.getNewUserNameInput}
            prefix={<UserOutlined />}
          />
          <Input.Password
            size="large"
            placeholder="Password"
            onChange={this.getNewUserPasswordInput}
          />
          <Input
            size="large"
            placeholder="Bank Account Number"
            onChange={this.getNewBankAccountInput}
          />
        </Modal>
      </div>
    );
  }
}
