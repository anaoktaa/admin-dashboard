import styled from 'styled-components';

export const ChartBoxGridContainer = styled.div`
    border-radius: 5px;
    position: relative;
    display: grid;
    grid-template-columns: repeat(${({col}) => col? col : 1}, 1fr);
    box-shadow: 0 0.46875rem 2.1875rem rgba(8,10,37,.03), 0 0.9375rem 1.40625rem rgba(8,10,37,.03), 0 0.25rem 0.53125rem rgba(8,10,37,.05), 0 0.125rem 0.1875rem rgba(8,10,37,.03);
    background-color : ${({bgColor}) => bgColor? bgColor : 'none'};
    gap-column: ${({gap}) => gap? gap: 0};
    height: fit-content;
`;