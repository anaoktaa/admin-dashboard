import React from 'react';

import CustomTabsWrapper from '../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../components/custom-tab-panel/custom-tab-panel.component';

import SolidButtonContainer from './solid-buttons-container/solid-button-container.component';
import OutlinedButtonContainer from './outlined-button-container/outlined-button-container.component';
import Outlined2xButtonContainer from './outlined2x-button-container/outlined2x-button-container.component';
import DashedButtonContainer from './dashed-button-container/dashed-button-container.component';

const ElementButtons = () => {
    return (
        <div>
            <CustomTabsWrapper  data-active-key='1'>
                <CustomTabPanel data-key='1' title='Solid'>
                    <SolidButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='2' title='Outlined'>
                    <OutlinedButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='3' title='Outlined 2x'>
                    <Outlined2xButtonContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='4' title='Dashed'>
                    <DashedButtonContainer/>
                </CustomTabPanel>
            </CustomTabsWrapper>
        </div>
    )
};

export default ElementButtons;