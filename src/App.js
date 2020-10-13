import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import 'antd/dist/antd.less';
import './ant-design.styles.css';
import './App.css';

import SigninPage from './pages/signin/signin.component';
import SigninBoxedPage from './pages/signin-boxed/signin-boxed.component';
import SignupPage from './pages/signup/signup.component';
import SignupBoxed from './pages/signup-boxed/signun-boxed.component';
import ForgotPassword from './pages/forgot-password/forgot-password.component';
import ForgotPasswordBoxed from './pages/forgot-password-boxed/forgot-password-boxed.component';
import ElementButtons from './pages/element-buttons/element-buttons.component';
import ElementCards from './pages/element-cards/element-cards.component';

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
                <div className='app-body-container'>
                    <ElementCards/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer,
});

export default connect(mapStateToProps)(App);