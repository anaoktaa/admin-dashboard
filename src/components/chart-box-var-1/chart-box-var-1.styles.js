import styled, {css } from 'styled-components';

import { colorsPalette } from '../custom-color/custom-color';


const zoom = css`
    &:hover {
        transform: scale(1.1);
    }
`;

export const cboxzoom = props => {
    if (props.zoom) {
        return zoom;
    }
}

export const ChartBoxVar1Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 20px;
    background: ${({bgColor}) => bgColor? bgColor : '#fff' }; 
    box-shadow: 0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03);
    border-radius: 5px;
    align-items: center;
    transition: all .3s;
    transform: scale(1);
    ${cboxzoom};
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
    background-color: ${({iconBgColor}) => iconBgColor? iconBgColor: 'rgba('+colorsPalette.primaryRgb+',.17)'};
    color: ${({iconColor}) => iconColor? iconColor : colorsPalette.primary};
`;

export const DefaultValueText = styled.p`
    margin: 3px 0 0;
    font-size: 38px;
    color: ${({defaultValueColor}) => defaultValueColor? defaultValueColor: '#505050'} ;
    font-weight: bold;
`;

export const DefaultValueDescriptionText = styled.p`
    color: ${({defaultValueDescColor}) => defaultValueDescColor? defaultValueDescColor : '#929292'};
    margin-bottom: 6px;
`;

export const ProgressValueTextContainer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: ${({progressValueColor}) => colorsPalette[progressValueColor]? colorsPalette[progressValueColor] : progressValueColor};

    span {
        margin-right: 2px;
    }
`;