import React from 'react';
import { Avatar, Button } from 'antd';
import { MessageOutlined, TagOutlined } from '@ant-design/icons';

import './profile-header.styles.css';
import '../../App.css';

const ProfileHeader = ({ show }) => {
    return (
        <div className={`floating-menu card-container header-profile-menu ${show ? 'floating-menu-show' : 'floating-menu-close'}`}>
            <div className='card-header-container header-profile-menu-header'>
                <div className='card-header-overlay header-profile-menu-overlay'>
                    <Avatar size={40} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                    <div className='profile-desc-text-wrapper'>
                        <p className='profile-menu-name-text'>Ana Mariana</p>
                        <p className='profile-menu-position-text'>A short profile description</p>
                    </div>
                    <div className='profile-button-wrapper'>
                        <Button >Logout</Button>
                    </div>
                </div>
            </div>
            <div className='phc-body-container'>
                <p className='phc-main-title'>ACTIVITY</p>
                <div className='phc-content-menu'>
                    <p className='phc-content-menu-atr'>Chat</p>
                    <div className='phc-count-number'>8</div>
                </div>
                <div className='phc-content-menu'>
                    <p className='phc-content-menu-atr'>Recover Password</p>
                </div>
                <p className='phc-main-title'>MY ACCOUNT</p>
            </div>
            <div className='phc-footer-container'> 
                <div className='phc-box'>
                    <div className='phc-box-content'>
                        <div className='phc-box-field-1'>
                            <MessageOutlined className='phc-box-field-icon-1' />
                            <p className='phc-box-field-text-1'>Message</p>
                        </div>
                    </div>   
                    <div className='phc-box-content'>
                        <div className='phc-box-field-2'>
                            <TagOutlined className='phc-box-field-icon-2'/>
                            <p className='phc-box-field-text-2'>Support Tickets</p>
                        </div>
                    </div>   
                </div>
                <Button type='primary'>Open Messages</Button>
            </div>
        </div>
    )
};

export default ProfileHeader;