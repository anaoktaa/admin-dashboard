import React from 'react';

import { CustomButtonStyled } from './custom-button.styles';

import './custom-button.styles.css';

const CustomButton = ({ variant, color, className, children, pill, square, shadow, icon, block, iconPosition, iconType, ...props }) => {
    if (icon) {
        return (
            <CustomButtonStyled 
                shadow={shadow}
                pill={pill} square={square}
                variant={variant}
                color={color}
                className={className} 
                block={block}
                icon={icon}
                iconType={iconType}
                {...props}>
                <div className={`${iconType === 'vertical' ? 'custom-button-icon-container-vertical' : 'custom-button-icon-container'}`}>
                    {
                        !iconPosition || iconPosition === 'left'?
                        <span className={`
                            ${children ? 'icon-span-container': 'icon-span-only-container'}
                            ${iconType === 'vertical' ? 'icon-block' : ''}
                            `
                        }>
                            {icon}</span>
                        :null
                    }                 
                    {children}
                    {
                        iconPosition && iconPosition === 'right'?
                        <span className={`
                            ${children ? 'icon-span-container': 'icon-span-only-container'}
                            ${iconType === 'vertical' ? 'icon-block' : ''}
                            `
                        }>{icon}</span>
                        :null
                    } 
                </div>
            </CustomButtonStyled>
        )
    }
    else {
        return (
            <CustomButtonStyled
                shadow={shadow}
                pill={pill}
                square={square}
                variant={variant}
                color={color} 
                className={className}
                block={block}
                {...props}>
                {children}
            </CustomButtonStyled>
        )
    }
};

export default CustomButton;