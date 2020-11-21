import React from 'react';

import CustomTabsWrapper from 'Components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from 'Components/custom-tab-panel/custom-tab-panel.component';

import GridMenuContainer from './grid-menu-container/grid-menu-container.component';
import VerticalMenuContainer from'./vertical-menu-container/vertical-menu-container.component';
import HeaderMenuContainer from './header-menu-container/header-menu-container.component';

import './element-navigation-menus.styles.css';

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
                <HeaderMenuContainer/>
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default ElementNavigationMenus;