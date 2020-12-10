import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Progress, Table, Avatar } from 'antd';
import { DownOutlined, UpOutlined,  RocketOutlined, ThunderboltOutlined, FileTextOutlined, DatabaseOutlined, MessageOutlined,
        CrownOutlined, AlertOutlined, TrophyOutlined  } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardHeader, CustomCardTitleText, CustomCardFooter } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';
import { colorsPalette } from 'Components/custom-color/custom-color';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import CustomButton from 'Components/custom-button/custom-button.component';

import { BandwidthReportData2, DataChart } from '../dashboard-crm.data';
import { DataTable2, Columns2, DataHighlights2 } from 'Data/table.data';
import { Options6, Options8 } from 'Data/settings-chart.data';

const { Title } = Typography;

const DashboardCrmVariation2 = () => {
    return (
        <div>
            <div className='grid-3-gap-30 mb-30'>
                <ChartBoxVar3
                    defaultValue="1896"
                    defaultValueColor='white'
                    mainTitleText='Total Orders'
                    mainTitleColor='white'
                    descriptionText='Last year expenses'
                    descriptionTextColor='white'
                    bgColor='linear-gradient(0deg,#a18cd1 0,#fbc2eb)'
                />   
                <ChartBoxVar3
                    defaultValue="$568"
                    defaultValueColor='white'
                    mainTitleText='Clients'
                    mainTitleColor='white'
                    descriptionText='Total Clients Profit'
                    descriptionTextColor='#fbfbfbe6'
                    bgColor='linear-gradient(-20deg,#2b5876,#4e4376)'
                />     
                <ChartBoxVar3
                    className='span-grid-column'
                    defaultValue="$14M"
                    defaultValueColor='white'
                    mainTitleText='Products Sold'
                    mainTitleColor='white'
                    descriptionText='Total revenue streams'
                    descriptionTextColor='white'
                    bgColor='linear-gradient(180deg,#00b09b,#96c93d)'
                /> 
            </div>
            <div className='dcm-grid-1-5-2 mb-30'>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeader>Sales Report</CustomCardHeader>
                    <CustomCardBody>
                        <div className='card-container text-align-left mb-30'>
                            <div className='flex-row align-items-center padding-horizontal-20'>
                                <Title level={1} className='fw-400 no-margin-no-padding '><span className='color98'>$</span>123&nbsp;</Title>
                                <Title level={3} className='fw-400 color98 no-margin-no-padding'>Sales Total</Title>
                            </div>
                            <Line 
                                data={DataChart.data1}
                                width={100}
                                height={30}
                                options={Options8}
                            />
                        </div>
                        <p className='fs-14 color98 fw-400'>LAST MONTH HIGHTLIGHTS</p>
                        <div className='height-200 overflow-auto'>
                            {
                                DataHighlights2.map((item) => (
                                    <div className='da-highlights-item'>
                                        <div className='flex-row align-items-center'>
                                            <Avatar className='mr-20' size={40} src={item.img} />
                                            <div>
                                                <p className='color6d no-margin-no-padding'>{item.name}</p>
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
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeader>Bandwidth Reports</CustomCardHeader>
                    <CustomCardBody>
                        <div className='mb-30'>
                            <Line 
                                data={DataChart.data5}
                                width={100}
                                height={40}
                                options={Options6}
                            />
                        </div>
                        <div className='grid-2-gap-30 mb-30'>
                            {
                                BandwidthReportData2.map((item) => (
                                    <div key={item.id}>
                                        <div className='flex-row align-items-center justify-content-space-between'>
                                            <Title level={3} className={`fw-bold no-mb mr-20 ${(item.valueDetail.color) ? item.valueDetail.color : 'color5d'}`}>{item.valueDetail.value}</Title>
                                            <p className='color98 fw-400 no-margin-no-padding'>{item.description}</p>
                                        </div>
                                        {
                                            item.progress?
                                            <Progress strokeColor={`${colorsPalette[item.progress.color] ? colorsPalette[item.progress.color] : item.progress.color}`}  percent={item.progress.value} size="small" showInfo={false} />
                                            :
                                            null
                                        }
                                       
                                    </div>
                                ))
                            }
                        </div>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div className='grid-3-gap-30 mb-30 overflow-hidden'>
                <CustomCard className='overflow-hidden'>
                    <CustomCardBody>
                        <Title level={3} className='fw-400 color5d no-margin-no-padding'>Received Messages</Title>
                        <Title className='primary no-margin-no-padding' level={1}>348</Title>
                        <Line 
                            data={DataChart.data6}
                            width={100}
                            height={50}
                            options={Options6}
                        />
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='overflow-hidden'>
                    <CustomCardBody>
                        <Title level={3} className='fw-400 color5d no-margin-no-padding '>Sent Messages</Title>
                        <Title className='danger no-margin-no-padding' level={1}>348</Title>
                        <Line 
                            data={DataChart.data7}
                            width={100}
                            height={50}
                            options={Options6}
                        />
                    </CustomCardBody>
                </CustomCard>
                <CustomCard contained='dark' className='overflow-hidden'>
                    <CustomCardBody>
                        <Title level={3} className='fw-400 warning no-margin-no-padding '>Total Inbox</Title>
                        <Title className='warning no-margin-no-padding' level={1}>348</Title>
                        <Line 
                            data={DataChart.data8}
                            width={100}
                            height={50}
                            options={Options6}
                        />
                    </CustomCardBody>
                </CustomCard>
            </div>
            <CustomCard className='mb-30'>
                <CustomCardHeader>
                    <CustomCardTitleText>Easy Dynamic Tables</CustomCardTitleText>
                </CustomCardHeader>
                <CustomCardBody className='overflow-auto'>
                    <Table columns={Columns2} dataSource={DataTable2} />
                </CustomCardBody>
            </CustomCard>
            <div className='grid-3-gap-30'>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#545cd866' 
                        imgUrl='https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
                        className='align-items-center flex-column'>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Silaladungka Jungkat Jungkit</Title>
                            <p className='white no-margin-no-padding'>Lead UX Designer</p>
                        </div>
                        <CustomButton className='margin-top-8' color='warning' variant='solid'>Message</CustomButton>
                    </CustomCardHeaderWithImage>
                    <CustomCardBody>
                        <Title className='color98 text-align-center' level={4}>Lorem ipsum dolor sit amet</Title>
                    </CustomCardBody>
                    <CustomCardFooter className='flex-column no-margin-no-padding'>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<CrownOutlined style={style.iconStyleBigger}/>}>
                                    View Profile
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<AlertOutlined style={style.iconStyleBigger}/>}>
                                    Leads Generated
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#545cd866' 
                        imgUrl='https://images.unsplash.com/photo-1553526777-5ffa3b3248d8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
                        className='align-items-center flex-column'>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Jemes Tillman</Title>
                            <p className='white no-margin-no-padding'>Frontend UI Designer</p>
                        </div>
                        <CustomButton className='margin-top-8' color='warning' variant='solid'>Message</CustomButton>
                    </CustomCardHeaderWithImage>
                    <CustomCardBody>
                        <Title className='color98 text-align-center' level={4}>Aenean massa cum sociis natoque penatibus et magnis dis parturient montes</Title>
                    </CustomCardBody>
                    <CustomCardFooter className='flex-column no-margin-no-padding'>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='alt' variant='no-outlined' icon={<RocketOutlined />}>
                                    View Profile
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='alt' variant='no-outlined' icon={<ThunderboltOutlined />}>
                                    Leads Leads
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#545cd866' 
                        imgUrl='https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                        className='align-items-center flex-column'>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Vinnie Wagstaff</Title>
                            <p className='white no-margin-no-padding'>Backend Engineer</p>  
                        </div>
                        <CustomButton className='margin-top-8' color='warning' variant='solid'>Message</CustomButton>
                    </CustomCardHeaderWithImage>
                    <CustomCardFooter className='flex-column no-margin-no-padding'>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='dark' variant='no-outlined' icon={<FileTextOutlined style={style.iconStyleBigger}/>}>
                                    Automation
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='danger' variant='no-outlined' icon={<DatabaseOutlined style={style.iconStyleBigger}/>}>
                                    Reports
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='success' variant='no-outlined' icon={<MessageOutlined style={style.iconStyleBigger}/>}>
                                    Activity
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='dark' variant='no-outlined' icon={<TrophyOutlined style={style.iconStyleBigger}/>}>
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
    downIcon: {
        fontSize: '11px',
        marginLeft: '10px'
    },
    settingIcon : {
        fontSize: '79px',
        color: '#a86799'
    },
    iconStyleBigger: {
        fontSize: '28px'
    }
};

export default DashboardCrmVariation2;