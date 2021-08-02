import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing  from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

class OrderForm extends React.Component{
render(){
    return(
        <Row>
            {pricing.map(option => (
                <Col md={4} key={option.id}>
                    <OrderOption {...option} />
                </Col>
            ))}
            <Col xs={12}>
                <OrderSummary tripCost={this.props.tripCost} options={this.props.options}/>
            </Col>
        </Row>
    );
  }
};


OrderForm.propTypes = {
    options: PropTypes.object,
}

export default OrderForm;
