import React from 'react';

import CustomTabsWrapper from '../../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../../components/custom-tab-panel/custom-tab-panel.component';

import Basic from './basic/basic.component';
import Colors from './colors/colors.component';

const ChartBoxesVariation2 = () => {
    return (
        <CustomTabsWrapper>
            <CustomTabPanel data-key='basic' title='Basic'>
                <Basic/>
            </CustomTabPanel>
            <CustomTabPanel data-key='colors' title='Colors'>
                <Colors/>
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default ChartBoxesVariation2;