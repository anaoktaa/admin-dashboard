import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import 'antd/dist/antd.less';
import './ant-design.styles.css';
import './App.css';

import Routing from './routing';
import ComponentOnlyPathList from 'Data/component-only-path-list.data';
import { selectFoldDrawer } from 'Redux_Component/application/application.selectors';

import CustomBreadcrumb from 'Components/custom-breadcrumb/custom-breadcrumb.component';
import CustomHeader from 'Components/custom-header/custom-header.component';
import CustomDrawer from 'Components/custom-drawer/custom-drawer.component';
import FloatingMenuHeader from 'Components/floating-menu-header/floating-menu-header.component';

const App = ({ location, foldDrawer, ...props }) => {

    const [ currentLocation, setCurrentLocation ] = useState(null); 
    const  [ showComponentOnly, setShowComponentOnly ] = useState(false);
    useEffect(() => {
        const showDrawerHeaderOthers = () => {
            const found = ComponentOnlyPathList[location.pathname];
            setShowComponentOnly(found);
        }
        showDrawerHeaderOthers();
    }, [location])

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
            {
                !showComponentOnly?
                <>
                    <CustomDrawer />
                    <CustomHeader/>
                    <FloatingMenuHeader/>
                </>
                :
                null
            }         
            <div className={`${showComponentOnly ? '' : `content-container ${foldDrawer || !showComponentOnly ? 'content-fold-close' : 'content-fold-open'}` }`}>
                <CustomBreadcrumb/>
                <div className={`${!showComponentOnly ? 'app-body-container' : 'app-body-container-no-padding'}`}>
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