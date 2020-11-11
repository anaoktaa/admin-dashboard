import { Col } from 'antd';
import React from 'react';
import { SettingOutlined, DesktopOutlined, RocketOutlined,
        RobotOutlined, GiftOutlined, FireOutlined, HeartOutlined,
        StarOutlined } from '@ant-design/icons';

    
import ChartBoxVar1 from '../../../../components/chart-box-var-1/chart-box-var-1.component';

const Colors = () => {
    return (
        <div className='grid-3-gap-30 '>  
            <ChartBoxVar1
                bgColor='linear-gradient(to bottom,#3ed68a,#9071cc)'
                icon={<SettingOutlined />}
                iconBgColor='#fff'
                iconColor='#3ac47d'
                defaultValue='23k'
                defaultValueDescColor='#fff'
                defaultValueColor='#fff'
                defaultValueDescription='Total Views'
                progressValueArrow='up'
                progressValue='176%'
                progressValueColor='#fff'
            />
            <ChartBoxVar1
                icon={<DesktopOutlined />}
                iconBgColor='#d8f3e5'
                iconColor='#3ac47d'
                defaultValue='17k'
                defaultValueDescription='Profile'
                progressValueArrow='left'
                progressValue='136%'
                progressValueColor='warning'
            />
        </div>
    )
};

export default Colors;