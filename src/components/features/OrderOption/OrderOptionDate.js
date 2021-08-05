import React from 'react';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <div>
    <DatePicker
      value={currentValue}
      selected={currentValue}
      onChange={(date) => setOptionValue(date)}
      placeholderText={'Choose date'}
    />
  </div>
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;