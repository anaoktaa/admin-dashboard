import React from 'react';

import { LabelBadge, LabelBadgeLink } from './custom-label-badge.styles';

const CustomLabelBadge = ({ color, children, pill, link, href, target, ...props }) => {
    if (link) {
        return (
            <LabelBadgeLink href={href} target={target} pill={pill} color={color} {...props}>
                {children}
            </LabelBadgeLink>
        )
    }
    else {
        return (
            <LabelBadge pill={pill} color={color} {...props}>
                {children}
            </LabelBadge>
        )
    }

};

export default CustomLabelBadge;