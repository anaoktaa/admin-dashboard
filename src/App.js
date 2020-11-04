import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import 'antd/dist/antd.less';
import './ant-design.styles.css';
import './App.css';

import Routing from './routing';

import OutsideAlerter from './components/outside-wrapper/outside-wrapper.component';
import CustomHeader from './components/custom-header/custom-header.component';
import CustomDrawer from './components/custom-drawer/custom-drawer.component';
import FloatingMenuHeader from './components/floating-menu-header/floating-menu-header.component';
import CustomBreadcrumb from './components/custom-breadcrumb/custom-breadcrumb.component';
import CustomTabs from './components/custom-tabs/custom-tabs.component';

import { selectFoldDrawer } from './redux/application/application.selectors';

const App = ({ foldDrawer, location }) => {
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
            <CustomDrawer />
            <CustomHeader/>
            <FloatingMenuHeader/>
            <div className={`content-container ${foldDrawer ? 'content-fold-close' : 'content-fold-open'}`}>
                <CustomBreadcrumb/>
                <div className='app-body-container'>
                    {/* <OutsideAlerter>
                        <div style={{backgroundColor: 'red'}}>
                    <h1>adasuhdjkahsdk</h1>
                    <button>jsahdkgasjdhgjhgas</button>
                        </div>
                    </OutsideAlerter> */}
                    <Routing/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer,
});

export default connect(mapStateToProps)(withRouter(App));