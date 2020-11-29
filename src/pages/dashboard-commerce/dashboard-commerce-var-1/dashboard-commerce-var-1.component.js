import React from 'react';
import { Table, Typography, Avatar } from 'antd';
import { Line } from 'react-chartjs-2';
import { SettingOutlined, DesktopOutlined, RocketOutlined, RobotOutlined, AlertOutlined, CrownOutlined,
         FireOutlined, ClearOutlined } from '@ant-design/icons';

import CustomButton from 'Components/custom-button/custom-button.component';
import ChartBoxVar1 from 'Components/chart-box-var-1/chart-box-var-1.component';
import ChartBoxVar2 from 'Components/chart-box-var-2/chart-box-var-2.component';
import ChartBoxGridContainer from 'Components/chart-box-grid/chart-box-grid.component';
import { CustomCard, CustomCardFooter, CustomCardBody, CustomCardHeader, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';

import { Data6 } from 'Data/chart.data';
import { Options2 } from 'Data/settings-chart.data';
import { DataTable2, Columns2 } from 'Data/table.data';
import '../dashboard-commerce.styles.css';

const { Title } = Typography;

const DashboardCommerceVariation1 = () => {
    return (
        <div>
            <div className='da-commerce-grid-2 mb-30'>
                <div className='width-100 overflow-auto'> 
                    <CustomCard>
                        <CustomCardHeader>
                            <CustomCardTitleText>INCOME REPORT</CustomCardTitleText>
                        </CustomCardHeader>
                        <CustomCardBody>
                            <div style={{width: '100%', overflow: 'hidden'}}>
                                <Line 
                                    data={Data6}
                                    width={100}
                                    height={170}
                                    options={Options2}
                                />
                            </div>
                            <CustomCardTitleText className='mb-30'>TARGET SALES</CustomCardTitleText>
                            <div className='width-100 overflow-hidden'>
                                <ChartBoxGridContainer showBoxShadow={false} col={3}>
                                    <ChartBoxVar2
                                            boxShadow={false}
                                            defaultValue="65%"
                                            progressBarValue={78}
                                            strokeWidth={6}
                                            progressBarColor='info'
                                            descriptionProgressDetail='Sales'
                                        />
                                    <ChartBoxVar2
                                        boxShadow={false}
                                        defaultValue="22%"
                                        progressBarValue={40}
                                        strokeWidth={6}
                                        progressBarColor='warning'
                                        descriptionProgressDetail='Profiles'
                                    />
                                    <ChartBoxVar2
                                        boxShadow={false}
                                        defaultValue="83%"
                                        progressBarValue={83}
                                        strokeWidth={6}
                                        progressBarColor='success'
                                        descriptionProgressDetail='Tickets'
                                    />
                                </ChartBoxGridContainer>
                            </div>
                        </CustomCardBody>
                    </CustomCard>
                </div>    
                <div className='width-100'>
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
                            icon={<RocketOutlined />}
                            iconColor='#d6efff'
                            iconBgColor='#30b1ff'
                            defaultValue='62k'
                            defaultValueDescription='Bugs Fixed'
                            progressValueArrow='right'
                            progressValue='175.5%'
                            progressValueColor='info'
                            zoom={true}
                        />
                    </ChartBoxGridContainer>
                </div>
            </div>
            <CustomCard className='mb-30'>
                <CustomCardHeader>
                    <CustomCardTitleText>Easy Dynamic Tables</CustomCardTitleText>
                </CustomCardHeader>
                <CustomCardBody className='overflow-auto'>
                    <Table columns={Columns2} dataSource={DataTable2} />
                </CustomCardBody>
            </CustomCard> 
            <Title className='text-align-center' level={2}>Top Sellers Cards</Title>
            <div className='grid-3-gap-30 mb-30'>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#0e0e0eb8' 
                        className='align-items-center flex-column' 
                        imgUrl={'https://images.unsplash.com/photo-1560505155-1d9db7cc6856?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Ana Simalatupang</Title>
                            <p className='white no-margin-no-padding'>Senior Software Engineer</p>
                            <CustomButton className='margin-top-8' color='success' variant='solid'>View Profile</CustomButton>
                        </div>
                    </CustomCardHeaderWithImage>
                    <CustomCardBody>
                        <div className='flex-column align-items-center'>
                            <Title className='fw-400 color98' level={4}>Month Totals</Title>
                            <Title className='color5d fw-400 no-margin-no-padding' level={5}>
                                <strong className='danger'>12</strong> new leads, <strong className='success'>$56.4</strong> in sales
                            </Title>
                            <CustomButton className='margin-top-8' variant='outlined' pill color='primary'>Full Report</CustomButton>
                        </div>
                    </CustomCardBody>
                    <CustomCardFooter className='flex-column no-margin-no-padding'>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='primary' variant='no-outlined' icon={<CrownOutlined />}>
                                    Primary
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='primary' variant='no-outlined' icon={<AlertOutlined />}>
                                    Success
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#0e0e0eb8' 
                        className='align-items-center flex-column' 
                        imgUrl={'https://images.unsplash.com/photo-1560505155-1d9db7cc6856?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'}>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>John Rosenberg</Title>
                            <p className='white no-margin-no-padding'>Short Profile Description</p>
                            <CustomButton className='margin-top-8' pill color='warning' shadow variant='solid'>View Profile</CustomButton>
                        </div>
                    </CustomCardHeaderWithImage>
                    <CustomCardBody>
                        <div className='flex-column align-items-center'>
                            <Title className='fw-400 color98' level={4}>Month Totals</Title>
                            <SettingOutlined spin={true} style={style.settingIcon} />
                        </div>
                    </CustomCardBody>
                    <CustomCardFooter className='flex-column no-margin-no-padding'>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='dark' variant='no-outlined' icon={<CrownOutlined />}>
                                    Primary
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='dark' variant='no-outlined' icon={<AlertOutlined />}>
                                    Success
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#0e0e0eb8' 
                        className='align-items-center flex-column' 
                        imgUrl={'https://images.unsplash.com/photo-1546629313-ea9c287a8b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'}>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Silaladungka Jungkat Jungkit</Title>
                            <p className='white no-margin-no-padding'>Lead UX Designer</p>
                            <CustomButton className='margin-top-8' color='success' variant='solid'>View Profile</CustomButton>
                        </div>
                    </CustomCardHeaderWithImage>
                    <CustomCardBody>
                        <div className='flex-column align-items-center'>
                            <Title className='color5d fw-400 no-margin-no-padding' level={4}>
                                <strong className='danger'>12</strong> new leads, <strong className='success'>$56.4</strong> in sales
                            </Title>
                        </div>
                    </CustomCardBody>
                    <CustomCardFooter className='flex-column no-margin-no-padding'>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='dark' variant='no-outlined' icon={<CrownOutlined />}>
                                    Automation
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='danger' variant='no-outlined' icon={<AlertOutlined />}>
                                    Reports
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='success' variant='no-outlined' icon={<FireOutlined />}>
                                    Activity
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='dark' variant='no-outlined' icon={<ClearOutlined />}>
                                    Settings
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardFooter>
                </CustomCard>
            </div>
        </div>
    )
};

const style = {
    settingIcon : {
        fontSize: '49px',
        color: '#a86799'
    }
}

export default DashboardCommerceVariation1;