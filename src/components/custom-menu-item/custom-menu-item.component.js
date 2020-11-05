import React from 'react';

import { CustomMenuItemStyled } from './custom-menu-item.styles';

const CustomMenuItem = ({ children, ...props }) => {
    return (
        <CustomMenuItemStyled {...props}>
            {children}
        </CustomMenuItemStyled>
    )
};

export default CustomMenuItem;