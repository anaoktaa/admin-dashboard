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
        text-decoration:  ${(props) => props.color === 'link' && !props.icon ? 'underline': 'none'};
        box-shadow: none;
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
        box-shadow: none;
    }
`;

/*No border */
const noOutlinedVariant = css`
    background-color: white;
    color:  ${({color}) =>  color !== 'link'? colorsPalette[color] : 'grey'};

    &:hover {
        background-color: ${({color}) => color !== 'link'? colorsPalette[color] : colorsPalette.linkDark};
        color: ${({color}) => color? colorsPalette[color+'Text'] : '#000'};
        text-decoration:  ${(props) => props.color === 'link' && !props.icon ? 'underline': 'none'};
        box-shadow: none;
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
    padding-left: ${(props) => props.icon? '5px' : '10px'};
    padding-right: ${(props) => props.icon? '5px' : '10px'};
    font-size: 12px;
`;

const normalWide = css`
    padding-left: ${(props) => props.icon?  '15px' : '20px'};
    padding-right: ${(props) => props.icon?  '15px' : '20px'};
    height: ${({iconType}) => iconType === 'vertical'? '95px' : 'fit-content'};
    width: ${({iconType}) => iconType === 'vertical'? '100px' : 'fit-content'};
`;


const largeWide = css`
    padding-left: ${(props) => props.icon ?  '25px' : '30px'};
    padding-right: ${(props) => props.icon ?  '25px' : '30px'};
    font-size: 20px;
`;

const pill = css`
    border-radius: 20px;
`;

const square = css`
    border-radius: 0px;
`;

const normalborder = css`
    border-radius: 5px;
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


const radiusForButton = props => {
    if (props.pill) {
        return pill;
    }
    else if (props.square) {
        return square;
    }
    else {
        return normalborder;
    }
}

const shadow = css`
    box-shadow: 0 0.125rem 0.625rem rgba(${({color}) => color? colorsPalette[color+'Rgb'] : '255,255,255'},.4), 0 0.0625rem 0.125rem rgba(${({color}) => color? colorsPalette[color+'Rgb'] : '255,255,255'},.5);
`;

const buttonBoxShadow = props => {
    if (props.shadow) {
        return shadow;
    }
}

export const CustomButtonStyled = styled.button`
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    height: fit-content;
    ${wideButton};
    ${sizeButton};
    ${styledForButton};
    ${({block}) => block? blockStyle : null};
    ${radiusForButton};
    ${buttonBoxShadow};
`;