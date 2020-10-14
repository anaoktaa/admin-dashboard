import styled, { css } from 'styled-components';
import { colorsPalette } from '../custom-color/custom-color';

const dot = css`
    border-radius: 50%;
    height: ${({size}) => size? (size+2)+'px' : '8px'};
    width: ${({size}) => size? (size+2)+'px' : '8px'};
    border: 2px solid white;
`;

const number = css`
    border-radius: 10px;
    padding: 1px 9px;
    font-size: 11px;
`;

const style = props => {
    if (props.dot) {
        return dot;
    }
    else if (props.number) {
        return number;
    }
}

export const BadgeStyle = styled.span`
    display: inline-block;
    background-color: ${({color}) => color? colorsPalette[color] : '#fff'};
    color: ${({color}) => color? colorsPalette[color+'Text'] : '#000'};
    ${style};
`;