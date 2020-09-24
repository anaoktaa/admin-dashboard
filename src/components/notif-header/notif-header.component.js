import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import './notif-header.styles.css';
import '../right-menu-header/right-menu-header.styles.css';
import '../../App.css';

const NotifHeader = ({ show }) => {
    return (
        <div className={`floating-menu card-container header-notif-menu ${show? 'floating-menu-show' : 'floating-menu-close'}`}>
            <div className='card-header-container header-notif-menu-header'>
                <div className='card-header-overlay header-notif-menu-overlay'>
                    <p className='card-header-title'>Notifications</p>
                    <p className='card-header-desc'>
                        You have <strong>21</strong> messages unread
                    </p>
                </div>
            </div>
            <div className='header-notif-menu-body'>
                <Timeline>
                    <Timeline.Item>All hands meeting</Timeline.Item>
                    <Timeline.Item>Another meeting today, at 12.01 PM</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="red">
                        Build the productions release
                    </Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>
            </div>
        </div>
    )
};

export default NotifHeader;