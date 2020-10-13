import React from 'react';
import PropTypes from 'prop-types';

import './custom-tab-panel.styles.css';

const CustomTabPanel = ({ title, children, ...props }) => {
    return (
        <li {...props} content={children} className='tab-panel'>{title}</li>
    )
};

CustomTabPanel.propTypes = {
    'data-key': PropTypes.string.isRequired,
    'title': PropTypes.string.isRequired
};

export default CustomTabPanel;