import React from 'react';
import { Table } from 'antd';
import { Line } from 'react-chartjs-2';
import { SettingOutlined, DesktopOutlined, RocketOutlined, RobotOutlined} from '@ant-design/icons';

import ChartBoxVar1 from 'Components/chart-box-var-1/chart-box-var-1.component';
import ChartBoxVar2 from 'Components/chart-box-var-2/chart-box-var-2.component';
import ChartBoxGridContainer from 'Components/chart-box-grid/chart-box-grid.component';
import { CustomCard, CustomCardFooter, CustomCardBody, CustomCardHeader, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';

import { Data6 } from 'Data/chart.data';
import { Options2 } from 'Data/settings-chart.data';
import { DataTable2, Columns2 } from 'Data/table.data';
import '../dashboard-commerce.styles.css';

const DashboardCommerceVariation1 = () => {
    return (
        <div>
            <div className='da-commerce-grid-2 mb-30'>
                <div className='width-100'> 
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
        </div>
    )
};

export default DashboardCommerceVariation1;