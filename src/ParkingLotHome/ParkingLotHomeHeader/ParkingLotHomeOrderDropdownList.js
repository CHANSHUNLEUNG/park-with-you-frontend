import React, { Component } from 'react'
import { Collapse } from 'antd';
import ParkingLotHomeOrderDropdownListItem from './ParkingLotHomeOrderDropdownListItem';
import { TEST_ORDER_LIST } from '../Constants/Constant';
const { Panel } = Collapse;



export default class ParkingLotHomeOrderDropdownList extends Component {
    render() {
        return (
            <Collapse defaultActiveKey={['1']}>
                {TEST_ORDER_LIST.map(order => {
                    return (<Panel header={order["parkingLotName"]} key={order["orderId"]}>
                        <ParkingLotHomeOrderDropdownListItem order={order} />
                    </Panel>);
                })}
            </Collapse>
        )
    }
}
