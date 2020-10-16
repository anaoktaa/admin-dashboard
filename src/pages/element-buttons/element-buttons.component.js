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
                <CustomTabPanel title='Solid'>
                    <SolidButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Outlined'>
                    <OutlinedButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Outlined 2x'>
                    <Outlined2xButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Dashed'>
                    <DashedButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Pills'>
                    <PillsButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Square'>
                    <SquareButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Shadow'>
                    <ShadowButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Horizontal Icon'>
                    <HorizontalIconContainer/>
                </CustomTabPanel>
                <CustomTabPanel title='Vertical Icon'>
                    <VerticalIconContainer/>
                </CustomTabPanel>
            </CustomTabsWrapper>
        </div>
    )
};

export default ElementButtons;