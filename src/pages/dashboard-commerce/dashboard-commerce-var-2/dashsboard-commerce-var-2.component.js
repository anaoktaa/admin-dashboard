import React, { useRef }  from 'react';
import { Typography, Avatar, Carousel, Table } from 'antd';
import { Line, Bar } from 'react-chartjs-2';
import { DownOutlined, UpOutlined, LeftOutlined, RightOutlined, ScheduleOutlined,
        SettingOutlined, DesktopOutlined, RocketOutlined, RobotOutlined, AlertOutlined, CrownOutlined,
        FireOutlined, ClearOutlined  } from '@ant-design/icons';

import CustomButton from 'Components/custom-button/custom-button.component';
import ChartBoxVar1 from 'Components/chart-box-var-1/chart-box-var-1.component';
import ChartBoxVar2 from 'Components/chart-box-var-2/chart-box-var-2.component';
import CustomLabelBadge from 'Components/custom-label-badge/custom-label-badge.component';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import ChartBoxGridContainer from 'Components/chart-box-grid/chart-box-grid.component';
import { CustomCard, CustomCardFooter, CustomCardBody, CustomCardHeader, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';

import { ChatList2 } from 'Pages/applications-chat/application-chat.data';

import { Data7, Data8, Data9, Data10, Data5 } from 'Data/chart.data';
import { Options6, Options4, Options5, Options3 } from 'Data/settings-chart.data';
import { DataTable2, Columns2, DataHighlights, Columns3 } from 'Data/table.data';
import '../dashboard-commerce.styles.css';

const { Title, Text } = Typography;

const DashboardCommerceVariation2 = () => {
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
            <div className='da-commerce-grid-2-2 mb-30'>
                <div className='width-100 overflow-auto'> 
                    <CustomCard className='mb-30'>
                        <CustomCardHeader>
                            <CustomCardTitleText>INCOME REPORT</CustomCardTitleText>
                        </CustomCardHeader>
                        <CustomCardBody>
                            <div style={{width: '100%', overflow: 'hidden'}}>
                                <Line 
                                    data={Data7}
                                    width={100}
                                    height={240}
                                    options={Options4}
                                />
                            </div>
                        </CustomCardBody>
                    </CustomCard>
                    <CustomCard>
                        <CustomCardBody>
                            <Title level={4} className='color6d mb-6'>Target Sales</Title>
                            <Title level={5} className='color98 fw-400 no-margin-no-padding'>Total performance for this Month</Title>
                            <ChartBoxGridContainer col={2} showBorder={false} showBoxShadow={false}>
                                <ChartBoxVar3
                                    defaultValue="1896"
                                    defaultValueColor='success'
                                    mainTitleText='Total Orders'
                                    progressBarValue={80}
                                    strokeWidth={6}
                                    progressBarColor='primary'
                                    descriptionProgressDetail='YoY Growth'
                                />   
                                <ChartBoxVar3
                                    defaultValue="$568"
                                    defaultValueColor='primary'
                                    mainTitleText='Clients'
                                    progressBarValue={50}
                                    strokeWidth={6}
                                    progressBarColor='warning'
                                    descriptionProgressDetail='Retention'
                                />     
                            </ChartBoxGridContainer>
                        </CustomCardBody>
                    </CustomCard>
                </div>
                <div className='flex-column overflow-hidden'>
                    <CustomCard className='mb-30'>
                        <CustomCardHeader>
                            <CustomCardTitleText>HIGHLIGHTS</CustomCardTitleText>
                            <CustomCardBody>
                                <div className='da-highlights-container '>
                                    {
                                        DataHighlights.map((item) => (
                                            <div className='da-highlights-item'>
                                                <div className='flex-row align-items-center'>
                                                    <Avatar className='mr-20' size={40} src={item.img} />
                                                    <div>
                                                        <p className='color6d no-margin-no-padding'>{item.name}</p>
                                                        <CustomLabelBadge pill color='primary'>
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
                            </CustomCardBody>
                        </CustomCardHeader>
                    </CustomCard> 
                    <CustomCard className='overflow-hidden mb-30'>
                        <CustomCardBody>
                            <Title level={4} className='primary mb-6'>Monthly Statistics</Title>
                            <div className='technical-support-container flex-column align-items-center justify-content-center'>
                                <button className='button-navigation button-prev' onClick={()=>gotoPrev()}>
                                    <LeftOutlined />
                                </button>
                                <button className='button-navigation button-next' onClick={()=>gotoNext()}>
                                    <RightOutlined />
                                </button>
                                <div style={{width: '100%'}}>
                                    <Carousel {...sliderSettings} ref={customeSlider}>
                                        <div>
                                            <div>
                                                <div className='flex-row align-items-center'>
                                                    <p className='da-fs-34-bold color5d mr-10'>$568</p>
                                                    <p className='color98 no-margin-no-padding'>Total Expanses Today</p>
                                                </div>
                                            </div>
                                            <Bar 
                                                data={Data8}
                                                height={120}
                                                options={Options5}
                                            />
                                        </div>
                                        <div>
                                            <div>
                                                <div className='flex-row align-items-center'>
                                                    <p className='da-fs-34-bold color5d mr-10'>$1025</p>
                                                    <p className='color98 no-margin-no-padding'>Revenue increase this quarter</p>
                                                </div>
                                            </div>
                                            <Line 
                                                data={Data9}
                                                height={120}
                                                options={Options6}
                                            />
                                        </div>
                                        <div>
                                            <div>
                                                <div className='flex-row align-items-center'>
                                                    <p className='da-fs-34-bold color5d mr-10'>$103M</p>
                                                    <p className='color98 no-margin-no-padding'>Total Sales this Month</p>
                                                </div>
                                            </div>
                                            <Line 
                                                data={Data10}
                                                height={120}
                                                options={Options6}
                                            />
                                        </div>
                                  
                                    </Carousel>
                                </div>
                            </div>
                            
                        </CustomCardBody>
                    </CustomCard>  
                </div>
            </div>
            <CustomCard className='mb-30'>
                <CustomCardHeader>
                    <CustomCardTitleText>Easy Dynamic Tables</CustomCardTitleText>
                </CustomCardHeader>
                <CustomCardBody className='overflow-auto'>
                    <Table columns={Columns3} dataSource={DataTable2} />
                </CustomCardBody>
            </CustomCard> 
            <div className='grid-2-gap-30'>
                <div className='da-box-chart-container-fixed'>
                    <ChartBoxVar1
                        bgColor="linear-gradient(-20deg,#2b5876,#4e4376)"
                        icon={<ScheduleOutlined />}
                        iconBgColor='#ffffffd4'
                        iconColor='primary'
                        defaultValue='3M'
                        defaultValueColor='white'
                        defaultValueDescription='Cash Deposit'
                        defaultValueDescColor='white'
                        progressValueArrow='up'
                        progressValue='176%'
                        bgOverlay='transparent'
                        progressValueColor='white'
                        chart={
                            <div style={{paddingTop: '100px'}}>
                                 <Bar 
                                    data={Data5}
                                    height={240}
                                    options={Options3}
                                />
                            </div>
                        }
                    >
                        <Text className='fw-bold white'><span className='white'><DownOutlined /> 54.1% </span> down last 30 days</Text>
                    </ChartBoxVar1>
                </div>
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
    downIcon: {
        fontSize: '11px',
        marginLeft: '10px'
    }
}

export default DashboardCommerceVariation2;