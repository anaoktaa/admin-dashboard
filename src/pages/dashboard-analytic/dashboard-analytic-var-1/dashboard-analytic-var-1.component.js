import React, { useRef } from 'react';
import { Typography, Carousel, Table, Input, Checkbox  } from 'antd';
import { Line } from 'react-chartjs-2';
import { GlobalOutlined, CustomerServiceOutlined, DownOutlined, CrownOutlined, MacCommandOutlined,
         LeftOutlined, RightOutlined, UpOutlined, CheckOutlined, DeleteOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardFooter, CustomCardBody, CustomCardHeader, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';
import { DefaultValueDescriptionText, DefaultValueText,
         ProgressValueTextContainer, ChartBoxVarIconContainer } from 'Components/chart-box-var-1/chart-box-var-1.styles';
import CustomButton from 'Components/custom-button/custom-button.component';
import CustomTimeline from 'Components/custom-timeline/custom-timeline.component';
import CustomTimelineItem from  'Components/custom-timeline-item/custom-timeline-item.component';
import ChatBallon from 'Components/chat-ballon/chat-ballon.component';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import ChartBoxGridContainer from 'Components/chart-box-grid/chart-box-grid.component';
import TaskListContainer from 'Components/task-list-container/task-list-container.component';
import CustomLabelBadge from 'Components/custom-label-badge/custom-label-badge.component';

import { ChatList2 } from 'Pages/applications-chat/application-chat.data';

import { Data1, Data2, Data3 } from 'Data/chart.data';
import { Options } from 'Data/settings-chart.data';
import { DataTable1, Columns1 } from 'Data/table.data';

const { Text } = Typography;

const DashboardAnalyticVariation1 = () => {

    const customeSlider = useRef();

    // setting slider configurations
    const sliderSettings ={
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    };

    const gotoNext = () => {
        customeSlider.current.innerSlider.slickNext()
    }

    const gotoPrev = () => {
        customeSlider.current.innerSlider.slickPrev()
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
                                        <Text className='no-mb margin-top-8'>&nbsp; Less Earnings</Text>
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
                                        <Text className='no-mb margin-top-8'>Growth Rate&nbsp;</Text>
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
                                        <Text className='no-mb margin-top-8'>Increased by&nbsp;</Text>
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
            <div className='grid-2-gap-30 mb-30'>
                <CustomCard className='overflow-hidden'>
                    <CustomCardHeader>
                        <CustomCardTitleText>Techinical Support</CustomCardTitleText>
                    </CustomCardHeader>
                    <CustomCardBody>
                        <div className='technical-support-container-2 flex-column align-items-center justify-content-center'>
                            <button className='button-navigation button-prev' onClick={()=>gotoPrev()}>
                                <LeftOutlined />
                            </button>
                            <button className='button-navigation button-next' onClick={()=>gotoNext()}>
                                <RightOutlined />
                            </button>
                            <div style={{width: '100%'}}>
                                <Carousel {...sliderSettings} ref={customeSlider}>
                                    <div className='relative'>
                                        <div className='da-absolute-chart-title-container'>
                                            <p className='da-fs-20-upper color6d'>NEW ACCOUNTS SINCE 2019</p>
                                            <div className='flex-row align-items-center'>
                                                <UpOutlined className='da-icon-detail-performance success' />
                                                <p className='da-fs-34-bold color5d'>78</p>
                                                <p className='da-fs-30-fw-400 color98'>%</p>
                                                <p className='fs-16 success no-mb ml-10'>+14</p>
                                            </div>
                                        </div>
                                        <Line 
                                            data={Data1}
                                            width={100}
                                            height={300}
                                            options={Options}
                                        />
                                    </div>
                                    <div className='relative'>
                                        <div className='da-absolute-chart-title-container'>
                                            <p className='da-fs-20-upper color6d'>HELPDESK TIKCET</p>
                                            <div className='flex-row align-items-center'>
                                                <p className='da-fs-34-bold warning'>34</p>
                                                <p className='fs-16 no-mb ml-10 color98'>5%</p>
                                                <p className='fs-16 no-mb ml-5'>increase</p>
                                            </div>
                                        </div>
                                        <Line 
                                            data={Data2}
                                            width={100}
                                            height={300}
                                            options={Options}
                                        />
                                    </div>
                                    <div className='relative'>
                                        <div className='da-absolute-chart-title-container'>
                                            <p className='da-fs-20-upper color6d'>LAST YEAR TOTAL SALES</p>
                                            <div className='flex-row align-items-center'>
                                                <p className='da-fs-34-bold fw-400 color98'>$</p>
                                                <p className='da-fs-34-bold primary color5d'>629</p>
                                                <DownOutlined className='da-icon-detail-performance primary ml-5' />
                                            </div>
                                        </div>
                                        <Line 
                                            data={Data3}
                                            width={100}
                                            height={300}
                                            options={Options}
                                        />
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                        
                    </CustomCardBody>
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
            <CustomCard className='mb-30'>
                <CustomCardHeader>
                    <CustomCardTitleText>Easy Dynamic Tables</CustomCardTitleText>
                </CustomCardHeader>
                <CustomCardBody>
                    <Table columns={Columns1} dataSource={DataTable1} />
                </CustomCardBody>
            </CustomCard> 
            <div className='grid-2-gap-30 mb-30'>
                <CustomCard>
                    <CustomCardHeader>
                        <CustomCardTitleText>Task List</CustomCardTitleText>
                    </CustomCardHeader>
                    <CustomCardBody>
                        <TaskListContainer className='da-tasklist' color='primary'>
                            <div className='da-task-list-container'>
                                <Checkbox></Checkbox>
                                <div className='flex-column'>
                                    <div className='flex-row'>
                                        <Text className='fw-bold color5d mr-10'>Wash the car</Text>
                                        <CustomLabelBadge color='danger'>
                                            Danger
                                        </CustomLabelBadge>
                                    </div>
                                    <Text className='color98'>Written by Bob</Text>
                                </div>
                                <div className='da-task-list-hidden flex-row justify-content-end'>
                                    <CustomButton className='mr-10' color='success' variant='solid' icon={<CheckOutlined />}/>
                                    <CustomButton className='mr-10' color='danger' variant='solid' icon={<DeleteOutlined />}/>
                                </div>
                            </div>
                        </TaskListContainer>
                        <TaskListContainer className='da-tasklist' color='warning'>
                            <div className='da-task-list-container'>
                                <Checkbox></Checkbox>
                                <div className='flex-column'>
                                    <div className='flex-row'>
                                        <Text className='fw-bold color5d mr-10'>Task with badge</Text>
                                    </div>
                                    <Text className='color98'>Show on hover actions !</Text>
                                </div>
                                <div className='flex-row justify-content-end'>
                                    <div className='da-task-list-hidden'>
                                        <CustomButton className='mr-10' color='success' variant='solid' icon={<CheckOutlined />}/>
                                    </div>
                                    <CustomLabelBadge color='success'>
                                        NEW
                                    </CustomLabelBadge>
                                </div>
                            </div>
                        </TaskListContainer>
                        <TaskListContainer className='da-tasklist' color='danger'>
                            <div className='da-task-list-container'>
                                <Checkbox></Checkbox>
                                <div className='flex-column'>
                                    <Text className='fw-bold color5d mr-10'>Development Task</Text>
                                    <Text className='color98'>Finish React ToDo AppList !</Text>
                                </div>
                                <div className='flex-row justify-content-end'>
                                    <CustomButton className='mr-10' color='success' variant='solid' icon={<CheckOutlined />}/>
                                    <CustomButton className='mr-10' color='danger' variant='solid' icon={<DeleteOutlined />}/>
                                </div>
                            </div>
                        </TaskListContainer>
                        <TaskListContainer className='da-tasklist' color='success'>
                            <div className='da-task-list-container'>
                                <Checkbox></Checkbox>
                                <div className='flex-column'>
                                    <div className='flex-row'>
                                        <Text className='fw-bold color5d mr-10'>Wash the car</Text>
                                        <CustomLabelBadge color='warning'>
                                            INFO
                                        </CustomLabelBadge>
                                    </div>
                                    <Text className='color98'>Written by Bob</Text>
                                </div>
                                <div className='da-task-list-hidden flex-row justify-content-end'>
                                    <CustomButton className='mr-10' color='success' variant='solid' icon={<CheckOutlined />}/>
                                    <CustomButton className='mr-10' color='danger' variant='solid' icon={<DeleteOutlined />}/>
                                </div>
                            </div>
                        </TaskListContainer>
                        <TaskListContainer className='da-tasklist' color='primary'>
                            <div className='da-task-list-container'>
                                <Checkbox></Checkbox>
                                <div className='flex-column'>
                                    <div className='flex-row'>
                                        <Text className='fw-bold color5d mr-10'>Task with Badge</Text>
                                        <CustomLabelBadge color='info'>
                                            NEW
                                        </CustomLabelBadge>
                                    </div>
                                    <Text className='color98'>Written by Silaladungka</Text>
                                </div>
                                <div className='flex-row justify-content-end'>
                                    <CustomButton className='mr-10' color='success' variant='solid' icon={<CheckOutlined />}/>
                                    <CustomButton className='mr-10' color='danger' variant='solid' icon={<DeleteOutlined />}/>
                                </div>
                            </div>
                        </TaskListContainer>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton color='link' variant='solid' className='mr-10'>Cancel</CustomButton>
                        <CustomButton color='primary' variant='solid'>Add Task</CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard>
                    <CustomCardHeader>
                        <CustomCardTitleText>Chat Box</CustomCardTitleText>
                    </CustomCardHeader>
                    <CustomCardBody>
                        <ChatBallon
                            className='dashboard-analytic-timeline-container'
                            chatlist={ChatList2}
                        />
                        <div className='text-input-chat-container'>
                            <Input placeholder='Write here and hit enter to send...' />
                        </div>
                    </CustomCardBody>
                </CustomCard>
            </div> 
            <div className='mb-30'>
                <ChartBoxGridContainer col={3} >
                    <ChartBoxVar3
                        defaultValue="1896"
                        defaultValueColor='success'
                        mainTitleText='Total Orders'
                        descriptionText='Last year expenses'
                        progressBarValue={80}
                        strokeWidth={6}
                        progressBarColor='primary'
                        descriptionProgressDetail='YoY Growth'
                    />   
                    <ChartBoxVar3
                        defaultValue="$568"
                        defaultValueColor='primary'
                        mainTitleText='Clients'
                        descriptionText='Total Clients Profit'
                        progressBarValue={50}
                        strokeWidth={6}
                        progressBarColor='warning'
                        descriptionProgressDetail='Retention'
                    />     
                    <ChartBoxVar3
                        defaultValue="$14M"
                        defaultValueColor='warning'
                        mainTitleText='Products Sold'
                        descriptionText='Total revenue streams'
                        progressBarValue={100}
                        strokeWidth={6}
                        progressBarColor='danger'
                        descriptionProgressDetail='Sales'
                    /> 
                    <ChartBoxVar3
                        defaultValue="46%"
                        defaultValueColor='danger'
                        mainTitleText='Followers'
                        descriptionText='Peple interested'
                        progressBarValue={40}
                        strokeWidth={6}
                        progressBarColor='success'
                        descriptionProgressDetail='Twitter Progress'
                    />  
                      <ChartBoxVar3
                        defaultValue="36%"
                        defaultValueColor='danger'
                        mainTitleText='Products Sold'
                        descriptionText='Total revenue streams'
                        progressBarValue={80}
                        strokeWidth={6}
                        progressBarColor='success'
                        descriptionProgressDetail='Sales'
                    /> 
                    <ChartBoxVar3
                        defaultValue="$23M"
                        defaultValueColor='primary'
                        mainTitleText='Followers'
                        descriptionText='Peple interested'
                        progressBarValue={90}
                        strokeWidth={6}
                        progressBarColor='warning'
                        descriptionProgressDetail='Twitter Progress'
                    />   
                </ChartBoxGridContainer>
            </div>
        </div>
    )
};

export default DashboardAnalyticVariation1;