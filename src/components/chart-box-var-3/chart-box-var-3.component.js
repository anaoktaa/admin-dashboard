import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';

import { ChartBoxVar3Container, ChartBoxVar3Grid } from './chart-box-var-3.styles';
import { MainTitleText, DescriptionText, RightContainer,
         DescriptionProgressBarText,  } from '../chart-box-var-2/chart-box-var-2.styles';
import { DefaultValueText } from '../chart-box-var-1/chart-box-var-1.styles';

import { colorsPalette } from '../custom-color/custom-color';

const ChartBoxVar3 = ({ bgColor, boxShadow, borderRadius, defaultValue, mainTitleText,
                        descriptionText, mainTitleColor, descriptionTextColor,
                        defaultValueColor, strokeWidth, progressBarColor, width,
                        progressBarValue, descriptionProgressDetail, descriptionProgressBarColor, 
                        ...props }) => {
                        
    return (
        <ChartBoxVar3Container showBorder={props.showBorder} col={props.col} row={props.row} bgColor={bgColor} boxShadow={boxShadow} borderRadius={borderRadius}>
            <ChartBoxVar3Grid width={width}>
                <div className='flex-column justify-content-center'>
                    <MainTitleText mainTitleColor={mainTitleColor} className='fw-bold'>{mainTitleText}</MainTitleText>
                    {
                        descriptionText?
                            <DescriptionText descriptionTextColor={descriptionTextColor} >{descriptionText}</DescriptionText>: null
                    }
                   
                </div>
                <RightContainer>
                    <DefaultValueText defaultValueColor={defaultValueColor}>{defaultValue}</DefaultValueText>
                </RightContainer>
            </ChartBoxVar3Grid>
            {
                progressBarValue?
                    <div style={{width: width? width: '100%'}}>
                        <Progress 
                            strokeWidth={strokeWidth} 
                            strokeColor={`${colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor}`} 
                            percent={progressBarValue} 
                            status="active"
                            showInfo={false} />
                        <DescriptionProgressBarText descriptionProgressBarColor={descriptionProgressBarColor}>
                            {descriptionProgressDetail}
                        </DescriptionProgressBarText>
                    </div>
                    :
                    null
            }
        </ChartBoxVar3Container>
    )
};


export default ChartBoxVar3;


ChartBoxVar3.propTypes = {
    bgColor: PropTypes.string,
    boxShadow: PropTypes.bool,
    borderRadius: PropTypes.bool,
    mainTitleColor: PropTypes.string
};

ChartBoxVar3.defaultProps = {
    bgColor: 'white',
    boxShadow: true,
    borderRadius: true,
    mainTitleColor: '#737373',
    descriptionTextColor: '#949494',
    
};
