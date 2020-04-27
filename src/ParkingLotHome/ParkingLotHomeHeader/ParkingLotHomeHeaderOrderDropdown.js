import React, { Component } from 'react'
import { Dropdown, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ParkingLotHomeHeaderOrderDropdownList from './ParkingLotHomeHeaderOrderDropdownList';

export default class ParkingLotHomeHeaderOrderDropdown extends Component {
    render() {
        return (
            <>
                <Dropdown trigger="click" overlay={<ParkingLotHomeHeaderOrderDropdownList />} placement="topCenter">
                    <Button className="order-button" shape="round" icon={<ShoppingCartOutlined />}>Order</Button>
                </Dropdown>
            </>
        )
    }
}
