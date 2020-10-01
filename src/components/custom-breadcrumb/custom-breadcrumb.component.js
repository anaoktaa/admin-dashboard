import React from 'react';
import { Typography } from 'antd';
import { PieChartTwoTone, HomeOutlined } from '@ant-design/icons';

import './custom-breadcrumb.styles.css';

const { Link, Text } = Typography;

const CustomBreadcrumb = () => {
    return (
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
    )
};

export default CustomBreadcrumb;