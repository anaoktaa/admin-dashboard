import React from 'react';

const onClickOutside = (ref, callback, name) => {
    
    React.useEffect(() => {
      const handleClick = e => {
        if (!ref.current || ref.current.contains(e.target)) {
          return;
        }
        callback(name);
      };

      document.addEventListener('click', handleClick, true);
      return () => {
        document.removeEventListener('click', handleClick, true);
      };
    });
};

export default onClickOutside;