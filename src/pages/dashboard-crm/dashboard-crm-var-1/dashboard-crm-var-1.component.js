import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Progress, Table, Avatar } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import { CustomCard, BorderBottomCard, CustomCardBody, CustomCardHeader, CustomCardFooter } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';
import { colorsPalette } from 'Components/custom-color/custom-color';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import CustomButton from 'Components/custom-button/custom-button.component';

import { BandwidthReportData, ChartBox3Data, DataChart, DataChartComponentList } from '../dashboard-crm.data';
import { ColumnsEasyDynTable, DataEasyDynTable, DataHighlights2 } from 'Data/table.data';
import { Options6, Options8 } from 'Data/settings-chart.data';

const { Title } = Typography;

const DashboardCrmVariation1 = () => {
    return (
        <div>
            <div className='grid-3-gap-30 mb-30'>
                {
                    ChartBox3Data.map(({ id, defaultValue, defaultValueColor, mainTitleText,
                                        descriptionText, progressBarValue, strokeWidth,
                                        progressBarColor, descriptionProgressDetail }) => (
                        <ChartBoxVar3
                            key={id}
                            defaultValue={defaultValue}
                            defaultValueColor={defaultValueColor}
                            mainTitleText={mainTitleText}
                            descriptionText={descriptionText}
                            progressBarValue={progressBarValue}
                            strokeWidth={strokeWidth}
                            progressBarColor={progressBarColor}
                            descriptionProgressDetail={descriptionProgressDetail}
                        />     
                    ))
                }
            </div>
            <div className='grid-2-gap-30 mb-30'>
                <div className='dcm-chart-boxes-1'>
                    {
                        DataChartComponentList.map(({id, value, description, graphData, borderColor}) => (
                            <CustomCard className='overflow-hidden' key={id}>
                                <CustomCardBody className='relative'>
                                    <div className='mb-10'>
                                        <Title level={2} className='fw-400 color5d no-margin-no-padding '><span className='color98'>$</span>{value}</Title>
                                        <Title level={5} className='fw-400 color98 no-margin-no-padding'>{description}</Title>
                                    </div>
                                    <Line 
                                        data={graphData}
                                        width={100}
                                        height={40}
                                        options={Options6}
                                    />
                                    <BorderBottomCard bgColor={borderColor}/>
                                </CustomCardBody>
                            </CustomCard>
                        ))
                    }
                </div>
                <CustomCard className='overflow-hidden' >
                    <CustomCardHeader>Bandwidth Reports</CustomCardHeader>
                    <CustomCardBody>
                        <div className='grid-2-gap-30 mb-30'>
                            {
                                BandwidthReportData.map((item) => (
                                    <div key={item.id}>
                                        <div className='flex-row align-items-center'>
                                            <Title level={3} className={`fw-bold no-mb mr-20 ${(item.valueDetail.color) ? item.valueDetail.color : 'color5d'}`}>{item.valueDetail.value}</Title>
                                            {
                                                item.progress?
                                                <Progress strokeColor={`${colorsPalette[item.progress.color] ? colorsPalette[item.progress.color] : item.progress.color}`}  percent={item.progress.value} size="small" showInfo={false} />
                                                :
                                                null
                                            }
                                        </div>
                                <Title level={5} className='color98 fw-400 no-margin-no-padding'>{item.description}</Title>
                                    </div>
                                ))
                            }
                        </div>
                        <Line 
                            data={DataChart.data5}
                            width={100}
                            height={50}
                            options={Options6}
                        />
                    </CustomCardBody>
                </CustomCard>
            </div>
            <CustomCard className='mb-30 overflow-auto'>
                <CustomCardHeader>Easy Dynamic Tables</CustomCardHeader>
                <CustomCardBody>
                    <Table columns={ColumnsEasyDynTable} dataSource={DataEasyDynTable} />
                </CustomCardBody>
            </CustomCard>
            <div className='dcm-grid-2-2 mb-30'>
                <div className='overflow-hidden'>
                    <CustomCard className='overflow-hidden mb-30'>
                        <CustomCardBody className='relative'>
                            <Title level={3} className='fw-400 color5d no-margin-no-padding'>Received Messages</Title>
                            <Title className='primary' style={{position: 'absolute', top: '50px', left: '70px'}} level={1}>348</Title>
                            <Line 
                                data={DataChart.data6}
                                width={100}
                                height={70}
                                options={Options6}
                            />
                            <BorderBottomCard bgColor='primary'/>
                        </CustomCardBody>
                    </CustomCard>
                    <CustomCard className='overflow-hidden'>
                        <CustomCardBody className='relative'>
                            <Title level={3} className='fw-400 color5d no-margin-no-padding '>Sent Messages</Title>
                            <Title className='danger' style={{position: 'absolute', top: '50px', left: '70px'}} level={1}>348</Title>
                            <Line 
                                data={DataChart.data7}
                                width={100}
                                height={70}
                                options={Options6}
                            />
                            <BorderBottomCard bgColor='danger'/>
                        </CustomCardBody>
                    </CustomCard>
                </div>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeader>Sales Report</CustomCardHeader>
                    <CustomCardBody>
                        <div className='card-container text-align-left mb-30'>
                            <div className='flex-row align-items-center padding-horizontal-20'>
                                <Title level={1} className='fw-400 no-margin-no-padding '><span className='color98'>$</span>123&nbsp;</Title>
                                <Title level={3} className='fw-400 color98 no-margin-no-padding'>Sales income</Title>
                            </div>
                            <Line 
                                data={DataChart.data1}
                                width={100}
                                height={20}
                                options={Options8}
                            />
                        </div>
                        <p className='fs-14 color98 fw-400'>LAST MONTH HIGHTLIGHTS</p>
                        <div className='height-300-only overflow-auto'>
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
            </div>
            <div className='grid-3-gap-30'>
                <CustomCard>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#545cd8' 
                        className='align-items-center flex-column'>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Silaladungka Jungkat Jungkit</Title>
                            <p className='white no-margin-no-padding'>Lead UX Designer</p>
                        </div>
                    </CustomCardHeaderWithImage>
                    <CustomCardFooter className='flex-column align-items-center justify-content-center' bgColor='#656ddc'>
                        <CustomButton className='margin-top-8' color='dark' variant='solid'>Send Message</CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#444054' 
                        className='align-items-center flex-column'>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Jemes Tillman</Title>
                            <p className='white no-margin-no-padding'>Frontend UI Designer</p>
                        </div>
                    </CustomCardHeaderWithImage>
                    <CustomCardFooter className='flex-column align-items-center justify-content-center' bgColor='#575365'>
                        <CustomButton className='margin-top-8' color='warning' variant='solid'>Send Message</CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard>
                    <CustomCardHeaderWithImage 
                        backgroundColorOverlay='#343a40' 
                        className='align-items-center flex-column'>
                        <div className='flex-column align-items-center'>
                            <Avatar size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Title className='white no-margin-no-padding' level={4}>Vinnie Wagstaff</Title>
                            <p className='white no-margin-no-padding'>Backend Engineer</p>
                        </div>
                    </CustomCardHeaderWithImage>
                    <CustomCardFooter className='flex-column align-items-center justify-content-center' bgColor='#494e53'>
                        <CustomButton className='margin-top-8' color='success' variant='solid'>Send Message</CustomButton>
                    </CustomCardFooter>
                </CustomCard>
            </div>
        </div>
    )
};

export default DashboardCrmVariation1;

const style = {
    downIcon: {
        fontSize: '11px',
        marginLeft: '10px'
    },
    settingIcon : {
        fontSize: '79px',
        color: '#a86799'
    }
};
