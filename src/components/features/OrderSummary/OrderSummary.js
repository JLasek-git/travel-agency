import React from 'react';
import styles from './OrderSummary.module.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

class OrderSummary extends React.Component {
    render(){
        return(
            <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(this.props.tripCost, this.props.options))}</strong></h2>
        )
    }
}

OrderSummary.propTypes = {
    options: PropTypes.object,
}
export default OrderSummary;