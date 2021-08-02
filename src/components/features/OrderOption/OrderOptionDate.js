import React from 'react';
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const OrderOptionDate = ({currentValue, setOptionValue}) => (
    <DatePicker
        value={currentValue}
        selected={currentValue}
        onSelect={(date) => setOptionValue(date)}
        placeholderText={'Choose date'}
    />
);

OrderOptionDate.propTypes = {
    currentValue: PropTypes.any,
    setOptionValue: PropTypes.func,
  };

export default OrderOptionDate;