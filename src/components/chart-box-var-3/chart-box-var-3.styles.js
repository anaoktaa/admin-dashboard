import styled, { css } from 'styled-components';

import { colorsPalette } from '../custom-color/custom-color';

const borderCss = css`
    border-bottom: 1px solid #d6d6d6d6;
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
    &:nth-child(${({col, row}) => col? ((col*row) - (col-1)) : 1}) {
        border-bottom-left-radius: 5px;
    }
    &:last-child {
        border-bottom-right-radius: 5px;
    }
`;

const borderStyle = props => {
    if (props.showBorder) {
        return borderCss;
    }
}


export const ChartBoxVar3Container = styled.div`
    background: ${({bgColor}) => colorsPalette[bgColor]? colorsPalette[bgColor] : bgColor ?  bgColor : 'white' }; 
    box-shadow: ${({boxShadow}) => boxShadow? '0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03)' : 'none'};
    border-radius: ${({borderRadius}) => borderRadius? '5px' : '0px'};
    padding: 10px;
    height: fit-content;
    ${borderRadiusCss};
    ${borderStyle};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ChartBoxVar3Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(100px, .5fr); 
    width: ${({width}) => width? width : '100%'};
`;