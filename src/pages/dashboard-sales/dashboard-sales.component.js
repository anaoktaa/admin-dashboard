import React from 'react';
import { Typography, Avatar, Carousel, Table, Progress } from 'antd';
import { TrophyOutlined, DownOutlined, UpOutlined, LaptopOutlined } from '@ant-design/icons';
import { Line } from 'react-chartjs-2';

import { CustomCard, CustomCardFooter, CustomCardBody, CustomCardHeader, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';
import CustomLabelBadge from 'Components/custom-label-badge/custom-label-badge.component';
import CustomButton from 'Components/custom-button/custom-button.component';
import ChartBoxVar1 from 'Components/chart-box-var-1/chart-box-var-1.component';

import { Data1, Data2, Data3 } from 'Data/chart.data';
import { Options, Options6 } from 'Data/settings-chart.data';
import { DataTable1, Columns1, DataHighlights2, DataTopPerformanceLaptop } from 'Data/table.data';
import { colorsPalette } from 'Components/custom-color/custom-color';

const { Title, Text } = Typography;

const DashboardSales = () => {
    return (
        <div>
            <div className='grid-3-gap-30'>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeader>
                        <TrophyOutlined /> &nbsp;Top Sellers
                    </CustomCardHeader>
                    <CustomCardBody>
                        <div className='mb-30'>
                            <div>
                                <p className='fs-16 fw-400 color98'>NEW ACCOUNT SALES SINCE 2018</p>
                                <div className='flex-row align-items-center'>
                                    <UpOutlined className='da-icon-detail-performance success ml-5' />
                                    <p className='da-fs-34-bold primary color5d'>9%</p>
                                    <p className='fs-14 no-mb ml-5 danger'>+14% failed</p>
                                </div>
                            </div>
                            <Line 
                                data={Data2}
                                width={100}
                                height={40}
                                options={Options6}
                            /> 
                        </div>
                        <div>
                            <p className='fs-14 color98 fw-400'>AUTHORS</p>
                            <div className='height-400 overflow-auto'>
                                {
                                    DataHighlights2.map((item) => (
                                        <div className='da-highlights-item'>
                                            <div className='flex-row align-items-center'>
                                                <Avatar className='mr-20' size={40} src={item.img} />
                                                <div>
                                                    <p className='color6d no-margin-no-padding'>{item.name}</p>
                                                    <CustomLabelBadge pill color='dark'>
                                                        {item.badge}
                                                    </CustomLabelBadge>
                                                </div>
                                            </div>
                                            <div className='flex-row-fit-content align-items-center'>
                                                <Title level={3} className='success'>{item.value}</Title>
                                                {
                                                    item.icon.type === 'up' ?
                                                    <UpOutlined className={item.icon.color} style={style.downIcon} />
                                                    :
                                                    <DownOutlined className={item.icon.color} style={style.downIcon} />
                                                }
                                            
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </CustomCardBody>
                    <CustomCardFooter className='width-100 align-items-center justify-content-center flex-row'>
                        <CustomButton color='primary' variant='solid'>View Complete Report</CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeader>
                        <LaptopOutlined /> &nbsp;Best Selling Products
                    </CustomCardHeader>
                    <CustomCardBody>
                        <div className='mb-30'>
                            <div>
                                <p className='fs-16 fw-400 color98'>TOSHIBA LAPTOPS</p>
                                <div className='flex-row align-items-center'>
                                    <DownOutlined className='da-icon-detail-performance warning ml-5' />
                                    <p className='da-fs-34-bold primary color5d'>$984</p>
                                    <p className='fs-14 no-mb ml-5 success'>+14</p>
                                </div>
                            </div>
                            <Line 
                                data={Data3}
                                width={100}
                                height={40}
                                options={Options6}
                            /> 
                        </div>
                        <div>
                            <p className='fs-14 color98 fw-400'>TOP PERFORMING</p>
                            <div className='height-400 overflow-auto'>
                                {
                                    DataTopPerformanceLaptop.map((item) => (
                                        <div className='da-highlights-item'>
                                            <div className='flex-row align-items-center'>
                                            <Progress type="circle" strokeColor={colorsPalette[item.progress.color]} width={60} className='mr-20' percent={item.progress.value} status="active" />
                                                <div>
                                                    <p className='color6d no-margin-no-padding'>{item.name}</p>
                                                    <CustomLabelBadge pill color='dark'>
                                                        {item.badge}
                                                    </CustomLabelBadge>
                                                </div>
                                            </div>
                                            <div className='flex-row-fit-content align-items-center'>
                                                <Title level={3} className='success'>{item.value}</Title>
                                                {
                                                    item.icon.type === 'up' ?
                                                    <UpOutlined className={item.icon.color} style={style.downIcon} />
                                                    :
                                                    <DownOutlined className={item.icon.color} style={style.downIcon} />
                                                }
                                            
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </CustomCardBody>
                    <CustomCardFooter className='width-100 align-items-center justify-content-center flex-row'>
                        <CustomButton color='primary' variant='solid'>View All Participants</CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard className='span-grid-column'>
                    <CustomCardBody>
                        <Title level={4}>Portfolio Performance</Title>
                        <div className='mb-30'>
                            <ChartBoxVar1
                                boxShadow={false}
                                variant='progress-circle'
                                progressBarValue={70}
                                progressBarColor='success'
                                defaultValue='$563'
                                defaultValueColor='success'
                                defaultValueDescription='Capital Gains'
                            >   
                                <div className='margin-top-8'>
                                    <span className='color6d'>Increased by <UpOutlined className='warning'/> <strong className='warning'>7.35%</strong></span>
                                </div>
                            </ChartBoxVar1>
                            <ChartBoxVar1
                                boxShadow={false}
                                variant='progress-circle'
                                progressBarValue={42}
                                progressBarColor='danger'
                                defaultValue='$194'
                                defaultValueColor='danger'
                                defaultValueDescription='Withdrawal'
                            >   
                                <div className='margin-top-8'>
                                    <span className='color6d'>Down by <DownOutlined className='success'/> <strong className='success'>21.8%</strong></span>
                                </div>
                            </ChartBoxVar1>
                        </div>
                        <div className='flex-column align-items-center'>
                            <Title className='color5d no-margin-no-padding' level={4}>Target Sales</Title>
                            <Title className='color98 fw-400 no-margin-no-padding' level={5}>Total Performance for this month</Title>
                        </div>
                    </CustomCardBody>
                </CustomCard>
            </div>  
        </div>
    )
};

const style = {
    downIcon: {
        fontSize: '11px',
        marginLeft: '10px'
    },
    settingIcon : {
        fontSize: '79px',
        color: '#a86799'
    }
}

export default DashboardSales;