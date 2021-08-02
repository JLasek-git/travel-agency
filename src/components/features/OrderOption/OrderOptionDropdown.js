import React from 'react';
import styles from './OrderOption.module.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
    <select
        className={styles.dropdown}
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
    >
        {required ? '' : (
            <option key='null' value=''>---</option>
        )}
        {values.map(value => (
            <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
        ))}
    </select>
);

OrderOptionDropdown.propTypes = {
    values: PropTypes.array,
    required: PropTypes.bool,
    currentValue: PropTypes.string,
    setOptionValue: PropTypes.func,
    formatPrice: PropTypes.func,
};

export default OrderOptionDropdown;