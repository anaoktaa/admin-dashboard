import React from 'react';

import { BadgeStyle } from './custom-badges.styles';

import './custom-badges.styles.css';

const CustomBadges = ({ color, dot, outlined, number, size, children, className, ...props }) => {

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
        return (
            <div className={`custom-badge-wrapper ${className}`}>
                {children}
                <BadgeStyle className='badges-with-child-style' size={size} dot={dot} outlined={outlined} number={number} color={color} {...props}>
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