import React from 'react';
import PropTypes from 'prop-types';

import { BadgeStyle } from './custom-badges.styles';

import './custom-badges.styles.css';

const CustomBadges = ({ color, dot, number, size, children, position,
                        className, link, href, target, ...props }) => {

    if (!children) {
        return (
            <BadgeStyle className={className} size={size} dot={dot} number={number} color={color} {...props}>
                {
                    number?
                    number:
                    null
                }
            </BadgeStyle>
        )
    }
    else {
        let classNameForBadge = null;
        if (children.type.displayName === 'Avatar') {
            if (children.props.shape === 'circle') {
                classNameForBadge = position === 'bottom'? 'badges-with-avatar-circle-style-bottom' :'badges-with-avatar-circle-style';
            }
            else {
                classNameForBadge = position === 'bottom'? 'badges-with-avatar-square-style-bottom' : 'badges-with-avatar-square-style';
            }
        }
        else {
            if (children.props.iconType === 'vertical') {
                classNameForBadge = 'badges-with-child-style-grid-button';
            }
            else {
                classNameForBadge = 'badges-with-child-style';
            }
        }
        if (href) {
            return (
                <a href={href} target={target} className={`custom-badge-wrapper ${className}`}>
                    {children}
                    <BadgeStyle className={`${classNameForBadge}`} size={size} dot={dot} number={number} color={color} {...props}>
                        {
                            number?
                            number:
                            null
                        }
                    </BadgeStyle>
                </a>
            ) 
        }
        else {
            return (
                <div className={`${children.props.block ? 'custom-badge-grid-button-wrapper' : 'custom-badge-wrapper'} ${className}`}>
                    {children}
                    <BadgeStyle className={`${classNameForBadge}`} size={size} dot={dot} number={number} color={color} {...props}>
                        {
                            number?
                            number:
                            null
                        }
                    </BadgeStyle>
                </div>
            )
        }
    }
};

CustomBadges.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success', 'danger', 'info', 'alt', 'dark', 'light', 'link']),
    dot: PropTypes.bool,
    number: PropTypes.oneOfType([PropTypes.string,PropTypes.number,]),
    size:  PropTypes.oneOfType([PropTypes.string,PropTypes.number,]),
    position: PropTypes.oneOf(['top', 'bottom']),
    link: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string
};

export default CustomBadges;