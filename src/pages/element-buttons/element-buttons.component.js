import React from 'react';

import CustomTabsWrapper from '../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../components/custom-tab-panel/custom-tab-panel.component';

import SolidButtonContainer from './solid-buttons-container/solid-button-container.component';
import OutlinedButtonContainer from './outlined-button-container/outlined-button-container.component';
import Outlined2xButtonContainer from './outlined2x-button-container/outlined2x-button-container.component';
import DashedButtonContainer from './dashed-button-container/dashed-button-container.component';
import PillsButtonContainer from './pills-button-container/pills-button-container.component';
import SquareButtonContainer from './square-button-container/square-button-container.component';
import ShadowButtonContainer from './shadow-button-container/shadow-button-container.component';
import HorizontalIconContainer from './horizontal-icon-container/horizontal-icon-container.component';
import VerticalIconContainer from './vertical-icon-container/vertical-icon-container.component';

const ElementButtons = () => {
    return (
        <div>
            <CustomTabsWrapper >
                <CustomTabPanel data-key='solid' title='Solid'>
                    <SolidButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='outlined' title='Outlined'>
                    <OutlinedButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='outlined-2x' title='Outlined 2x'>
                    <Outlined2xButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='dashed' title='Dashed'>
                    <DashedButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='pills' title='Pills'>
                    <PillsButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='square' title='Square'>
                    <SquareButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='shadow' title='Shadow'>
                    <ShadowButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='horizontal-icon' title='Horizontal Icon'>
                    <HorizontalIconContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='vertical-icon' title='Vertical Icon'>
                    <VerticalIconContainer/>
                </CustomTabPanel>
            </CustomTabsWrapper>
        </div>
    )
};

export default ElementButtons;