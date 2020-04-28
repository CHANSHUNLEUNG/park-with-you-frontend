import React, { Component } from "react";
import "./ParkingLotHomeHeader.css";
import sha256 from "sha256";
import { Button, Modal, Input, message } from "antd";
import axios from "axios";
import { BACKEND_HOST_URL , UPDATE_USER_INFO, CUSTOMER_INFO_PATH} from "../Constants/Constant";

export default class ParkingLotHomeUserInfo extends Component {
  constructor(props) {
    super(props);

    this.updateAccountInfo = this.updateAccountInfo.bind(this);
    this.closeUpdateInfoModal = this.closeUpdateInfoModal.bind(this);
    this.getUsernameInput = this.getUsernameInput.bind(this);
    this.getPasswordInput = this.getPasswordInput.bind(this);
    this.getBankAccount = this.getBankAccount.bind(this);
    this.getConfirmPasswordInput = this.getConfirmPasswordInput.bind(this);
    this.onUpdateAccountInfo = this.onUpdateAccountInfo.bind(this);

    this.state = {
      updateInfoModalVisible: false,
      updatedUserInfo: {},
      newBankAccountInfo: "",
      confirmPassword: "",
      newPassword: "",
      newUserName: "",
    };
  }

  handleCancel = () => {
    this.props.closeUserInfoModal();
  };

  updateAccountInfo() {
    this.props.closeUserInfoModal();
    this.setState({
      updateInfoModalVisible: true,
    });
  }

  closeUpdateInfoModal() {
    this.setState((prevState) => {
      return {
        updateInfoModalVisible: !prevState.updateInfoModalVisible,
      };
    });
  }

  getUsernameInput(event) {
    let userNameString = event.target.value.trim();
    this.setState({
      newUserName: userNameString,
    });
  }

  getPasswordInput(event) {
    let passwordInput = event.target.value.trim();
    this.setState({
      newPassword: passwordInput,
    });
  }

  getConfirmPasswordInput(event) {
    let confirmedPassword = event.target.value.trim();
    this.setState({
      confirmPassword: confirmedPassword,
    });
  }

  getBankAccount(event) {
    let bankAccount = event.target.value.trim();
    this.setState({
      newBankAccountInfo: bankAccount,
    });
  }

  onUpdateAccountInfo() {
    var regex = /^[0-9]{3}[-][0-9]{3}[-][0-9]{3}?$/;
    var bankAccountValid = regex.test(this.state.newBankAccountInfo);
    var updateUser = {}; 
    var anyFieldEmpty = this.state.newUserName ==="" || this.state.newPassword ==="" || this.state.newBankAccountInfo==="";
    var allInputValid = this.state.newPassword === this.state.confirmPassword &&
    bankAccountValid && (!anyFieldEmpty);
   
    console.log(updateUser);
    if (anyFieldEmpty) {
      message.info("All fields should not be empty. ");
    }
    if (this.state.newPassword !== this.state.confirmPassword) {
      message.info("please confirm your password again. ");
    }
    if (!bankAccountValid) {
      message.info("please input a valid bank account. ");
    }
    if (allInputValid) {
      updateUser = {
        id: this.props.user.id,
        name: this.state.newUserName,
        password: sha256(this.state.newPassword),
        bankAccount: this.state.newBankAccountInfo,
      };
      this.setState({
        updatedUserInfo: updateUser,
        newBankAccountInfo: "",
        confirmPassword: "",
        newPassword: "",
        newUserName: "",
      }); 
      this.saveUpdatedInfoToDatabase(updateUser);
    }
    console.log(updateUser);
  }

  saveUpdatedInfoToDatabase(updatedUserInfo) {
    console.log("hi there")
    var updateInfoLink =BACKEND_HOST_URL + CUSTOMER_INFO_PATH + "/" + updatedUserInfo.id + UPDATE_USER_INFO
    axios
      .put(updateInfoLink, updatedUserInfo)
      .then((response) => {
        if (response.status === 200) {
          message.info("updated account information successfully. ");
          this.props.setUser(updatedUserInfo)
          this.closeUpdateInfoModal();

        }
      })
      .catch(() => {
        console.log("Error, cannot updat customer info");
      });
  }

  render() {
    return (
      <div>
        <Modal
          destroyOnClose={true}
          visible={this.props.userInfoModalVisible ? true : false}
          title="User Information"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="update" onClick={this.updateAccountInfo}>
              Update Account Info
            </Button>,
          ]}
        >
          user ID : {this.props.user.id}
          <br />
          Name : {this.props.user.name}
          <br />
          Bank Account : {this.props.user.bankAccount}
          <br />
        </Modal>
        <Modal
          destroyOnClose={true}
          visible={this.state.updateInfoModalVisible ? true : false}
          title="Update Account Information"
          onOk={this.closeUpdateInfoModal}
          onCancel={this.closeUpdateInfoModal}
          footer={[
            <Button key="back" onClick={this.closeUpdateInfoModal}>
              Return
            </Button>,
            <Button key="update" onClick={this.onUpdateAccountInfo}>
              Submit
            </Button>,
          ]}
        >
          <Input
            size="large"
            placeholder="Username"
            onChange={this.getUsernameInput}
          />
          <br />
          <Input.Password
            size="large"
            placeholder="Password"
            onChange={this.getPasswordInput}
          />
          <Input.Password
            size="large"
            placeholder="Confirm Password"
            onChange={this.getConfirmPasswordInput}
          />
          <Input
            size="large"
            placeholder="bank account number: xxx-xxx-xxx"
            onChange={this.getBankAccount}
          />
          <br />
        </Modal>
      </div>
    );
  }
}
