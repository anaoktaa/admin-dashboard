import React from 'react';
import { Typography, Button  } from 'antd';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';

import './active-user-header.styles.css';
import '../../App.css';

const { Title, Text } = Typography;

const ActiveUserHeader = ({ show })=> {
    return (
        <div className={`card-container header-active-user-menu ${show? 'hcu-show': 'hcu-hidden'} `}>
            <div className='card-header-container header-active-user-menu-header'>
                <div className='card-header-overlay header-active-user-menu-overlay'>
                    <p className='card-header-title'>Users Online</p>
                    <p className='card-header-desc'>Recent account Activity Overview</p>
                </div>
            </div>
           <div className='active-menu-body'>
                <UserOutlined className='header-active-menu-icon' />
                <Title style={{marginBottom: '6px'}} level={1}>999k</Title>
                <Text style={{marginBottom: '13px'}} >Profile views since last login</Text>
                <Button style={{background: '#f7b924', color: '#000', border: 'none', borderRadius: '20px'}} type="primary"><SettingOutlined spin={true}/> Primary Button</Button>
           </div>
        </div>
    )
};

export default ActiveUserHeader;