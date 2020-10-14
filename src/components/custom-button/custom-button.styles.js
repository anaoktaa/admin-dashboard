import styled, { css } from 'styled-components';
import { colorsPalette } from '../custom-color/custom-color';

/*Solid Style */
const solid = css`
    background-color: ${({color}) => color? colorsPalette[color] : '#ededed'};
    color: ${({color}) => color? colorsPalette[color+'Text'] : '#000'};
    border: 1px solid ${({color}) => color? colorsPalette[color] : '#ededed'};
`;

const solidVariant = css`
    ${solid};
    &:hover {
        background-color: ${({color}) => color? colorsPalette[color+'Dark'] : '#ededed'};
        text-decoration:  ${({color}) => color === 'link' ? 'underline': 'none'};
    }
`;

const disabledSolid = css`
    ${solid};
    opacity: .75;
    cursor: default;
`;

/*Outlined Style */
const outlined = css`
    background-color: white;
    border : ${({variant}) => variant === 'outlined' || variant === 'dashed'? '1px' : '2px'} 
            ${({variant}) => variant === 'outlined' || variant === 'outlined-2x'? 'solid' : 'dashed'}  
            ${({color}) =>  color? colorsPalette[color] : '#ededed'};
    color:  ${({color}) =>  color !== 'link'? colorsPalette[color] : colorsPalette[color+'Text']};
`;

const disabledOutlined = css`
    ${outlined};
    opacity: .6;
    cursor: default;
`;

const outlinedVariant = css`
    ${outlined};
    &:hover {
        background-color: ${({color}) => color? colorsPalette[color] : '#ededed'};
        color: ${({color}) => color? colorsPalette[color+'Text'] : '#000'};
        text-decoration:  ${({color}) => color === 'link' ? 'underline': 'none'};
    }
`;

/*No border */
const noOutlinedVariant = css`
    background-color: white;
    color:  ${({color}) =>  color !== 'link'? colorsPalette[color] : colorsPalette[color+'Text']};

    &:hover {
        background-color: ${({color}) => color? colorsPalette[color] : '#ededed'};
        color: ${({color}) => color? colorsPalette[color+'Text'] : '#000'};
        text-decoration:  ${({color}) => color === 'link' ? 'underline': 'none'};
    }
`;

const styledForButton = props => {
    if (props.variant === 'solid') {
        if (props.disabled) {
            return disabledSolid;
        }
        return solidVariant;
    }
    else if (props.variant === 'outlined' || props.variant === 'outlined-2x' || props.variant === 'dashed') {
        if (props.disabled) {
            return disabledOutlined;
        }
        else if (props.active) {
            return solid;
        }   
        return outlinedVariant;
    }
    else if (props.variant === 'no-outlined') {
        return noOutlinedVariant;   
    }
}

const blockStyle = css`
    display: block;
    width: 100%;
`;

const small = css`
    padding-top: 3px;
    padding-bottom : 3px;
`;

const normal = css`
    padding-top: 5px;
    padding-bottom: 5px;
`;

const large = css`
    padding-top: 8px;
    padding-bottom: 8px;
`;

const smallWide = css`
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
`;


const normalWide = css`
    padding-left: 20px;
    padding-right: 20px;
`;


const largeWide = css`
    padding-left: 30px;
    padding-right: 30px;
    font-size: 20px;
`;

const sizeButton = props => {
    if (props.size === 'small') {
        return small;
    }
    else if (props.size === 'large') {
        return large;
    }
    return normal;
}


const wideButton = props => {
    if (props.wide === 'small') {
        return smallWide;
    }
    else if (props.wide === 'large') {
        return largeWide;
    }
    return normalWide;
}


export const CustomButtonStyled = styled.button`
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    height: fit-content;
    box-sizing: border-box;
    ${wideButton};
    ${sizeButton};
    ${styledForButton};
    ${({block}) => block? blockStyle : null};
`;