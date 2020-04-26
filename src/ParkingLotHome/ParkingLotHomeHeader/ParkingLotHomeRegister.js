import React, { Component } from "react";
import "./ParkingLotHomeHeader.css";
import { UserOutlined } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";


export default class ParkingLotHomeRegister extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             loading:false,
        }
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
            prefix={<UserOutlined />}
          />
          <Input.Password
            size="large"
            placeholder="Password"
          />
            <Input
            size="large"
            placeholder="Bank Account Number"
          />
        </Modal>
                
            </div>
        )
    }
}
