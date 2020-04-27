import React, { Component } from 'react'
import { Row, Col, Radio } from 'antd';
import { SORT_BY_NAME, SORT_BY_DISTANCE, SORT_BY_AVAILABLE, SORT_BY_PRICE } from '../Constants/Constant';

export default class ParkingLotHomeBodyListHeader extends Component {
    constructor(props) {
        super(props)

        this.handleSortMethodChange = this.handleSortMethodChange.bind(this);
        this.sortParkingLotsInfo = this.sortParkingLotsInfo.bind(this);
        this.state = {
            sortBy: SORT_BY_PRICE
        }
    }

    sortParkingLotsInfo(sortMethod) {
        if (sortMethod === SORT_BY_PRICE) {
            this.props.sortParkingLotsByPrice();
        }
        if (sortMethod === SORT_BY_AVAILABLE) {
            this.props.sortParkingLotsByAvailable();
        }
    }

    handleSortMethodChange(event) {
        const sortMethod = event.target.value;
        this.setState({
            sortBy: sortMethod
        }, this.sortParkingLotsInfo(sortMethod))
    }

    render() {
        return (
            <>
                <Row>

                    <Col>
                        <Radio.Group value={this.state.sortBy} onChange={this.handleSortMethodChange}>
                            <Radio.Button value={SORT_BY_NAME}>Name</Radio.Button>
                            <Radio.Button value={SORT_BY_DISTANCE}>Distance</Radio.Button>
                            <Radio.Button value={SORT_BY_AVAILABLE}>Available</Radio.Button>
                            <Radio.Button value={SORT_BY_PRICE}>Price</Radio.Button>
                        </Radio.Group>
                    </Col>

                </Row>
            </>
        )
    }
}
