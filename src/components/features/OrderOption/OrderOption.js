import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';

const OrderOption = (option) => (
    <div className={styles.component}>
        <h3 className={styles.title}>
            {option.name}
        </h3>
    </div>
)

OrderOption.propTypes = {
    option: PropTypes.object,
}


export default OrderOption;