import React from 'react';

import ChartBoxVar2 from '../../../../components/chart-box-var-2/chart-box-var-2.component';

const Basic = () => {
    return (
        <div className='grid-3-gap-30 mb-30'>
            <ChartBoxVar2
                defaultValue="$1283"
                mainTitleText='Sales'
                descriptionText='Monthly Goals'
                descriptionProgressValue='176%'
                descriptionProgressColor='success'
                descriptionProgressArrow='up'
            />
            <ChartBoxVar2
                defaultValue="368k"
                defaultValueColor='primary'
                mainTitleText='Profiles'
                descriptionText='Active Users'
                descriptionTextColor='warning'
                descriptionProgressValue='66.5%'
                descriptionProgressColor='warning'
                descriptionProgressArrow='left'
            />
            <ChartBoxVar2
                defaultValue="87%"
                mainTitleText='Clients'
                descriptionText='Returning'
                descriptionTextColor='danger'
                descriptionProgressValue='45'
                descriptionProgressColor='danger'
                descriptionProgressArrow='up'
            />
            <ChartBoxVar2
                defaultValue="1,621"
                mainTitleText='Reports'
                defaultValueColor='warning'
                descriptionText='Bugs Fixed'
                descriptionProgressValue='27.2%'
                descriptionProgressColor='info'
                descriptionProgressArrow='right'
            />
            <ChartBoxVar2
                defaultValue="183"
                defaultValueColor='danger'
                mainTitleText='Support Requests'
                descriptionText='Solved'
                descriptionTextColor='success'
                descriptionProgressValue='32'
                descriptionProgressColor='success'
                descriptionProgressArrow='down'
            />
            <ChartBoxVar2
                defaultValue="1,621"
                mainTitleText='Reports'
                defaultValueColor='success'
                descriptionText='Bugs Fixed'
                descriptionProgressValue='17.2%'
                descriptionProgressColor='info'
                descriptionProgressArrow='right'
            />
             <ChartBoxVar2
                defaultValue="$1283"
                mainTitleText='Sales'
                descriptionText='Monthly Goals'
                descriptionProgressValue='176%'
                descriptionProgressColor='success'
                descriptionProgressArrow='up'
                progressBarValue={100}
                strokeWidth={10}
                progressBarColor='danger'
                descriptionProgressDetail='Successful Payments'
            />
            <ChartBoxVar2
                defaultValue="368k"
                defaultValueColor='primary'
                mainTitleText='Profiles'
                descriptionText='Active Users'
                descriptionTextColor='warning'
                descriptionProgressValue='66.5%'
                descriptionProgressColor='warning'
                descriptionProgressArrow='left'
                progressBarValue={60}
                strokeWidth={10}
                progressBarColor='primary'
                descriptionProgressDetail='Monthly Subscribers'
            />
            <ChartBoxVar2
                defaultValue="87%"
                mainTitleText='Clients'
                descriptionText='Returning'
                descriptionTextColor='danger'
                descriptionProgressValue='45'
                descriptionProgressColor='danger'
                descriptionProgressArrow='up'
                progressBarValue={90}
                strokeWidth={10}
                progressBarColor='warning'
                descriptionProgressDetail='Severe Reports'
            />
            <ChartBoxVar2
                defaultValue="1,621"
                mainTitleText='Reports'
                defaultValueColor='warning'
                descriptionText='Bugs Fixed'
                descriptionProgressValue='27.2%'
                descriptionProgressColor='info'
                descriptionProgressArrow='right'
                progressBarValue={70}
                strokeWidth={15}
                progressBarColor='primary'
                descriptionProgressDetail='Successful Payments'
            />
            <ChartBoxVar2
                defaultValue="183"
                defaultValueColor='danger'
                mainTitleText='Support Requests'
                descriptionText='Solved'
                descriptionTextColor='success'
                descriptionProgressValue='32'
                descriptionProgressColor='success'
                descriptionProgressArrow='down'
                progressBarValue={100}
                progressBarColor='danger'
                strokeWidth={18}
                descriptionProgressDetail='Monthly Subscribers'
            />
            <ChartBoxVar2
                defaultValue="1,621"
                mainTitleText='Reports'
                defaultValueColor='success'
                descriptionText='Bugs Fixed'
                descriptionProgressValue='17.2%'
                descriptionProgressColor='info'
                descriptionProgressArrow='right'
                progressBarValue={80}
                progressBarColor='success'
                strokeWidth={13}
                descriptionProgressDetail='Severe Reports'
            />
        </div>
    )
};

export default Basic;