import React from 'react';
import PropTypes from 'prop-types';
import { DownOutlined, UpOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import { ChartBoxVar1Container, ChartBoxVarIconContainer, DefaultValueText,
         DefaultValueDescriptionText, ProgressValueTextContainer } from './chart-box-var-1.styles';

import './chart-box-var-1.styles.css';

const ChartBoxVar1 = ({ bgColor, bgGradient, zoom, variant, icon, iconColor, iconBgColor, iconContainerShape, defaultValue, defaultValueDescription,
                        progressValue, progressValueColor, progressValueArrow, defaultValueColor,
                        defaultValueDescColor, ...props }) => {
    
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

    return (
        <ChartBoxVar1Container bgColor={bgColor} zoom={zoom}>
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
            <ProgressValueTextContainer progressValueColor={progressValueColor}>
                <span>{ArrowIcon}</span>
                <span>{progressValue}</span>
            </ProgressValueTextContainer>
        </ChartBoxVar1Container>
    )
};

export default ChartBoxVar1;

ChartBoxVar1.propTypes = {
    variant: PropTypes.oneOf(['basic', 'grid', 'alignment', 'progress-circle']),
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
    defaultValueColor: PropTypes.string
};

ChartBoxVar1.defaultProps = {
    iconContainerShape: 'circle'
};