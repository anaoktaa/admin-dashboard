import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { DownOutlined, UpOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { ChartBoxVarIconContainer, DefaultValueText,
         DefaultValueDescriptionText, ProgressValueTextContainer, ChartBoxVar1Container,
         ChartBoxVar1GridAlignment, ChartBox1Basic } from './chart-box-var-1.styles';
import { colorsPalette } from '../custom-color/custom-color';
import './chart-box-var-1.styles.css';

const ChartBoxVar1 = ({ bgColor, zoom, variant, icon, iconColor, iconBgColor, iconContainerShape, defaultValue, defaultValueDescription,
                        progressValue, progressValueColor, progressValueArrow, defaultValueColor,
                        defaultValueDescColor, border, boxShadow, borderRadius, col,
                        progressBarValue, progressBarColor, trailColor, children,
                        chart, bgOverlay, className, ...props }) => {
    
    let ArrowIcon = null;  
    if (progressValueArrow === 'up') {
        ArrowIcon = <UpOutlined />;     
    }
    else if (progressValueArrow === 'down') {
        ArrowIcon = <DownOutlined />;
    }   
    else if (progressValueArrow === 'left') {
        ArrowIcon = <ArrowLeftOutlined />;
    }   
    else if (progressValueArrow === 'right') {
        ArrowIcon = <ArrowRightOutlined />;
    }                
    
    const ChartBoxBasic1Const =  () => (
        <ChartBox1Basic className={className} >
            {
                icon?
                <ChartBoxVarIconContainer iconContainerShape={iconContainerShape} iconColor={iconColor} iconBgColor={iconBgColor}>
                    {icon}
                </ChartBoxVarIconContainer>
                :
                null
            }   
            <DefaultValueText defaultValueColor={defaultValueColor}>
                {defaultValue}
            </DefaultValueText>
            <DefaultValueDescriptionText defaultValueDescColor={defaultValueDescColor}>
                {defaultValueDescription}
            </DefaultValueDescriptionText >
            {
                children?
                <div>
                    {children}
                </div>
                :
                <ProgressValueTextContainer progressValueColor={progressValueColor}>
                    <span>{ArrowIcon}</span>
                    <span>{progressValue}</span>
                </ProgressValueTextContainer>
            }
        </ChartBox1Basic>   
    );

    if (variant === 'basic') {
        console.log("border radius", borderRadius)
        return (
            <ChartBoxVar1Container className={className} row={props.row} col={col} border={border} boxShadow={boxShadow} borderRadius={borderRadius} bgColor={bgColor} zoom={zoom}>
                {
                    chart?
                    <div className='overflow-hidden'>
                        <div className='chart-box-graph-container'>
                            <div style={{overflow: 'hidden'}}>
                                {chart}
                            </div>
                            <div style={{backgroundColor: bgOverlay? bgOverlay : '#ffffffb0'}} className='chart-box-graph-overlay'/>
                            <div className='chart-box-detail-container'>
                                <ChartBoxBasic1Const/> 
                                {
                                    progressBarValue?
                                        <Progress strokeColor={`${colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor}`} className='progression-bar-style' percent={progressBarValue} status="active" showInfo={false} />
                                        :
                                        null
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <ChartBoxBasic1Const/>
                        {
                            progressBarValue?
                                <Progress strokeColor={`${colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor}`} className='progression-bar-style' percent={progressBarValue} status="active" showInfo={false} />
                                :
                                null
                        }
                    </div>

                }
            </ChartBoxVar1Container>
           
        )
    }
    else if (variant === 'alignment') {
        return (
            <ChartBoxVar1Container {...props} row={props.row} col={col} border={border} boxShadow={boxShadow} borderRadius={borderRadius} bgColor={bgColor} zoom={zoom}>
                    <ChartBoxVar1GridAlignment icon={icon} >
                    {
                        icon?
                        <ChartBoxVarIconContainer iconContainerShape={iconContainerShape} iconColor={iconColor} iconBgColor={iconBgColor}>
                            {icon}
                        </ChartBoxVarIconContainer>
                        :
                        null
                    } 
                    <div>
                        <DefaultValueDescriptionText style={{marginBottom: 0}} defaultValueDescColor={defaultValueDescColor}>
                            {defaultValueDescription}
                        </DefaultValueDescriptionText >
                        <DefaultValueText style={{lineHeight: 1}} defaultValueColor={defaultValueColor}>
                            {defaultValue}
                        </DefaultValueText>
                        {
                            children?
                            <div>{children}</div>
                            :
                            <ProgressValueTextContainer justifyContent='flex-start' progressValueColor={progressValueColor}>
                                <span>{ArrowIcon}</span>
                                <span>{progressValue}</span>
                            </ProgressValueTextContainer>
                        }
                       
                    </div>
                </ChartBoxVar1GridAlignment>
                {
                    progressBarValue?
                        <Progress strokeColor={`${colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor}`} className='progression-bar-style' percent={progressBarValue} status="active" showInfo={false} />
                        :
                        null
                }
            </ChartBoxVar1Container>
        )
    }
    else if (variant === 'progress-circle') {
        return (
            <ChartBoxVar1Container className={className} row={props.row} col={col} border={border} boxShadow={boxShadow} borderRadius={borderRadius} bgColor={bgColor} zoom={zoom}>
                <ChartBoxVar1GridAlignment progress={true} >
                    <div>
                        <Progress status={progressBarColor === 'danger'? 'exception' : null }  strokeColor={colorsPalette[progressBarColor] ? colorsPalette[progressBarColor] : progressBarColor} trailColor={trailColor} percent={progressBarValue} type="circle" width={70} />
                    </div>
                    <div>
                        <DefaultValueDescriptionText style={{marginBottom: 0}} defaultValueDescColor={defaultValueDescColor}>
                            {defaultValueDescription}
                        </DefaultValueDescriptionText >
                        <DefaultValueText style={{lineHeight: 1}} defaultValueColor={defaultValueColor}>
                            {defaultValue}
                        </DefaultValueText>
                        {
                            children?
                            <div>
                                {children}
                            </div>
                            :
                            <ProgressValueTextContainer justifyContent='flex-start' progressValueColor={progressValueColor}>
                                <span>{ArrowIcon}</span>
                                <span>{progressValue}</span>
                            </ProgressValueTextContainer>
                        }
                   
                    </div>
                </ChartBoxVar1GridAlignment>
                
            </ChartBoxVar1Container>
        )
    }
    else {
        return <div/>
    }

};

export default ChartBoxVar1;

ChartBoxVar1.propTypes = {
    variant: PropTypes.oneOf(['basic', 'alignment', 'progress-circle']).isRequired,
    iconContainerShape: PropTypes.oneOf(['square', 'circle']),
    icon: PropTypes.elementType,
    iconColor: PropTypes.string,
    iconBgColor: PropTypes.string,
    defaultValue: PropTypes.string,
    defaultValueDescription: PropTypes.string,
    progressValue: PropTypes.string,
    progressValueColor: PropTypes.oneOf(['primary','secondary','link','danger','success','info','warning','dark','light']),
    progressValueArrow: PropTypes.oneOf(['up', 'down', 'left', 'right']),
    zoom: PropTypes.bool,
    defaultValueDescColor: PropTypes.string,
    defaultValueColor: PropTypes.string,
    bgColor: PropTypes.string,
    border: PropTypes.bool,
    boxShadow: PropTypes.bool,
    borderRadius: PropTypes.bool,
    col: PropTypes.number,
    progressBarValue: PropTypes.number,
    progressBarColor: PropTypes.string
};

ChartBoxVar1.defaultProps = {
    variant: 'basic',
    iconContainerShape: 'circle',
    bgColor: 'white',
    border: false,
    boxShadow:  true,
    borderRadius: true
    
};