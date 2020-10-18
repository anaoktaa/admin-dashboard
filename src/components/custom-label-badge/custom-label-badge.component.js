import React from 'react';
import PropTypes from 'prop-types';

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

CustomLabelBadge.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'success', 'danger', 'info', 'alt', 'dark', 'light', 'link']),
    pill: PropTypes.bool,
    position: PropTypes.oneOf(['top', 'bottom']),
    link: PropTypes.bool,
    href: PropTypes.string,
    target: PropTypes.string
};


export default CustomLabelBadge;