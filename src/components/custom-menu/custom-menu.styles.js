import styled from 'styled-components';

export const CustomMenu  = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    width: 100%;
`;

export const CustomMenuItem = styled.li`
    width: 100%;
    display: flex;
    transition: all .3s;
    padding: 7px 0;
`;

export const CustomMenuItemHeader = styled.h6`
    text-transform: uppercase;
    font-size: 12px;
    color: #777777;
    font-weight: 700;
    padding: 0;
    margin: 0;
`;

export const CustomMenuDivider = styled.div`
    height: 1px;
    border-bottom: 1px solid #dadada;
    margin: 5px 0 18px;
    width: 100%;
`;