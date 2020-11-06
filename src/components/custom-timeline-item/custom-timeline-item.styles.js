import styled, { css } from 'styled-components';

import { colorsPalette } from '../custom-color/custom-color';

const smallIconStyle = css`
    width: 16px;
    height: 16px;
    border-width: 4px;
`;

const regularIconStyle = css`
    width: 20px;
    height: 20px;
    border-width: 4px;
`;

const largeIconStyle = css`
    width: 40px;
    height: 40px;
    border-width: 2.9px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color:  ${({fill, color}) => fill? colorsPalette[color+'Text'] : colorsPalette[color]};
    margin-bottom: 20px;
    box-shadow: 0px 4px 0px white, 0px -4px 0px white;
`;

const sizetimeline = props => {
    if (props.size === 'regular') {
        return regularIconStyle;
    }
    else if (props.size === 'large') {
        return largeIconStyle;
    }
    else {
        return smallIconStyle;
    }
}

export const NoLabelTimeline = styled.div`
    display: grid;
    grid-template-columns: 1.1fr 10fr;
    height: fit-content;
    grid-gap: 10px;
`;

export const LabelTimeLine = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.1fr 10fr;
    height: fit-content;
    grid-gap: 10px;
`;

export const IconTimeline = styled.div`
    position: absolute;
    margin: 0 auto;
    border-radius: 50%;
    background-color: ${({fill, color}) => fill? colorsPalette[color] : '#fff'};
    border-style: solid;
    ${sizetimeline};
    border-color: ${({color}) => color? colorsPalette[color] : '#eaeaea'};
`;

export const ConnectorTimeLine = styled.div`
    width: 4px;
    background-color: #eaeaea;
`;