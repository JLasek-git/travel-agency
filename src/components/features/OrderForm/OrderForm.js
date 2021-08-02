import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

class OrderForm extends React.Component{
render(){
    return(
        <Row>
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
