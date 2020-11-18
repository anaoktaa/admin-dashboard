import styled, { css } from 'styled-components';
import { colorsPalette } from '../custom-color/custom-color';

const outlinedCard = css`
    border: 1px solid ${({outlined}) => outlined? colorsPalette[outlined] : 'transparent'};
`;

const titleText = css`
    font-size: 14px;
    font-weight: 500;
    display: block;
    text-transform: uppercase;
`;

const hoverCard = css`
    &:hover {
        box-shadow: 0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgb(8 10 37 / 8%), 0 0.25rem 0.53125rem rgb(33 35 64 / 23%), 0 0.125rem 0.1875rem rgb(8 10 37 / 21%);
    }
`;

const styleForCard = props => {
    if (props.outlined) {
        return outlinedCard;
    }
    if (props.contained) {
        return containedCard;
    }
}

const hoverStyleCard = props => {
    if (props.hover) {
        return hoverCard;
    }
}

export const CustomCard = styled.div`
    box-shadow: ${({noneBoxShadow}) => noneBoxShadow? 'none': ' 0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03)'};
    border-width: 0;
    transition: all .2s;
    border-radius: ${({noneBorderRadius}) => noneBorderRadius? '0px' : '5px'};
    background-color: white;
    ${styleForCard};
    ${hoverStyleCard};
    height: fit-content;
`;

export const CustomCardBody = styled.div`
    padding: 15px;
    width: 100%;
`;

export const CustomCardHeader = styled.div`
    padding: 15px;
    ${titleText};
    border-bottom: 1px solid #d6d6d6;
`;

export const CustomCardFooter = styled.div`
    padding: 15px;
    ${titleText};
    border-top: 1px solid #d6d6d6;
    display: flex;
    align-item: center;
    justify-content: flex-end;
`;

export const CustomCardTitleText = styled.p`
    ${titleText};
    margin: 0;
    padding: 15px 15px 0;
    color: #363875;
`;

export const CustomCardSubtitle = styled.p`
    font-size: 14px;
    color: ${({contained}) => contained? '#fff': '#a9a9a9'};
`;

export const CardHeaderImg = styled.div`
    width: 100%;
    background-image: ${({imgUrl}) => imgUrl? `url(${imgUrl})` :null};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
    color: white;
    position: relative;
`;

export const CardImgOverlay = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({backgroundColorOverlay}) => colorsPalette[backgroundColorOverlay]? colorsPalette[backgroundColorOverlay] : backgroundColorOverlay? backgroundColorOverlay : '#252525bf'}
`;

const containedCard = css`
    color: ${({contained}) => contained? '#fff': '#000'};
    ${CustomCardHeader} {
        background-color: ${({contained}) => colorsPalette[contained]? colorsPalette[contained] : contained? contained  : '#fff'};
        opacity: .92;
        border-bottom: none;
    }
    ${CustomCardFooter} {
        background-color: ${({contained}) => colorsPalette[contained]? colorsPalette[contained] : contained? contained  : '#fff'};
        opacity: .92;
        border-top: none;
    }
    ${CustomCardBody} {
        background-color: ${({contained}) => colorsPalette[contained]? colorsPalette[contained] : contained? contained  : '#fff'};
    }
    ${CustomCardTitleText} {
        color: ${({contained}) => contained? '#fff': '#495057'};
        background-color: ${({contained}) => colorsPalette[contained]? colorsPalette[contained] : contained? contained  : '#fff'};
    }
    ${CustomCardSubtitle} {
        color: ${({contained}) => contained? '#fff': '#a9a9a9'};
    }
`;
