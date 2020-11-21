import React from 'react';

import CustomTabsWrapper from 'Components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from 'Components/custom-tab-panel/custom-tab-panel.component';

import Basic from './basic/basic.component';
import Colors from './colors/colors.component';
import Grids from './grids/grids.component';
import Alignments from './alignments/alignments.component';
import ProgressCircle from './progress-circle/progress-circle.component';

const ChartBoxesVariation1 = () => {
    return (
      <CustomTabsWrapper>
        <CustomTabPanel data-key='basic' title='Basic'>
            <Basic/>
        </CustomTabPanel>
        <CustomTabPanel data-key='colors' title='Colors'>
            <Colors/>
        </CustomTabPanel>
        <CustomTabPanel data-key='grids' title='Grids'>
            <Grids/>
        </CustomTabPanel>
        <CustomTabPanel data-key='alignments' title='Alignments'>
            <Alignments/>
        </CustomTabPanel>
        <CustomTabPanel data-key='progress-circle' title='Progress Circle'>
            <ProgressCircle/>
        </CustomTabPanel>
      </CustomTabsWrapper>
    )
};

export default ChartBoxesVariation1;