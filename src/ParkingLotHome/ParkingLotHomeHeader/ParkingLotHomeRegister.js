import React, { Component } from "react";
import "./ParkingLotHomeHeader.css";
import { UserOutlined } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";
import sha256 from "sha256";
import axios from "axios";
import { BACKEND_HOST_URL ,CUSTOMER_INFO_PATH} from "../Constants/Constant";

export default class ParkingLotHomeRegister extends Component {
  constructor(props) {
    super(props);
    this.getNewUserNameInput = this.getNewUserNameInput.bind(this);
    this.getNewUserPasswordInput = this.getNewUserPasswordInput.bind(this);
    this.getNewBankAccountInput = this.getNewBankAccountInput.bind(this);
    this.checkIfNotExist = this.checkIfNotExist.bind(this);
    this.getAccountName = this.getAccountName.bind(this);
    this.state = {
      loading: false,
      newUsernameInput: "",
      newPasswordInput: "",
      newBankAccountInput: "",
      accountNameList: [],
    };
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
    this.checkIfNotExist();
    this.createUser();
  };

  handleCancel = () => {
    this.props.closeRegisterModal();
  };

  getNewUserNameInput(event) {
    let userNameString = event.target.value.trim();
    this.setState({
      newUsernameInput: userNameString,
    });
  }

  getNewUserPasswordInput(event) {
    let userPasswordStringHash =  sha256(event.target.value.trim());
    this.setState({
      newPasswordInput: userPasswordStringHash,
    });
  }

  getNewBankAccountInput(event) {
    let userBankAccountString = event.target.value.trim();
    this.setState({
      newBankAccountInput: userBankAccountString,
    });
  }


   getAccountName(){
    const BACK_END_CREATE_USER_URL = BACKEND_HOST_URL + CUSTOMER_INFO_PATH;
    axios.get(BACK_END_CREATE_USER_URL).then(response => {
      this.setState({
      accountNameList: response.data,
     })
      });
   }

   componentDidMount() {
    this.getAccountName();
  }

   checkIfNotExist(){
    for(let index = 0; index< this.state.accountNameList.length; index++){
      if(this.state.newUsernameInput === this.state.accountNameList[index]){
      return false;
      }
    }
    return true;
   }

   createUser(){
    
    const BACK_END_CREATE_USER_URL = BACKEND_HOST_URL + CUSTOMER_INFO_PATH;
     if(this.state.newUsernameInput === "" ||  this.state.newPasswordInput === "" || this.state.newBankAccountInput === ""){
        this.props.registerFailedAsInappropriateInput();
     }
     else if(this.checkIfNotExist() === false){
       this.props.registerFailedAsUserExists();
     }
     else{
     const createUserRequest = {
      name: this.state.newUsernameInput,
      password: this.state.newPasswordInput,
      bankAccount: this.state.newBankAccountInput
    };
    axios
      .post(BACK_END_CREATE_USER_URL, createUserRequest)
      .then((response) => {
        if (response.status === 200) {
          this.props.registerSuccess(this.state.newUsernameInput);
        } 
      });
    }
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
