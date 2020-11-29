import React from 'react';
import PropTypes from 'prop-types';

import { ChartBoxGridContainer } from './chart-box-grid.styles';

const ChartBoxGrid = ({ children, col, showBorder, showBoxShadow, ...props }) => {
    let bgColor = null;
    let gap = 0;
    let totalChild = 0;
    React.Children.map(children, child => {
        totalChild = Number(totalChild)+1;

    });

    const childrenWithProps = React.Children.map(children, child => {
        const boxShadow = false;
        const borderRadius = child.type.name === 'ChartBoxVar3' ? true  : false;
        const border= true;
        const row = Math.ceil(totalChild/col);
        const width = col > 1 ?  '100%' : '100%';
        
        const props = { boxShadow, borderRadius, border, col, row, width, showBorder };
        if (React.isValidElement(child)) {
            if (child.type.name === 'ChartBoxVar3')  {
                bgColor = 'white';
                gap = '30px';
            }
            return React.cloneElement(child, props);
        }
        return child;
    });
    return (
        <ChartBoxGridContainer showBoxShadow={showBoxShadow} gap={gap} bgColor={bgColor} col={col} {...props}>
            {childrenWithProps}
        </ChartBoxGridContainer>
    )
};

export default ChartBoxGrid;

ChartBoxGrid.defaultProps = {
    showBoxShadow:  true,
};
