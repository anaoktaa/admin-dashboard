import styled, { css } from 'styled-components';

import { colorsPalette } from '../custom-color/custom-color';

const link = css`
    &:hover {
        color: ${colorsPalette.primary} !important;
    }
`

const primary = css`
    &:hover {
        background-color: ${colorsPalette.primary};
        color: white !important;
    }
`;

const secondary = css`
    &:hover {
        background-color: #e4f4ff;
        color: ${colorsPalette.primary} !important;
    }
`;

const styledformenuitem = props => {
    if (props.role === 'primary') {
        return primary;
    }
    else if (props.role === 'secondary') {
        return secondary;
    }
    else  {
        return link;
    }
}

const primaryactive = css`
    background-color: ${colorsPalette.primary} !important;
    color: white !important;
    &:hover  {
        background-color: ${colorsPalette.primary} !important;
        color: white !important;
    }
`;

const secondaryactive = css`
    background-color: #e4f4ff !important;
    color: ${colorsPalette.primary} !important;
    &:hover {
        background-color: #e4f4ff !important;
        color: ${colorsPalette.primary} !important;
    }
`;

const linkactive = css`
    color: ${colorsPalette.primary} !important;
    &:hover {
        color: ${colorsPalette.primary} !important; 
    }
`;

const activemenuitem = props => {
    if (props.active) {
        if (props.activeColor) {
            if (props.activeColor === 'primary') {
                return primaryactive;
            }
            else if (props.activeColor === 'secondary') {
                return secondaryactive; 
            }
            else {
                return linkactive;
            }
        }
        else {
            if (props.role === 'primary') {
                return primaryactive;
            }
            else if (props.role === 'secondary') {
                return secondaryactive;
            }
            else  {
                return linkactive;
            }
        }
    }
}

export const CustomMenuItemStyled = styled.li`
    width: 100%;
    cursor: pointer;
    display: flex;
    transition: all .3s;
    padding: 7px 0 7px 20px;
    display: block;
    ${styledformenuitem};
    border-bottom: ${({border}) => border? '1px solid #dadada' : 'none'};
    border-radius: ${({pill}) => pill ? '20px': '0px'};
    ${activemenuitem};
`;

export const CustomMenuItemHeader = styled.h6`
    text-transform: uppercase;
    font-size: 13px;
    color: ${colorsPalette.primary};
    font-weight: 700;
    margin-bottom: 13px;
    padding-left: 20px;
`;

export const CustomMenuDivider = styled.div`
    height: 1px;
    border-bottom: 1px solid #dadada;
    margin: 5px 0 18px;
    width: 100%;
`;