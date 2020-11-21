import React from 'react';

import ChartBoxVar2 from 'Components/chart-box-var-2/chart-box-var-2.component';

const Colors = () => {
    return (
        <div className='grid-3-gap-30 mb-30'>
            <ChartBoxVar2
                defaultValue="$1283"
                defaultValueColor='white'
                mainTitleText='Sales'
                mainTitleColor='white'
                descriptionText='Monthly Goals'
                descriptionTextColor='#d2d2d2'
                descriptionProgressValue='176%'
                descriptionProgressColor='#d2d2d2'
                descriptionProgressArrow='up'
                bgColor='primary'
            />
            <ChartBoxVar2
                defaultValue="368k"
                defaultValueColor='white'
                mainTitleText='Profiles'
                mainTitleColor='white'
                descriptionText='Active Users'
                descriptionTextColor='#eaeaea'
                descriptionProgressValue='66.5%'
                descriptionProgressColor='#eaeaea'
                descriptionProgressArrow='left'
                bgColor='info'
            />
            <ChartBoxVar2
                defaultValue="87%"
                defaultValueColor='white'
                mainTitleText='Clients'
                mainTitleColor='white'
                descriptionText='Returning'
                descriptionTextColor='warning'
                descriptionProgressValue='45'
                descriptionProgressColor='warning'
                descriptionProgressArrow='up'
                bgColor='#444054'
            />
            <ChartBoxVar2
                defaultValue="1,621"
                defaultValueColor='white'
                mainTitleText='Reports'
                mainTitleColor='white'
                defaultValueColor='white'
                descriptionText='Bugs Fixed'
                descriptionTextColor='white'
                descriptionProgressValue='27.2%'
                descriptionProgressColor='white'
                descriptionProgressArrow='right'
                bgColor='warning'
            />
            <ChartBoxVar2
                defaultValue="183"
                defaultValueColor='white'
                mainTitleText='Support Requests'
                mainTitleColor='white'
                descriptionText='Solved'
                descriptionTextColor='white'
                descriptionProgressValue='32'
                descriptionProgressColor='white'
                descriptionProgressArrow='down'
                bgColor='danger'
            />
            <ChartBoxVar2
                defaultValue="1,621"
                defaultValueColor='white'
                mainTitleText='Reports'
                mainTitleColor='white'
                descriptionText='Bugs Fixed'
                descriptionTextColor='white'
                descriptionProgressValue='17.2%'
                descriptionProgressColor='white'
                descriptionProgressArrow='right'
                bgColor='#2a5298'
            />
             <ChartBoxVar2
                defaultValue="$1283"
                mainTitleText='Sales'
                descriptionText='Monthly Goals'
                descriptionTextColor='white'
                descriptionProgressValue='176%'
                descriptionProgressColor='white'
                descriptionProgressArrow='up'
                progressBarValue={100}
                strokeWidth={10}
                progressBarColor='danger'
                descriptionProgressDetail='Successful Payments'
                bgColor='linear-gradient(120deg,#e0c3fc,#8ec5fc)'
            />
            <ChartBoxVar2
                defaultValue="368k"
                defaultValueColor='white'
                mainTitleText='Profiles'
                mainTitleColor='white'
                descriptionText='Active Users'
                descriptionTextColor='white'
                descriptionProgressValue='66.5%'
                descriptionProgressColor='white'
                descriptionProgressArrow='left'
                progressBarValue={60}
                strokeWidth={10}
                progressBarColor='warning'
                descriptionProgressDetail='Monthly Subscribers'
                descriptionProgressBarColor='white'
                bgColor='linear-gradient(-20deg,#2b5876,#4e4376)'
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
                progressBarColor='primary'
                descriptionProgressDetail='Severe Reports'
                bgColor='linear-gradient(120deg,#f6d365,#fda085)'
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
                bgColor='linear-gradient(120deg,#84fab0,#8fd3f4)'
            />
            <ChartBoxVar2
                defaultValue="183"
                defaultValueColor='danger'
                mainTitleText='Support Requests'
                descriptionText='Solved'
                descriptionProgressValue='32'
                descriptionProgressArrow='down'
                progressBarValue={100}
                progressBarColor='danger'
                strokeWidth={18}
                descriptionProgressDetail='Monthly Subscribers'
                bgColor='linear-gradient(45deg,#ff9a9e,#fad0c4 99%,#fad0c4)'
            />
            <ChartBoxVar2
                defaultValue="1,621"
                mainTitleText='Reports'
                mainTitleColor='white'
                defaultValueColor='success'
                descriptionText='Bugs Fixed'
                descriptionTextColor='white'
                descriptionProgressValue='17.2%'
                descriptionProgressColor='white'
                descriptionProgressArrow='right'
                progressBarValue={80}
                progressBarColor='success'
                strokeWidth={13}
                descriptionProgressDetail='Severe Reports'
                descriptionProgressBarColor='white'
                bgColor='linear-gradient(90deg,#0f2027,#203a43,#2c5364)'
            />
        </div>
    )
};

export default Colors;