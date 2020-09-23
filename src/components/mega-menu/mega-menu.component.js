import React from 'react';
import { Typography } from 'antd';

import { ContactsOutlined, ContainerOutlined, PictureOutlined, DashboardOutlined } from '@ant-design/icons';

import './mega-menu.styles.css';

const { Title } = Typography;

const MegaMenu = ({ show }) => {
    return (
        <div className={`mega-menu-container ${show? 'mmc-show' : 'mmc-hidden'}`}>
            <div className='mega-menu-tooltip'/>
            <div className='mega-menu-content'>
                <div className='mega-menu-overview'>
                    <Title level={5}>Overview</Title>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><ContactsOutlined className='mega-menu-icon' />Contacts</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><ContainerOutlined className='mega-menu-icon'/>Incidents</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><PictureOutlined className='mega-menu-icon'/>Companies</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'><DashboardOutlined className='mega-menu-icon'/>Dashboard</a>
                    </div>
                </div>
                <div className='mega-menu-overview'>
                    <Title level={5}>Favourites</Title>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Report Conversions</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Quick Start</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Users & Groups</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Properties</a>
                    </div>
                </div>
                <div className='mega-menu-overview'>
                    <Title level={5}>Sales & Marketing</Title>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Resource Groups</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Goal Metrics</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Campaign</a>
                    </div>
                    <div className='mega-menu-content-wrap'>
                        <a href='#'>Queues</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MegaMenu;