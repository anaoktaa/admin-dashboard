import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import 'antd/dist/antd.less';
import './ant-design.styles.css';
import './App.css';

import { PieChartTwoTone, HomeOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import CustomHeader from './components/custom-header/custom-header.component';
import CustomDrawer from './components/custom-drawer/custom-drawer.component';
import FloatingMenuHeader from './components/floating-menu-header/floating-menu-header.component';

import { selectFoldDrawer } from './redux/application/application.selectors';

const { Link, Text } = Typography;

const App = ({ foldDrawer }) => {
    return (
        <div className='app'>
            <CustomDrawer />
            <CustomHeader/>
            <FloatingMenuHeader/>
            <div className={`content-container ${foldDrawer ? 'content-fold-close' : 'content-fold-open'}`}>
                <div className='app-theme-container'>
                    <div className='app-theme-icon-wrapper'>
                        <div className='bg-icon-gradient-ripple'>
                            <PieChartTwoTone twoToneColor="#9adec2" />
                        </div>
                    </div>
                    <div className='app-theme-text-container'>
                        <p className='app-theme-title-main'>Analytics Dashboard</p>
                        <Text type="secondary">
                            This dashboard was created as an example of the flexibility that ArchitectUI offers.
                        </Text>
                    </div>
                    <div className='app-theme-breadcrumb-container'>
                        <Link href="https://ant.design" target="_blank">
                            <HomeOutlined />
                        </Link>
                        <span className='slash-breadcrumb-link '> / </span>
                        <Link href="https://ant.design" target="_blank">
                            Dashboard
                        </Link>
                        <span className='slash-breadcrumb-link '> / </span>
                        <Text>
                            Example Breadcrumb
                        </Text>
                    </div>
                </div>        
        
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer,
});

export default connect(mapStateToProps)(App);