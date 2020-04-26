import React, { Component } from 'react'
import { Button } from 'antd';
import { BookFilled } from '@ant-design/icons';
import { List } from 'antd';

export default class ParkingLotHomeBodyListItem extends Component {
    render() {
        const { item } = this.props;
        const description = (
            <div>
                <div>
                    {item.address}
                </div>
                <div>&nbsp;</div>
                <div>
                    {"Price: $" + item.available_count + "/hour"}
                </div>
                <div>
                    {"Available: " + item.unit_price}
                </div>
            </div>
        );
        return (
            <>
                <List.Item.Meta
                    title={<a>{item.name}</a>}
                    description={description}
                />
                <Button type="primary"
                    shape="circle"
                    icon={<BookFilled />}
                />

            </>
        )
    }
}
