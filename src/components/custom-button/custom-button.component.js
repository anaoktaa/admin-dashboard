import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonStyled } from './custom-button.styles';

import './custom-button.styles.css';

const CustomButton = ({ variant, color, className, children, pill, square, shadow, icon, 
                        block, iconPosition, iconType, size, wide, ...props }) => {
    if (icon) {
        return (
            <CustomButtonStyled 
                size={size}
                wide={wide}
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
                size={size}
                wide={wide}
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

CustomButton.propTypes = {
    variant : PropTypes.oneOf(['solid', 'outlined', 'outlined-2x', 'dashed', 'no-outlined']),
    color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success', 'danger', 'info', 'alt', 'dark', 'light', 'link']),
    pill: PropTypes.bool,
    square: PropTypes.bool,
    shadow: PropTypes.bool,
    block: PropTypes.bool,
    icon: PropTypes.element,
    iconType: PropTypes.oneOf(['horizontal', 'vertical']),
    iconPosition: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf(['large', 'normal', 'small']),
    wide: PropTypes.oneOf(['large', 'normal', 'small'])
};

CustomButton.defaultProps = {
    variant: 'no-outlined',
    color: 'primary',
    pill: false,
    square: false,
    shadow: false,
    block: false,
    size: 'normal',
    wide: 'normal'
};

export default CustomButton;