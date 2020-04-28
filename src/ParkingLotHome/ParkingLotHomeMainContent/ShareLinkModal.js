import React, { Component } from "react";
import { Button, Modal, message, Input } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import shareLinkApp from "../images/shareLinkApp.JPG";
import "./ParkingLotHomeMainContent.css";

export default class ShareLinkModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      host: window.location.host
    };
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
    message.info("Check your email to get the coupon now !");
  };

  handleCancel = () => {
    this.props.showShareLinkModal();
  };

  render() {
    return (
      <div>
        <Modal
          destroyOnClose={true}
          visible={this.props.shareLinkModalVisible ? true : false}
          title="Share our link now and get your coupon"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={this.state.loading}
              onClick={this.handleOk}
            >
              SHARE
            </Button>,
          ]}
        >
          <div style={{ marginBottom: 16 }}>
            <div>Direct Link</div>
            <br />
            <Input
              addonAfter={<CopyOutlined />}
              defaultValue={this.state.host + this.props.shareLink}
            />
          </div>
          <div>
              Share to <br /><br/>
            <img src={shareLinkApp} alt="" className="AppIcon" />
          </div>
        </Modal>
      </div>
    );
  }
}
