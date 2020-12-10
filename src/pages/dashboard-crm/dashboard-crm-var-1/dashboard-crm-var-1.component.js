import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography, Progress, Table, Avatar } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

import { CustomCard, BorderBottomCard, CustomCardBody, CustomCardHeader, CustomCardFooter } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';
import { colorsPalette } from 'Components/custom-color/custom-color';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import CustomButton from 'Components/custom-button/custom-button.component';

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

const BandwidthReportData = [
    {
        id: 1,
        valueDetail: {
            value: '63%',
        },
        description: 'Server Errors'
    },
    {
        id: 2,
        valueDetail: {
            value: '63%',
        },
        description: 'Total Income'
    },
    {
        id: 3,
        valueDetail: {
            value: '61%',
            color: 'alt'
        },
        description: 'Server Target',
        progress : {
            value: 61,
            color: 'alt'
        }
    },
    {
        id: 4,
        valueDetail: {
            value: '71%',
            color: 'danger'
        },
        description: 'Income Target',
        progress : {
            value: 71,
            color: 'danger'
        }
    },
]

const ChartBox3Data = [
    {
        id: 1,
        defaultValue: '1896',
        defaultValueColor: 'success',
        mainTitleText: "Total Orders",
        descriptionText: 'Last year expenses',
        progressBarValue: 80,
        strokeWidth: 8,
        progressBarColor: 'primary',
        descriptionProgressDetail: 'YoY Growth'
    },
    {
        id: 2,
        defaultValue: '$14M',
        defaultValueColor: 'warning',
        mainTitleText : 'Products Sold',
        descriptionText: 'Total revenue streams',
        progressBarValue: 90,
        strokeWidth: 8,
        progressBarColor: 'danger',
        descriptionProgressDetail :'Sales'
    },
    {
        id: 3,
        defaultValue: '$568',
        defaultValueColor: 'danger',
        mainTitleText : 'Followers',
        descriptionText : 'People Interested',
        progressBarValue: 40,
        strokeWidth : 8,
        progressBarColor : 'success',
        descriptionProgressDetail :'Twitter Progress'
    }
];


const DataChart = {
    data1: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [230, 202, 312, 340, 291, 165, 320, 290, 563, 420, 281, 219],
            backgroundColor: 'transparent',
            borderColor: '#3ac47d',
            borderWidth: 3,  
        }]
        
    },
    data2: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [165, 230, 260, 463, 420, 481, 319, 320, 302, 312, 340, 291],
            backgroundColor: 'transparent',
            borderColor: '#545cd8',
            borderWidth: 3,  
        }]
    },
    data3: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [290, 202, 312, 240, 291, 165, 320, 256, 563, 420, 431, 389],
            backgroundColor: 'transparent',
            borderColor: '#f7b924',
            borderWidth: 3,  
        }]
        
    },
    data4: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [230, 277, 300, 263, 220, 481, 311, 320, 302, 412, 340, 391],
            backgroundColor: 'transparent',
            borderColor: '#d92550',
            borderWidth: 3,  
        }]
    },
    data5: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [290, 242, 312, 250, 291, 185, 320, 256, 363, 320, 331, 389],
            backgroundColor: '#fdeabc',
            borderColor: '#f5bf3c',
            borderWidth: 6,  
        }]
    },
    data6: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [290, 282, 302, 295, 291, 285, 320, 256, 363, 320, 331, 320],
            backgroundColor: '#e3e4f3',
            borderColor: '#9298f1',
            borderWidth: 3,  
        }]
    },
    data7: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'New Accounts',
            data: [260, 252, 252, 265, 291, 285, 240, 256, 263, 320, 300, 309],
            backgroundColor: '#f3e3e7',
            borderColor: '#d92550',
            borderWidth: 3,  
        }]
    },
}

const DataChartComponentList = [
    {
        id: 1,
        value: 874,
        description: 'Sales last month',
        graphData: DataChart.data1,
        borderColor: 'success'    
    },
    {
        id: 2,
        value: 1283,
        description: 'Sales income',
        graphData: DataChart.data2,
        borderColor: 'primary'  
    },
    {
        id: 3,
        value: 1286,
        description: 'Last month sales',
        graphData: DataChart.data3,
        borderColor: 'warning'  
    },
    {
        id: 4,
        value: 564,
        description: 'Total revenue',
        graphData: DataChart.data4,
        borderColor: 'danger'  
    },
];

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
