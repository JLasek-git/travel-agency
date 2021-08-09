import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};
class OrderForm extends React.Component {
  render() {
    return (
      <Row>
        {pricing.map((option) => (
          <Col md={4} key={option.id}>
            <OrderOption
              currentValue={this.props.options[option.id]}
              setOrderOption={this.props.setOrderOption}
              {...option}
            />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary
            tripCost={this.props.tripCost}
            options={this.props.options}
          />
        </Col>
        <Button onClick={() => sendOrder(this.props.options, this.props.tripCost)}>Order now!</Button>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripCost: PropTypes.number,
};

export default OrderForm;
