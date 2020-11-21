import React from 'react';

import { TaskListContainerStyle, TaskListGrid, TaskListBorderContainer, TaskListBorderLeft  } from './task-list-container.styles';

const TaskListContainer = ({ color, children, ...props }) => {
    return (
        <TaskListContainerStyle color={color} {...props}>
            <TaskListGrid>
                <TaskListBorderContainer>
                    <TaskListBorderLeft color={color}>

                    </TaskListBorderLeft>
                </TaskListBorderContainer>
                <div>
                    {
                        children
                    }
                </div>
               
            </TaskListGrid>
        </TaskListContainerStyle>
    )
};

export default TaskListContainer;