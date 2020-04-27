import React, { Component } from "react";
import "./ParkingLotHomeHeader.css";
import { Button, Modal } from "antd";

export default class ParkingLotHomeUserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleCancel = () => {
    this.props.closeUserInfoModal();
  };

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
            <Button key="update" onClick={this.handleCancel}>
              Update User Info
            </Button>,
          ]}
        >
          user ID : <br />
          Name : <br />
          Bank Account : <br />
        </Modal>
      </div>
    );
  }
}
