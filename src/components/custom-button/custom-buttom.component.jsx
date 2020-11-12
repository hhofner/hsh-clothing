import React from 'react';

import './custom-buttom.styles.scss';

const CustomButtom = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        {children}
    </button>
)

export default CustomButtom;