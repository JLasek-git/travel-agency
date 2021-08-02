import React from 'react';
import styles from './OrderOption.module.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDate from './OrderOptionDate';
import OrderOptionText from './OrderOptionText';

const optionTypes = {
    dropdown: OrderOptionDropdown,
    icons: OrderOptionIcons,
    number: OrderOptionNumber,
    checkboxes: OrderOptionCheckboxes,
    date: OrderOptionDate,
    text: OrderOptionText,
};

const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {
    const OptionComponent = optionTypes[type];
    if(!OptionComponent){
        return null;
    } else {
        return (
            <div className={styles.component}>
                <h3 className={styles.title}>
                    {name}
                </h3>
                <OptionComponent
                    {...otherProps}
                    setOptionValue = {value => setOrderOption({[id]: value})}
                />
            </div>
        );
    }
};


OrderOption.propTypes = {
    option: PropTypes.object,
}


export default OrderOption;