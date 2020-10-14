import React from 'react';

import { BadgeStyle } from './custom-badges.styles';

import './custom-badges.styles.css';

const CustomBadges = ({ color, dot, outlined, number, size, children, position, className, ...props }) => {

    if (!children) {
        return (
            <BadgeStyle className={className} size={size} dot={dot} outlined={outlined} number={number} color={color} {...props}>
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
            classNameForBadge = 'badges-with-child-style';
        }

        return (
            <div className={`custom-badge-wrapper ${className}`}>
                {children}
                <BadgeStyle className={`${classNameForBadge}`} size={size} dot={dot} outlined={outlined} number={number} color={color} {...props}>
                    {
                        number?
                        number:
                        null
                    }
                </BadgeStyle>
            </div>
        )      
    }
 
};

export default CustomBadges;