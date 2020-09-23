import React from 'react';
import { Menu, Button } from 'antd';

import './setting-header.styles.css';
import '../../App.css';

const SettingHeader = ({ show }) => {
    return (
        <div className={`card-container header-settings-menu ${show? 'header-setting-menu-show' : 'header-setting-menu-hidden'}`}>
            <div className='card-header-container header-settings-menu-header'>
                <div className='card-header-overlay header-setting-menu-overlay'>
                    <p className='card-header-title'>Overview</p>
                    <p className='card-header-desc'>Dropdown menus for everyone</p>
                </div>
            </div>
            <div className='header-setting-menu-body'>
                <p className='capitalize-color keyframes'>Key Frames</p>
                <div className='setting-menu-container'>
                    <Menu>
                        <Menu.Item>
                            Service Calendar
                        </Menu.Item>
                        <Menu.Item>
                            Knowledge Base
                        </Menu.Item>
                        <Menu.Item>
                            Accounts
                        </Menu.Item>
                    </Menu>
                </div>
                <Button className='keyframes' type="primary" danger>Cancel</Button>
            </div>
        </div>
    )
};

export default SettingHeader;