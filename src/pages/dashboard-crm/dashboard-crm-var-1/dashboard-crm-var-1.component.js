import React from 'react';
import { Line } from 'react-chartjs-2';
import { Typography } from 'antd';

import { CustomCard, BorderBottomCard, CustomCardBody, CustomCardHeader } from 'Components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from 'Components/custom-card/custom-card-header-with-image.component';
import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';


import { Data1, Data2, Data3 } from 'Data/chart.data';
import { Options6 } from 'Data/settings-chart.data';
import { DataTable1, Columns1 } from 'Data/table.data';

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
            <div className='grid-2-gap-30'>
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
                <div>
                    <CustomCard>
                        <CustomCardHeader>Bandwidth Reports</CustomCardHeader>
                        <CustomCardBody>
                            <div className='grid-2-gap-30'>
                                <div>
                                    <Title level={3} className='fw-bold color5d no-margin-no-padding'>63%</Title>
                                    <Title level={5} className='color98 fw-400 no-margin-no-padding'>Server errors</Title>
                                </div>
                                <div>
                                    <Title level={3} className='fw-bold color5d no-margin-no-padding'>$ 1893</Title>
                                    <Title level={5} className='color98 fw-400 no-margin-no-padding'>Server errors</Title>
                                </div>
                            </div>
                        </CustomCardBody>
                    </CustomCard>
                </div>
            </div>
        </div>
    )
};

export default DashboardCrmVariation1;

const ChartBox3Data = [
    {
        id: 1,
        defaultValue: '1896',
        defaultValueColor: 'succcess',
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
    }
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
]
