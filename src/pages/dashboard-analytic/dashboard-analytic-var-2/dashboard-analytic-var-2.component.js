import React from 'react';
import { Typography } from 'antd';
import { Line, Bar } from 'react-chartjs-2';
import { ScheduleOutlined, DownOutlined, AppstoreOutlined, QrcodeOutlined } from '@ant-design/icons';

import ChartBoxVar1 from 'Components/chart-box-var-1/chart-box-var-1.component';

import { Data5, Data2, Data4, Options, Options2, Options3 } from '../dashboard-analytic-var-1/dashboard-analytic.data';

const { Text } = Typography;

const DashboardAnalyticVariation2 = () => {
    return (
        <div>
            <div className='grid-3-gap-30'>
                <div className='da-box-chart-container-fixed'>
                    <ChartBoxVar1
                        icon={<ScheduleOutlined />}
                        iconBgColor='warning'
                        iconContainerShape='square'
                        iconColor='warning'
                        defaultValue='3M'
                        defaultValueDescription='Cash Deposit'
                        defaultValueDescColor='warning'
                        progressValueArrow='up'
                        progressValue='176%'
                        className='height-300'
                        progressValueColor='success'
                        chart={
                            <Line 
                                data={Data2}
                                height={240}
                                options={Options}
                            />
                        }
                    >
                        <Text className='fw-bold color5d'><span className='danger'><DownOutlined /> 54.1% </span> down last 30 days</Text>
                    </ChartBoxVar1>
                </div>
                <div className='da-box-chart-container-fixed'>
                    <ChartBoxVar1
                        icon={<AppstoreOutlined />}
                        iconBgColor='primary'
                        iconContainerShape='square'
                        iconColor='primary'
                        defaultValue='1M'
                        defaultValueDescription='Invested Dividents'
                        defaultValueDescColor='primary'
                        className='height-300'
                        chart={
                            <Bar 
                                data={Data5}
                                height={240}
                                options={Options3}
                        
                            />
                        }
                    >
                        <Text className='fw-bold color5d'>Compare to YoY <span className='info'><DownOutlined /> 14.1% </span></Text>
                    </ChartBoxVar1>
                </div>
                <div className='da-box-chart-container-fixed'>
                    <ChartBoxVar1
                        icon={<QrcodeOutlined />}
                        iconBgColor='danger'
                        iconContainerShape='square'
                        iconColor='danger'
                        defaultValue='2M'
                        defaultValueDescription='Withdrawals'
                        defaultValueDescColor='danger'
                        chart={
                            <Line 
                                data={Data4}
                                height={240}
                                options={Options2}
                            />
                        }
                    >
                        <Text className='fw-bold color5d'>Down by <span className='success'><DownOutlined /> 54.1% </span></Text>
                    </ChartBoxVar1>
                </div>
        
            </div>
        </div>
    )
};

export default DashboardAnalyticVariation2;