import styled, {css } from 'styled-components';

import { colorsPalette } from '../custom-color/custom-color';

const zoom = css`
    &:hover {
        z-index: 10000;
        transform: scale(1.1);
        border-radius: 5px;
    }
`;

export const cboxzoom = props => {
    if (props.zoom) {
        return zoom;
    }
}

const borderCss = css`
    border-bottom: 1px solid #d6d6d6d6;
    &:not(:nth-child(${({col}) => col? (col)+'n' : 'n'})) {
        border-right: 1px solid #d6d6d6d6;
    }
    &:nth-last-child(${({col}) => col? '-n+'+(col): 'n'}) {
        border-bottom-width: 0;
    }
`;

const borderRadiusCss = css`
    &:first-child {
        border-top-left-radius: 5px;
    }
    &:nth-child(${({col}) => col? col : 0}) {
        border-top-right-radius: 5px;
    }
    &:nth-child(${({col, row}) => col? ((col*row) - (col-1)) : 0}) {
        border-bottom-left-radius: 5px;
    }
    &:last-child {
        border-bottom-right-radius: 5px;
    }
`;

export const borderStyled = props => {
    if (props.border) {
        return borderCss;
    }
}

export const ChartBox1Basic = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    align-items: center;
    justify-content:  center;
`;

export const ChartBoxVar1GridAlignment = styled.div`
    display: grid;
    grid-template-columns: ${({icon, progress}) => icon? ' 80px 1fr': progress? '90px 1fr': '1fr' };
    align-items: center;
    padding: 15px 20px;
`;

export const ChartBoxVar1Container = styled.div`
    background: ${({bgColor}) => colorsPalette[bgColor]? colorsPalette[bgColor] : bgColor }; 
    box-shadow: ${({boxShadow}) => boxShadow? '0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03)' : 'none'};
    border-radius: ${({borderRadius}) => borderRadius? '5px' : '0px'};
    align-items: center;
    transition: all .3s;
    transform: scale(1);
    ${cboxzoom};
    ${borderStyled};
    ${borderRadiusCss};
    position: relative;
`;   

export const ChartBoxVarIconContainer = styled.div`
    padding: 12px;
    border-radius : ${({iconContainerShape}) => iconContainerShape === 'circle'? '50%' : '3px'} ;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    background-color: ${({iconBgColor}) => colorsPalette[iconBgColor]? 'rgba('+colorsPalette[iconBgColor+'Rgb']+',.17)' : iconBgColor};
    color: ${({iconColor}) => colorsPalette[iconColor]? colorsPalette[iconColor] : iconColor};
`;

export const DefaultValueText = styled.p`
    margin: 3px 0 0;
    font-size: 32px;
    color: ${({defaultValueColor}) => colorsPalette[defaultValueColor]? colorsPalette[defaultValueColor]: defaultValueColor? defaultValueColor : '#505050'} ;
    font-weight: ${({normal}) => normal? '400': 'bold'};
`;

export const DefaultValueDescriptionText = styled.p`
    color: ${({defaultValueDescColor}) => defaultValueDescColor? defaultValueDescColor : '#929292'};
    margin-bottom: 6px;
`;

export const ProgressValueTextContainer = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: ${({justifyContent}) => justifyContent? justifyContent : 'center'};
    font-size: 14px;
    font-weight: 500;
    color: ${({progressValueColor}) => colorsPalette[progressValueColor]? colorsPalette[progressValueColor] : progressValueColor};

    span {
        margin-right: 2px;
    }
`;
