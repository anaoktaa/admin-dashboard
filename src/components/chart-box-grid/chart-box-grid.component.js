import React from 'react';

import { ChartBoxGridContainer } from './chart-box-grid.styles';

const ChartBoxGrid = ({ children, col, ...props }) => {
    let totalChild = 0;
    React.Children.map(children, child => {
        totalChild = Number(totalChild)+1;

    });

    const childrenWithProps = React.Children.map(children, child => {
        const boxShadow = false;
        const borderRadius = false;
        const border= true;
        const row = Math.ceil(totalChild/col);
        
        const props = { boxShadow, borderRadius, border, col, row };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });
    return (
        <ChartBoxGridContainer col={col} {...props}>
            {childrenWithProps}
        </ChartBoxGridContainer>
    )
};

export default ChartBoxGrid;