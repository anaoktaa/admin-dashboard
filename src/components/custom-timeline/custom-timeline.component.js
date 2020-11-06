import React from 'react';

const CustomTimeline = ({ size, children, ...props }) => {
    const childrenWithProps = React.Children.map(children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        const props = { size };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });
    return (
        <div className='flex-column' {...props}>
            {childrenWithProps}
        </div>
    )
};


export default CustomTimeline;