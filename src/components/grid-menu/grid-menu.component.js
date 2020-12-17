import React from 'react';
import { Button } from 'antd';

import { RocketOutlined, FundProjectionScreenOutlined, SettingOutlined,
         ReconciliationOutlined, SafetyCertificateOutlined, PhoneOutlined } from '@ant-design/icons';
         
import './grid-menu.styles.css';

const GridMenu = ({ show }) => {
    return (
        <div className={`floating-menu card-container header-grid-menu ${show? 'floating-menu-show' : 'floating-menu-close'}`}>
            <div className='card-header-container header-grid-menu-header'>
                <div className='card-header-overlay header-grid-menu-overlay'>
                    <p className='card-header-title'>Grid Dashboard</p>
                    <p className='card-header-desc'>Easy grid navigation inside dropdowns</p>
                </div>
            </div>
           <div className='header-grid-menu-body'>
                <div className='header-grid-menu-wrapper'>
                    <div className='grid-menu-container'>
                        <RocketOutlined className='header-grid-menu-icon' />
                        <p className='header-grid-menu-text'>Automation</p>
                    </div>
                    <div className='grid-menu-container'>
                        <FundProjectionScreenOutlined className='header-grid-menu-icon' />
                        <p className='header-grid-menu-text'>Reports</p>
                    </div>
                    <div className='grid-menu-container'>
                        <SettingOutlined className='header-grid-menu-icon'/>
                        <p className='header-grid-menu-text'>Settings</p>
                    </div>
                </div>
                <div className='header-grid-menu-wrapper'>
                    <div className='grid-menu-container'>
                        <ReconciliationOutlined className='header-grid-menu-icon'/>
                        <p className='header-grid-menu-text'>Content</p>
                    </div>
                    <div className='grid-menu-container'>
                        <SafetyCertificateOutlined className='header-grid-menu-icon'/>
                        <p className='header-grid-menu-text'>Activity</p>
                    </div>
                    <div className='grid-menu-container'>
                        <PhoneOutlined className='header-grid-menu-icon'/>
                        <p className='header-grid-menu-text'>Contact</p>
                    </div>
                </div>

                <div className='grid-menu-button-container'>
                    <Button type="primary">Follow Up</Button>
                </div>
           </div>
        </div>
    )
};

export default GridMenu;