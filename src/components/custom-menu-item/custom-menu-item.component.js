import React from 'react';

import { CustomMenuItemStyled } from './custom-menu-item.styles';

const CustomMenuItem = ({ active, activeColor, children, ...props }) => {
    return (
        <CustomMenuItemStyled active={active} activeColor={activeColor} {...props}>
            {children}
        </CustomMenuItemStyled>
    )
};

export default CustomMenuItem;