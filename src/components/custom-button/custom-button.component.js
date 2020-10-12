import React, { useEffect } from 'react';

import { CustomButtonStyled } from './custom-button.styles';

const CustomButton = ({ variant, color, className, children, ...props }) => {

    return (
        <CustomButtonStyled variant={variant} color={color} className={className} {...props}>
            {children}
        </CustomButtonStyled>
    )
};

export default CustomButton;