import React, { useEffect, useRef } from 'react';

const onClickOutside = Component => {
    const WrappedComponent = (props) => {

        const ref = useRef(null);

        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                // console.log('ini didalamm')
            }
            else {
                // console.log('ini diluar');
            }
        }

        useEffect(() => {
            document.addEventListener("click", handleClickOutside, true);
            return () => {
                document.removeEventListener("click", handleClickOutside, true);
            };
        });
    
        return (
            <Component ref={ref} {...props} />
        )
    }
  return WrappedComponent;
};

export default onClickOutside;