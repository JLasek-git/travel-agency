import React from 'react';
import styles from './OrderOption.module.scss';
import Icon from '../../common/Icon/Icon';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';


const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => (
    <div
        className={styles.component}
    >
        {required ? '' : (
            <div className={currentValue === '' ? `${styles.icon} ${styles.iconActive}` : styles.icon}>
                <Icon name={'times-circle'}/>
                none
            </div>
        )}
        {values.map(value => (
            <div key={value.id} className={value.id === currentValue ? `${styles.icon} ${styles.iconActive}` : styles.icon} onClick={event => {setOptionValue(value.id)}}>
                <Icon name={value.icon} />
                {value.name}
                {formatPrice(value.price)}
            </div>
        ))}
    </div>
);


OrderOptionIcons.propTypes = {
    values: PropTypes.array,
    required: PropTypes.bool,
    currentValue: PropTypes.string,
    setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;