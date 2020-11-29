import styled from 'styled-components';

export const ChartBoxGridContainer = styled.div`
    border-radius: 5px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(${({col}) => col? col : 1}, 1fr);
    box-shadow: ${({showBoxShadow}) => showBoxShadow ? ' 0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03)' : 'none'};
    background-color : ${({bgColor}) => bgColor? bgColor : 'none'};
    column-gap: ${({gap}) => gap? gap: 0};
    height: fit-content;

    @media screen and (max-width: 986px) {
        grid-template-columns: repeat(${({col}) => col%2 === 1? 1 : 2}, 1fr);
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: repeat(1, 1fr);   
    }
`;