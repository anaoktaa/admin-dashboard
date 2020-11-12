import React from 'react';
import { SettingOutlined, DesktopOutlined, RocketOutlined,
         RobotOutlined, GiftOutlined, FireOutlined, HeartOutlined,
         StarOutlined } from '@ant-design/icons';

import ChartBoxVar1 from '../../../../components/chart-box-var-1/chart-box-var-1.component';
import ChartBoxGridContainer from  '../../../../components/chart-box-grid/chart-box-grid.component';

import './grids.styles.css';

const Grids = () => {
    return (
        <div className='chart-boxes-grid-container'>
            <ChartBoxGridContainer col={2}>
                <ChartBoxVar1
                    icon={<SettingOutlined />}
                    iconBgColor='primary'
                    iconColor='primary'
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
            </ChartBoxGridContainer>
            <ChartBoxGridContainer col={3}>
                <ChartBoxVar1
                    icon={<SettingOutlined />}
                    iconBgColor='primary'
                    iconColor='primary'
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
            </ChartBoxGridContainer>
            <ChartBoxGridContainer col={2}>
                <ChartBoxVar1
                    icon={<SettingOutlined />}
                    bgColor='primary'
                    iconBgColor='#eaeaea42'
                    iconColor='white'
                    defaultValue='45.8k'
                    defaultValueDescription='Total Views'
                    defaultValueDescColor='white'
                    defaultValueColor='white'
                    progressValueArrow='up'
                    progressValue='175.5%'
                    progressValueColor='warning'
                    zoom={true}
                /> 
                <ChartBoxVar1
                    icon={<DesktopOutlined />}
                    bgColor='success'
                    iconBgColor='white'
                    iconColor='success'
                    defaultValue='17.2k'
                    defaultValueDescription='Profiles'
                    defaultValueDescColor='white'
                    defaultValueColor='white'
                    progressValueArrow='left'
                    progressValue='175.5%'
                    progressValueColor='white'
                    zoom={true}
                /> 
                <ChartBoxVar1
                    icon={<RocketOutlined />}
                    bgColor='warning'
                    iconBgColor='#eaeaea42'
                    iconColor='white'
                    defaultValue='5.82k'
                    defaultValueDescription='Reports Submitted'
                    defaultValueDescColor='white'
                    defaultValueColor='white'
                    progressValueArrow='up'
                    progressValue='54.1%'
                    progressValueColor='white'
                    zoom={true}
                /> 
                <ChartBoxVar1
                    icon={<GiftOutlined />}
                    bgColor='danger'
                    iconBgColor='#eaeaea42'
                    iconColor='white'
                    defaultValue='5.82k'
                    defaultValueDescription='Reports Submitted'
                    defaultValueDescColor='white'
                    defaultValueColor='white'
                    progressValueArrow='up'
                    progressValue='182.2%'
                    progressValueColor='white'
                    zoom={true}
                /> 
            </ChartBoxGridContainer>
            <ChartBoxGridContainer col={3}>
                <ChartBoxVar1
                    icon={<SettingOutlined />}
                    iconBgColor='primary'
                    iconColor='primary'
                    defaultValue='23k'
                    defaultValueDescription='Total Views'
                    progressValueArrow='up'
                    progressValue='176%'
                    progressValueColor='success'
                    zoom={true}
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
                    zoom={true}
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
                    zoom={true}
                />
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
                    zoom={true}
                />
                <ChartBoxVar1
                    bgColor='linear-gradient(to right, #654ea3, #eaafc8)'
                    icon={<HeartOutlined />}
                    iconBgColor='#eaeaea42'
                    iconColor='#654ea3'
                    defaultValue='2.34k'
                    defaultValueDescColor='#fff'
                    defaultValueColor='#fff'
                    defaultValueDescription='Profile'
                    progressValueArrow='up'
                    progressValue='176%'
                    progressValueColor='#fff'
                    zoom={true}
                />
                <ChartBoxVar1
                    bgColor='linear-gradient(to right, #ff7e5f, #feb47b)'
                    icon={<StarOutlined />}
                    iconBgColor='#fff'
                    iconColor='#feb47b'
                    defaultValue='67.3k'
                    defaultValueDescColor='#fff'
                    defaultValueColor='#fff'
                    defaultValueDescription='Reports Submitted'
                    progressValueArrow='up'
                    progressValue='190.2%'
                    progressValueColor='#fff'
                    zoom={true}
            />
            </ChartBoxGridContainer>
        </div>
    )
};

export default Grids;