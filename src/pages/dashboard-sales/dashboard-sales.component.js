import React from 'react';
import { Typography, Avatar, Table, Progress } from 'antd';
import { TrophyOutlined, DownOutlined, UpOutlined, LaptopOutlined, CheckCircleTwoTone, AntDesignOutlined } from '@ant-design/icons';
import { Line, Bar } from 'react-chartjs-2';

import { CustomCard, CustomCardFooter, CustomCardBody, CustomCardHeader, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';
import CustomLabelBadge from 'Components/custom-label-badge/custom-label-badge.component';
import CustomButton from 'Components/custom-button/custom-button.component';
import ChartBoxVar1 from 'Components/chart-box-var-1/chart-box-var-1.component';
import CustomTabsWrapper from 'Components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from 'Components/custom-tab-panel/custom-tab-panel.component';
import CustomBadges from 'Components/custom-badges/custom-badges.component';
import CustomTimeline from 'Components/custom-timeline/custom-timeline.component';
import CustomTimelineItem from  'Components/custom-timeline-item/custom-timeline-item.component';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import ChartBoxGridContainer from 'Components/chart-box-grid/chart-box-grid.component';

import { Data2, Data3, Data12 } from 'Data/chart.data';
import { Options6,  Options7 } from 'Data/settings-chart.data';
import { DataHighlights2, DataTopPerformanceLaptop, ColumnsEasyDynTable, DataEasyDynTable } from 'Data/table.data';
import { colorsPalette } from 'Components/custom-color/custom-color';

import './dashboard-sales.styles.css';


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
                <CustomCard className='span-grid-column overflow-hidden'>
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
                            <div className='mb-30 text-align-center'>
                                <Title className='color5d no-margin-no-padding' level={4}>Target Sales</Title>
                                <Title className='color98 fw-400 no-margin-no-padding' level={5}>Total Performance for this month</Title>
                            </div>
                            <Bar 
                                data={Data12}
                                height={260}
                                options={Options7}
                            />

                        </div>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='ds-span-2 mb-30'>
                    <CustomCardHeader>Easy Dynamic Tables</CustomCardHeader>
                    <CustomCardBody>
                        <Table columns={ColumnsEasyDynTable} dataSource={DataEasyDynTable} />
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='span-grid-column mb-30'>
                    <CustomCardHeader>Technical Support</CustomCardHeader>
                    <CustomCardHeaderWithImage 
                            noneBorderRadius={true}
                            backgroundColorOverlay='#adadade6' 
                            className='align-items-center flex-column' 
                            imgUrl={'https://images.unsplash.com/photo-1546629313-ea9c287a8b9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80'}>
                        <Title className='text-align-center' level={4}>Notifications</Title>
                        <Text>You have <strong className='danger'> 22</strong> notifications unread</Text>
                    </CustomCardHeaderWithImage>
                    <CustomCardBody>
                        <CustomTabsWrapper>
                            <CustomTabPanel data-key='message' title='Message'>
                                <div className='ds-notification-height'>
                                    <CustomTimeline size='small'>
                                        <CustomTimelineItem color='danger'>
                                            All Hands Meeting
                                        </CustomTimelineItem>
                                        <CustomTimelineItem color='warning'>
                                            Yet another one, <Text type="success"> at 10.30 AM</Text> 
                                        </CustomTimelineItem>
                                        <CustomTimelineItem color='success'>
                                            Build the productions release 
                                            <CustomLabelBadge style={{marginLeft: '20px'}} color='danger'>
                                                NEW
                                            </CustomLabelBadge>
                                        </CustomTimelineItem>
                                        <CustomTimelineItem color='primary'>
                                            <p>Something not important</p>
                                            <Avatar.Group maxCount={4} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                                                <Avatar style={{ backgroundColor: '#545cd8' }}>U</Avatar>
                                                <Avatar style={{ backgroundColor: '#d92550' }}>I</Avatar>
                                                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
                                            </Avatar.Group>
                                        </CustomTimelineItem>
                                    </CustomTimeline>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel data-key='events' title='Events'>
                                <div className='ds-notification-height'>
                                    <CustomTimeline size='regular'>
                                        <CustomTimelineItem 
                                            color='success'>
                                            <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                            <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                                        </CustomTimelineItem>
                                        <CustomTimelineItem 
                                            color='warning'>
                                            <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                            <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                                        </CustomTimelineItem>
                                        <CustomTimelineItem 
                                            color='danger'>
                                            <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                            <p className='no-margin-no-padding'>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                            </p>
                                        </CustomTimelineItem>
                                    </CustomTimeline>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel data-key='system-error' title='System Error'>
                                <div className='flex-column align-items-center mb-30'>
                                    <CheckCircleTwoTone twoToneColor="#31b16f" style={{fontSize: '80px', marginBottom: '20px'}}/>
                                    <Title className='fw-400 no-margin-no-padding color98' level={4}>All caught up !</Title> 
                                    <Title className='fw-400 no-margin-no-padding' level={3}>There are no system errors !</Title>
                                   
                                </div>
                            </CustomTabPanel>
                        </CustomTabsWrapper>
                    </CustomCardBody>
                    <CustomCardFooter className='flex-row align-items-center justify-content-center'>
                        <CustomBadges className='mrb-10' color='warning' size={12} dot>
                            <CustomButton color='dark' pill shadow variant='solid'>
                                View All Messages
                            </CustomButton>
                        </CustomBadges>
                    </CustomCardFooter>
                </CustomCard>
            </div>  
            <div className='mb-30'>
                <ChartBoxGridContainer col={3}>
                    <ChartBoxVar3
                        defaultValue="1896"
                        defaultValueColor='success'
                        mainTitleText='Total Orders'
                        descriptionText='Last year expenses'
                    />   
                    <ChartBoxVar3
                        defaultValue="$568"
                        defaultValueColor='warning'
                        mainTitleText='Clients'
                        descriptionText='Total Clients Profit'
                    />     
                    <ChartBoxVar3
                        defaultValue="$14M"
                        defaultValueColor='danger'
                        mainTitleText='Products Sold'
                        descriptionText='Total revenue streams'
                    /> 
                </ChartBoxGridContainer>
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