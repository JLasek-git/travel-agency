import React from 'react';

const OrderOptionText = ({setOptionValue}) => (
    <div>
        <input
            type="text"
            onChange={event => setOptionValue(event.currentTarget.value)}
        />

    </div>
);

export default OrderOptionText;