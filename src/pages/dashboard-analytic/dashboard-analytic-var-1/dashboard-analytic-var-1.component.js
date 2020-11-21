import React, { useState, useRef } from 'react';
import { Typography, Carousel } from 'antd';
import {Line} from 'react-chartjs-2';
import { GlobalOutlined, CustomerServiceOutlined, DownOutlined, CrownOutlined, MacCommandOutlined,
         LeftOutlined, RightOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardFooter, CustomCardBody, CustomCardHeader, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';
import { DefaultValueDescriptionText, DefaultValueText,
         ProgressValueTextContainer, ChartBoxVarIconContainer } from 'Components/chart-box-var-1/chart-box-var-1.styles';
import CustomButton from 'Components/custom-button/custom-button.component';
import CustomTimeline from 'Components/custom-timeline/custom-timeline.component';
import CustomTimelineItem from  'Components/custom-timeline-item/custom-timeline-item.component';

const { Text } = Typography;

const DashboardAnalyticVariation1 = () => {

    const customeSlider = useRef();

    // setting slider configurations
    const [sliderSettings, setSliderSettings] = useState({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    })

    const gotoNext = () => {
        customeSlider.current.innerSlider.slickNext()
    }

    const gotoPrev = () => {
        customeSlider.current.innerSlider.slickPrev()
    }

    const data1= {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [180, 202, 312, 430, 111, 165, 320, 290, 563, 640, 721, 821],
            backgroundColor: '#d8f3e5',
            borderColor: '#3ac47d',
            borderWidth: 6,  
        }]
    };

    const data2= {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [180, 202, 312, 430, 111, 165, 320, 290, 563, 640, 721, 821],
            backgroundColor: '#f6e6eb',
            borderColor: '#d92550',
            borderWidth: 6,  
        }]
    };

    const options = {
        elements: { 
            point: { radius: 0 } }, //point
            legend: {
                display: false
            },
            maintainAspectRatio: false,
            label: false,
            scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                    drawBorder: false 
                },
                ticks: {
                    display: false
              },

                
            }],
            yAxes :[
            {
                gridLines: {
                display: false
                },
                ticks: {
                    display: false
                },
            },                                           
            ],
        }
    }
      
    return (
        <div>
            <CustomCard className='mb-30'>
                <CustomCardHeader>
                    <CustomCardTitleText>Portfolio Performance</CustomCardTitleText>
                </CustomCardHeader>
                <CustomCardBody>
                    <div className='flex-column align-items-center'>
                        <div className='grid-3-gap-10 width-100'>
                            <div className='mb-10 flex-row align-items-center'>
                                <ChartBoxVarIconContainer className='mr-30' iconContainerShape='circle' iconColor='#444444' iconBgColor='#f7b924'>
                                    <CustomerServiceOutlined />
                                </ChartBoxVarIconContainer>
                                <div>
                                    <DefaultValueDescriptionText style={{marginBottom: 0}} >
                                        Cash Deposit
                                    </DefaultValueDescriptionText >
                                    <DefaultValueText style={{lineHeight: 1}} >
                                        1,7M
                                    </DefaultValueText>
                                    <div className='flex-row align-items-center'>
                                        <ProgressValueTextContainer progressValueColor='danger' justifyContent='flex-start'>
                                            <span><DownOutlined /></span>
                                            <span>54.1%</span>
                                        </ProgressValueTextContainer>
                                        <Text className='no-mt margin-top-8'>&nbsp; Less Earnings</Text>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-10 flex-row align-items-center'>
                                <ChartBoxVarIconContainer className='mr-30' iconContainerShape='circle' iconColor='white' iconBgColor='#d92550'>
                                    <CrownOutlined />
                                </ChartBoxVarIconContainer>
                                <div>
                                    <DefaultValueDescriptionText style={{marginBottom: 0}} >
                                        Invested Dividents
                                    </DefaultValueDescriptionText >
                                    <DefaultValueText style={{lineHeight: 1}} >
                                        9M
                                    </DefaultValueText>
                                    <div className='flex-row align-items-center'>
                                        <Text className='no-mt margin-top-8'>Growth Rate&nbsp;</Text>
                                        <ProgressValueTextContainer progressValueColor='info' justifyContent='flex-start'>
                                            <span><DownOutlined /></span>
                                            <span>14.1%</span>
                                        </ProgressValueTextContainer>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-10 flex-row align-items-center'>
                                <ChartBoxVarIconContainer className='mr-30' iconContainerShape='circle' iconColor='white' iconBgColor='#3ac47d'>
                                    <MacCommandOutlined />
                                </ChartBoxVarIconContainer>
                                <div>
                                    <DefaultValueDescriptionText style={{marginBottom: 0}} >
                                        Capital Gains
                                    </DefaultValueDescriptionText >
                                    <DefaultValueText defaultValueColor='success' style={{lineHeight: 1}} >
                                        $563
                                    </DefaultValueText>
                                    <div className='flex-row align-items-center'>
                                        <Text className='no-mt margin-top-8'>Increased by&nbsp;</Text>
                                        <ProgressValueTextContainer progressValueColor='warning' justifyContent='flex-start'>
                                            <span><DownOutlined /></span>
                                            <span>7.35%</span>
                                        </ProgressValueTextContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomCardBody>
                <CustomCardFooter className='flex-column justify-content-center align-items-center'>
                    <CustomButton shadow icon={<GlobalOutlined />} size='large' variant='solid' color='primary' pill={true}>View Complete Report</CustomButton>
                </CustomCardFooter>
            </CustomCard>
            <div className='grid-2-gap-30'>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeader>
                        <CustomCardTitleText>Techinical Support</CustomCardTitleText>
                    </CustomCardHeader>
                    <CustomCardBody>
                        <div className='technical-support-container flex-column align-items-center justify-content-center'>
                            <button className='button-navigation button-prev' onClick={()=>gotoPrev()}>
                                <LeftOutlined />
                            </button>
                            <button className='button-navigation button-next' onClick={()=>gotoNext()}>
                                <RightOutlined />
                            </button>
                            <div style={{width: '90%'}}>
                                <Carousel {...sliderSettings} ref={customeSlider}>
                                    <div className='relative'>
                                        <div className='da-absolute-chart-title-container'>
                                            NEW ACCOUNTS SINCE 2019
                                        </div>
                                        <Line 
                                            data={data1}
                                            width={100}
                                            height={300}
                                            options={options}
                                        />
                                    </div>
                                    <div className='relative'>
                                        <Line 
                                            data={data2}
                                            width={100}
                                            height={300}
                                            options={options}
                                        />
                                    </div>
                                    <div className='relative'>
                                        <Line 
                                            data={data1}
                                            width={100}
                                            height={300}
                                            options={options}
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        
                    </CustomCardBody>
                    <CustomCardFooter>

                    </CustomCardFooter>
                </CustomCard>
                <CustomCard>
                    <CustomCardHeader>
                        <CustomCardTitleText>Timeline Example</CustomCardTitleText>
                    </CustomCardHeader>
                    <CustomCardBody>
                        <div className='dashboard-analytic-timeline-container'>
                            <CustomTimeline size='regular'>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">11.00 PM</Text>
                                    } 
                                    color='success'>
                                    <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                    <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">12.00 PM</Text>
                                    } 
                                    color='warning'>
                                    <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                    <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">15.00 PM</Text>
                                    } 
                                    color='danger'>
                                    <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                    <p className='no-margin-no-padding'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                    </p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">12.00 PM</Text>
                                    } 
                                    color='primary'>
                                    <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                    <p className='no-margin-no-padding'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                    </p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">11.00 PM</Text>
                                    } 
                                    color='success'>
                                    <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                    <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">12.00 PM</Text>
                                    } 
                                    color='warning'>
                                    <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                    <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">15.00 PM</Text>
                                    } 
                                    color='danger'>
                                    <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                    <p className='no-margin-no-padding'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                    </p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">12.00 PM</Text>
                                    } 
                                    color='primary'>
                                    <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                    <p className='no-margin-no-padding'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                    </p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">11.00 PM</Text>
                                    } 
                                    color='success'>
                                    <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                    <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">12.00 PM</Text>
                                    } 
                                    color='warning'>
                                    <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                    <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">15.00 PM</Text>
                                    } 
                                    color='danger'>
                                    <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                    <p className='no-margin-no-padding'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                    </p>
                                </CustomTimelineItem>
                                <CustomTimelineItem 
                                    label={
                                        <Text className='fs-12' type="secondary">12.00 PM</Text>
                                    } 
                                    color='primary'>
                                    <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                    <p className='no-margin-no-padding'>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                    </p>
                                </CustomTimelineItem>
                            </CustomTimeline>
                        </div>
                    </CustomCardBody>
                    <CustomCardFooter>
                        
                    </CustomCardFooter>
                </CustomCard>
            </div>  
        </div>
    )
};

export default DashboardAnalyticVariation1;