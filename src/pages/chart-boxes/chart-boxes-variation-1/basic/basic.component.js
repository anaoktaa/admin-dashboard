import React from 'react';
import { SettingOutlined, DesktopOutlined, RocketOutlined,
         RobotOutlined, GiftOutlined, FireOutlined, HeartOutlined,
         StarOutlined } from '@ant-design/icons';

         
import ChartBoxVar1 from '../../../../components/chart-box-var-1/chart-box-var-1.component';

const Basic = () => {
    return (
        <div className='grid-3-gap-30 '>   
            <ChartBoxVar1
                icon={<SettingOutlined />}
                defaultValue='23k'
                defaultValueDescription='Total Views'
                progressValueArrow='up'
                progressValue='176%'
                progressValueColor='success'
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
            <ChartBoxVar1
                icon={<RobotOutlined />}
                iconContainerShape='square'
                iconBgColor='#f7d3dc'
                iconColor='#d92550'
                defaultValue='5,83k'
                defaultValueDescription='Report Submitted'
                progressValueArrow='up'
                progressValue='54.1%'
                progressValueColor='primary'
            />
            <ChartBoxVar1
                icon={<RocketOutlined />}
                iconColor='#d6efff'
                iconBgColor='#30b1ff'
                defaultValue='62k'
                defaultValueDescription='Bugs Fixed'
                progressValueArrow='right'
                progressValue='175.5%'
                progressValueColor='info'
            />
            <ChartBoxVar1
                icon={<DesktopOutlined />}
                iconBgColor='#444054'
                iconColor='#8e8e8e'
                defaultValue='2,82k'
                defaultValueDescription='Total Sales'
                progressValueArrow='down'
                progressValue='23.1%'
                progressValueColor='danger'
            />
            <ChartBoxVar1
                icon={<GiftOutlined />}
                iconBgColor='#dddef7'
                iconColor='#4367d8'
                defaultValue='32k'
                defaultValueDescription='Follow Ups'
                progressValueArrow='left'
                progressValue='115.5%'
                progressValueColor='dark'
            />
            <ChartBoxVar1
                defaultValue='1.2M'
                defaultValueDescription='Leads Generated'
                progressValueArrow='left'
                progressValue='115.5%'
                progressValueColor='info'
            />
            <ChartBoxVar1
                defaultValue='17.2k'
                defaultValueDescription='Profile'
                progressValueArrow='left'
                progressValue='175.5%'
                progressValueColor='warning'
            />
            <ChartBoxVar1
                defaultValue='58.2k'
                defaultValueDescription='Reports Submitted'
                progressValueArrow='up'
                progressValue='54.1%'
                progressValueColor='primary'
            />
            <ChartBoxVar1
                defaultValue='63.2k'
                defaultValueDescription='Bugs Fixed'
                progressValueArrow='right'
                progressValue='175.5%'
                progressValueColor='info'
            />
            <ChartBoxVar1
                defaultValue='3.47k'
                defaultValueDescription='Users Active'
                progressValueArrow='down'
                progressValue='31.2%'
                progressValueColor='danger'
            />
            <ChartBoxVar1
                defaultValue='3.7M'
                defaultValueDescription='Lifetime Tickets'
                progressValueArrow='right'
                progressValue='121.9%'
                progressValueColor='warning'
            />
            <ChartBoxVar1
                icon={<FireOutlined />}
                iconBgColor='#f7b924'
                iconColor='#fff'
                defaultValue='45.8k'
                defaultValueDescription='Total Views'
                zoom={true}
            />
            <ChartBoxVar1
                icon={<HeartOutlined />}
                iconBgColor='#d92550'
                iconColor='#fff'
                defaultValue='17k'
                defaultValueDescription='Profile'
                zoom={true}
            />
            <ChartBoxVar1
                icon={<StarOutlined />}
                iconContainerShape='square'
                iconBgColor='#3ac47d'
                iconColor='#fff'
                defaultValue='5,83k'
                defaultValueDescription='Report Submitted'
                zoom={true}
            />
        </div>
    )
};

export default Basic;