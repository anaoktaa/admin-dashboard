import React from 'react';

import './custom-tab-panel.styles.css';

const CustomTabPanel = ({ title, children, ...props }) => {
    return (
        <li {...props} className='tab-panel'>{title}</li>
    )
};

export default CustomTabPanel;