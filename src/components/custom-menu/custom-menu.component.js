import React from 'react';

import { CustomMenuStyled } from './custom-menu.styles';

const CustomMenu = ({ pill, role, children, ...props }) => {
    const childrenWithProps = React.Children.map(children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        const props = { role, pill };
        if (React.isValidElement(child)) {
            if (child.type.name === 'CustomMenuItem') return React.cloneElement(child, props);
            return React.cloneElement(child);
        }
        return child;
    });
    console.log(childrenWithProps);
    return (
        <CustomMenuStyled {...props}>
            {childrenWithProps}
        </CustomMenuStyled>
    )
};

export default CustomMenu;