import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import 'antd/dist/antd.less';
import './ant-design.styles.css';
import './App.css';

import CustomHeader from './components/custom-header/custom-header.component';
import CustomDrawer from './components/custom-drawer/custom-drawer.component';
import FloatingMenuHeader from './components/floating-menu-header/floating-menu-header.component';
import CustomBreadcrumb from './components/custom-breadcrumb/custom-breadcrumb.component';
import CustomTabs from './components/custom-tabs/custom-tabs.component';

import { selectFoldDrawer } from './redux/application/application.selectors';

const App = ({ foldDrawer }) => {
    return (
        <div className='app'>
            <CustomDrawer />
            <CustomHeader/>
            <FloatingMenuHeader/>
            <div className={`content-container ${foldDrawer ? 'content-fold-close' : 'content-fold-open'}`}>
                <CustomBreadcrumb/>
                <CustomTabs/>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer,
});

export default connect(mapStateToProps)(App);