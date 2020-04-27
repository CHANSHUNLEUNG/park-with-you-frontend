import React, { Component } from 'react'
import { Dropdown, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ParkingLotHomeOrderDropdownList from './ParkingLotHomeOrderDropdownList';

export default class ParkingLotHomeOrderDropdown extends Component {
    render() {
        return (
            <>
                <Dropdown trigger="click" overlayClassName="order-dropdown-root"
                    overlay={<ParkingLotHomeOrderDropdownList />} placement="topCenter">
                    <Button className="order-button" shape="round" icon={<ShoppingCartOutlined />}>Order</Button>
                </Dropdown>
            </>
        )
    }
}
