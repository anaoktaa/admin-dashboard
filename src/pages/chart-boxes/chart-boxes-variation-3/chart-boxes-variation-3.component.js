import React from 'react';

import ChartBoxVar3 from 'Components/chart-box-var-3/chart-box-var-3.component';
import ChartBoxGridContainer from 'Components/chart-box-grid/chart-box-grid.component';

const ChartBoxesVariation3 = () => {
    return (
        <div>
            <div className='grid-3-gap-30 mb-30'>
                <ChartBoxVar3
                    defaultValue="1896"
                    defaultValueColor='success'
                    mainTitleText='Total Orders'
                    descriptionText='Last year expenses'
                />   
                <ChartBoxVar3
                    defaultValue="$568"
                    defaultValueColor='primary'
                    mainTitleText='Clients'
                    descriptionText='Total Clients Profit'
                />     
                <ChartBoxVar3
                    defaultValue="$14M"
                    defaultValueColor='warning'
                    mainTitleText='Products Sold'
                    descriptionText='Total revenue streams'
                /> 
                <ChartBoxVar3
                    defaultValue="46%"
                    defaultValueColor='danger'
                    mainTitleText='Followers'
                    descriptionText='Peple interested'
                />   
            </div>
            <div className='line mb-30'/>
            <div className='grid-3-gap-30 mb-30'>
                <ChartBoxVar3
                    defaultValue="1896"
                    defaultValueColor='gray'
                    mainTitleText='Total Orders'
                    mainTitleColor='white'
                    descriptionText='Last year expenses'
                    descriptionTextColor='white'
                    bgColor='linear-gradient(120deg,#e0c3fc,#8ec5fc)'
                />   
                <ChartBoxVar3
                    defaultValue="$568"
                    defaultValueColor='#fbfbfbe6'
                    mainTitleText='Clients'
                    mainTitleColor='white'
                    descriptionText='Total Clients Profit'
                    descriptionTextColor='#fbfbfbe6'
                    bgColor='linear-gradient(-20deg,#2b5876,#4e4376)'
                />     
                <ChartBoxVar3
                    defaultValue="$14M"
                    defaultValueColor='danger'
                    mainTitleText='Products Sold'
                    descriptionText='Total revenue streams'
                    descriptionTextColor='gray'
                    bgColor='linear-gradient(120deg,#f6d365,#fda085)'
                /> 
                <ChartBoxVar3
                    defaultValue="46%"
                    defaultValueColor='primary'
                    mainTitleText='Followers'
                    descriptionText='Peple interested'
                    bgColor='linear-gradient(120deg,#84fab0,#8fd3f4)'
                />   
            </div>
            <div className='line mb-30'/>
            <div className='grid-3-gap-30 mb-30'>
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
                    strokeWidth={15}
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
                    strokeWidth={10}
                    progressBarColor='success'
                    descriptionProgressDetail='Twitter Progress'
                />   
            </div>
            <div className='line mb-30'/>
            <div className='mb-30'>
                <ChartBoxGridContainer col={3}>
                    <ChartBoxVar3
                        defaultValue="1896"
                        defaultValueColor='success'
                        mainTitleText='Total Orders'
                        descriptionText='Last year expenses'
                    />   
                    <ChartBoxVar3
                        defaultValue="$568"
                        defaultValueColor='primary'
                        mainTitleText='Clients'
                        descriptionText='Total Clients Profit'
                    />     
                    <ChartBoxVar3
                        defaultValue="$14M"
                        defaultValueColor='warning'
                        mainTitleText='Products Sold'
                        descriptionText='Total revenue streams'
                    /> 
                </ChartBoxGridContainer>
            </div>
            <div className='line mb-30'/>
            <div className='mb-30'>
                <ChartBoxGridContainer col={3}>
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
                        strokeWidth={15}
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
                        strokeWidth={10}
                        progressBarColor='success'
                        descriptionProgressDetail='Twitter Progress'
                    />   
                </ChartBoxGridContainer>
            </div>
            <div className='grid-2-gap-30'>
                <ChartBoxGridContainer col={1} showBorder={true}>
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
                        strokeWidth={15}
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
                        strokeWidth={10}
                        progressBarColor='success'
                        descriptionProgressDetail='Twitter Progress'
                    />    
                </ChartBoxGridContainer>
                <ChartBoxGridContainer col={1} showBorder={true}>
                    <ChartBoxVar3
                        defaultValue="1896"
                        defaultValueColor='success'
                        mainTitleText='Total Orders'
                        descriptionText='Last year expenses'
                    />   
                    <ChartBoxVar3
                        defaultValue="$568"
                        defaultValueColor='primary'
                        mainTitleText='Clients'
                        descriptionText='Total Clients Profit'
                    />     
                    <ChartBoxVar3
                        defaultValue="$14M"
                        defaultValueColor='warning'
                        mainTitleText='Products Sold'
                        descriptionText='Total revenue streams'
                    /> 
                    <ChartBoxVar3
                        defaultValue="46%"
                        defaultValueColor='danger'
                        mainTitleText='Followers'
                        descriptionText='Peple interested'
                    />  
                </ChartBoxGridContainer>
            </div>
        </div>
    )
};

export default ChartBoxesVariation3;