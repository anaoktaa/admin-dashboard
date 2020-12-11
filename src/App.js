import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import 'antd/dist/antd.less';
import './ant-design.styles.css';
import './App.css';

import Routing from './routing';

const App = ({ location }) => {
    const [ currentLocation, setCurrentLocation ] = useState(null); 

    useEffect(() => {
        const handleScrollTop = () => {
            if (currentLocation !== location) {
                setCurrentLocation(location)
                window.scrollTo(0, 0);
            }
        }
        handleScrollTop();
    }, [location]);

    return (
        <div className='app'>
            <Routing/>
        </div>
    )
};


export default (withRouter(App));