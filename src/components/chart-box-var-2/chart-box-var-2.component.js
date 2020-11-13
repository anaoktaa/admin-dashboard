import React from  'react';
import { Progress } from 'antd';
import { DownOutlined, UpOutlined, ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';

import { ChartBoxVar2Container, MainTitleText, DescriptionText, 
         DescriptionProgressText, RightContainer, ChartBoxGrid,
         DescriptionProgressBarText } from './chart-box-var-2.styles';
import { DefaultValueText } from '../chart-box-var-1/chart-box-var-1.styles';
import { colorsPalette } from '../custom-color/custom-color';

const ChartBoxVar2  = ({ bgColor, defaultValue, mainTitleText, mainTitleColor,
                         defaultValueColor, descriptionText, descriptionTextColor,
                         descriptionProgressValue, descriptionProgressColor,
                         descriptionProgressArrow, progressBarValue, progressBarColor,
                         trailColor, descriptionProgressBarColor, descriptionProgressDetail,
                         strokeWidth, ...props }) => {
    let ArrowIcon = null;  
    if (descriptionProgressArrow === 'up') {
        ArrowIcon = <UpOutlined />;     
    }
    else if (descriptionProgressArrow === 'down') {
        ArrowIcon = <DownOutlined />;
    }   
    else if (descriptionProgressArrow === 'left') {
        ArrowIcon = <ArrowLeftOutlined />;
    }   
    else if (descriptionProgressArrow === 'right') {
        ArrowIcon = <ArrowRightOutlined />;
    } 
    return (
        <ChartBoxVar2Container bgColor={bgColor}>
            <ChartBoxGrid>
                <div>
                    <MainTitleText mainTitleColor={mainTitleColor}>
                        {mainTitleText}
                    </MainTitleText>
                    <DefaultValueText normal={true} defaultValueColor={defaultValueColor}>
                        {defaultValue}
                    </DefaultValueText>
                </div>
                <RightContainer>
                    <DescriptionText descriptionTextColor={descriptionTextColor}>
                        {descriptionText}
                    </DescriptionText>
                    <DescriptionProgressText descriptionProgressColor={descriptionProgressColor}>
                        <span>{ArrowIcon}&nbsp;</span>
                        <span>{descriptionProgressValue} </span>
                    </DescriptionProgressText>
                    
                </RightContainer>
            </ChartBoxGrid>
            {
                progressBarValue?
                    <div>
                        <Progress strokeWidth={strokeWidth} strokeColor={`${colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor}`} percent={progressBarValue} status="active" showInfo={false} />
                        <DescriptionProgressBarText descriptionProgressBarColor={descriptionProgressBarColor}>
                            {descriptionProgressDetail}
                        </DescriptionProgressBarText>
                    </div>
                    :
                    null
            }
        </ChartBoxVar2Container>
    )
};

export default ChartBoxVar2;