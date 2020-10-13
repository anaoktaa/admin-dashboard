import styled, { css } from 'styled-components';
import { colorsPalette } from '../custom-color/custom-color';

const outlinedCard = css`
    border: 1px solid ${({outlined}) => outlined? colorsPalette[outlined] : 'transparent'};
`;

const containedCard = css`
    background-color: ${({contained}) => contained? colorsPalette[contained] : '#fff'};
    color: ${({contained}) => contained? '#fff': '#000'};
    ${CustomCardTitleText} {
        color: ${({contained}) => contained? '#fff': '#495057'};
    }
    ${CustomCardSubtitle} {
        color: ${({contained}) => contained? '#fff': '#a9a9a9'};
    }
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
    box-shadow: 0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03);
    border-width: 0;
    transition: all .2s;
    border-radius: 5px;
    background-color: white;
    overflow: hidden;
    ${styleForCard};
    ${hoverStyleCard};
`;

export const CustomCardBody = styled.div`
    width: fit-content;
    padding: 15px;
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
`;

export const CustomCardSubtitle = styled.p`
    font-size: 14px;
    color: ${({contained}) => contained? '#fff': '#a9a9a9'};
`;