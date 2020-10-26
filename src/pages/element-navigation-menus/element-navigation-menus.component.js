import React from 'react';

import CustomTabsWrapper from '../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../components/custom-tab-panel/custom-tab-panel.component';

import GridMenuContainer from './grid-menu-container/grid-menu-container.component';
import VerticalMenuContainer from'./vertical-menu-container/vertical-menu-container.component';

const ElementNavigationMenus = () => {
    return (
        <CustomTabsWrapper>
            <CustomTabPanel data-key='basic' title='Grid Menu'>
                <GridMenuContainer/>
            </CustomTabPanel>
            <CustomTabPanel data-key='color-states' title='Vertical Menu'>
                <VerticalMenuContainer/>
            </CustomTabPanel>
            <CustomTabPanel data-key='advanced' title='Header Menu'>
        
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default ElementNavigationMenus;