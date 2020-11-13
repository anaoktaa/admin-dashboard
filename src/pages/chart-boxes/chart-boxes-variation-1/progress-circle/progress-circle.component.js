import React from 'react';

import ChartBoxVar1 from '../../../../components/chart-box-var-1/chart-box-var-1.component';

const ProgressCircle = () => {
    return (
        <div className='grid-3-gap-30 mb-30'>
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={100}
                progressBarColor='success'
                defaultValue='23k'
                defaultValueDescription='Total Views'
                progressValueArrow='up'
                progressValue='176%'
                progressValueColor='success'
            /> 
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={43}
                progressBarColor='primary'
                defaultValue='17k'
                defaultValueDescription='Profile'
                progressValueArrow='left'
                progressValue='136%'
                progressValueColor='warning'
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={80}
                progressBarColor='warning'
                defaultValue='5,83k'
                defaultValueDescription='Report Submitted'
                progressValueArrow='up'
                progressValue='54.1%'
                progressValueColor='primary'
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={100}
                progressBarColor='danger'
                defaultValue='62k'
                defaultValueDescription='Bugs Fixed'
                progressValueArrow='right'
                progressValue='175.5%'
                progressValueColor='info'
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={92}
                progressBarColor='info'
                defaultValue='2,82k'
                defaultValueDescription='Total Sales'
                progressValueArrow='down'
                progressValue='23.1%'
                progressValueColor='danger'
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={70}
                progressBarColor='alt'
                defaultValue='32k'
                defaultValueDescription='Follow Ups'
                progressValueArrow='left'
                progressValue='115.5%'
                progressValueColor='dark'
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={100}
                progressBarColor='success'
                defaultValue='23k'
                defaultValueDescription='Total Views'
                progressValueArrow='up'
                progressValue='176%'
                progressValueColor='success'
                zoom={true}
            /> 
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={43}
                progressBarColor='primary'
                defaultValue='17k'
                defaultValueDescription='Profile'
                progressValueArrow='left'
                progressValue='136%'
                progressValueColor='warning'
                zoom={true}
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={80}
                progressBarColor='warning'
                defaultValue='5,83k'
                defaultValueDescription='Report Submitted'
                progressValueArrow='up'
                progressValue='54.1%'
                progressValueColor='primary'
                zoom={true}
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={100}
                progressBarColor='danger'
                defaultValue='62k'
                defaultValueDescription='Bugs Fixed'
                progressValueArrow='right'
                progressValue='175.5%'
                progressValueColor='info'
                zoom={true}
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={92}
                progressBarColor='info'
                defaultValue='2,82k'
                defaultValueDescription='Total Sales'
                progressValueArrow='down'
                progressValue='23.1%'
                progressValueColor='danger'
                zoom={true}
            />
            <ChartBoxVar1
                variant='progress-circle'
                progressBarValue={70}
                progressBarColor='alt'
                defaultValue='32k'
                defaultValueDescription='Follow Ups'
                progressValueArrow='left'
                progressValue='115.5%'
                progressValueColor='dark'
                zoom={true}
            />
        </div>
    )
};

export default ProgressCircle;