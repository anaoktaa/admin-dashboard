import styled from 'styled-components';

import { colorsPalette } from '../custom-color/custom-color';

export const ChartBoxVar2Container = styled.div`
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03);
    border-radius: 5px;  
    background: ${({bgColor}) => colorsPalette[bgColor]? colorsPalette[bgColor] : bgColor? bgColor : 'white' }; 
    height: fit-content;
`;

export const ChartBoxGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(100px, 1fr) 1fr;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const MainTitleText = styled.p`
    color: ${({mainTitleColor}) => colorsPalette[mainTitleColor]? colorsPalette[mainTitleColor] : mainTitleColor? mainTitleColor : '#4a4a4a'};
    margin-bottom: 3px;
    font-size: 14px;
`;

export const DescriptionText = styled.p`
    color: ${({descriptionTextColor}) => colorsPalette[descriptionTextColor]? colorsPalette[descriptionTextColor] :descriptionTextColor?  descriptionTextColor : '#828282'};
    font-size: 14px;
    margin-bottom: 2px;
`;

export const DescriptionProgressBarText = styled.div`
    color: ${({descriptionProgressBarColor}) => colorsPalette[descriptionProgressBarColor]? colorsPalette[descriptionProgressBarColor] :descriptionProgressBarColor?  descriptionProgressBarColor : '#828282'};
    font-size: 14px;
    text-align: left;
    margin-bottom: 2px;
`;

export const DescriptionProgressText = styled.p`
    color: ${({descriptionProgressColor}) => colorsPalette[descriptionProgressColor]? colorsPalette[descriptionProgressColor] :descriptionProgressColor?  descriptionProgressColor : '#828282'};
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 3px;
`;


export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
