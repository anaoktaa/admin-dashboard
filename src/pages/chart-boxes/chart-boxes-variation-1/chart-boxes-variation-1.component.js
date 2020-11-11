import React from 'react';

import CustomTabsWrapper from '../../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../../components/custom-tab-panel/custom-tab-panel.component';

import Basic from './basic/basic.component';
import Colors from './colors/colors.component';

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

        </CustomTabPanel>
        <CustomTabPanel data-key='alignments' title='Alignments'>
      
        </CustomTabPanel>
        <CustomTabPanel data-key='progress-circle' title='Progress Circle'>
  
        </CustomTabPanel>
      </CustomTabsWrapper>
    )
};

export default ChartBoxesVariation1;