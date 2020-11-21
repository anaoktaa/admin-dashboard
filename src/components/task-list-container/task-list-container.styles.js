import styled from 'styled-components';
import { colorsPalette } from 'Components/custom-color/custom-color';


export const TaskListBorderLeft = styled.div`
    width: 4px;
    border-radius: 5px;
    background-color: ${({color}) => color? 'rgba('+colorsPalette[color+'Rgb']+',.4)' : '#bdb6b6'};
`;

export const TaskListContainerStyle = styled.div`
    padding: 10px 5px;
    border-bottom: 1px solid #bdb6b694;*/

    &:hover {
        ${TaskListBorderLeft} {
          background-color: ${({color}) => color? 'rgba('+colorsPalette[color+'Rgb']+'1)' : '#bdb6b6'};
        }
    }
`;

export const TaskListGrid = styled.div`
    display: grid;
    grid-template-columns: 30px 1fr;
    height: fit-content;
    gap: 10px;
`;

export const TaskListBorderContainer = styled.div`
    display: flex;
    height: auto;
    justify-content: center;
    position: relative;
`;
