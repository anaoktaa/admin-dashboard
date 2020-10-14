import styled, { css } from 'styled-components';
import { colorsPalette } from '../custom-color/custom-color';

const labelbadge = css`
    padding: 1px 10px;
    font-weight: bold;
    font-size: 11px;
    text-transform: uppercase;
    border-radius: ${({pill}) => pill? '20px': '5px'};
    display: inline-block;
    background-color: ${({color}) => color? colorsPalette[color] : '#fff'};
    color: ${({color}) => color? colorsPalette[color+'Text'] : '#000'};
`

export const LabelBadge = styled.span`
    ${labelbadge};
`;

export const LabelBadgeLink = styled.a`
    ${labelbadge};
    cursor: pointer;
    &:hover {
        color: ${({color}) => color? colorsPalette[color+'Text'] : '#000'};
        background-color: ${({color}) => color? colorsPalette[color+'Dark'] : '#fff'};
    }
`;