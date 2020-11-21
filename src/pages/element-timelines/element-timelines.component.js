import React from 'react';

import CustomTabsWrapper from 'Components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from 'Components/custom-tab-panel/custom-tab-panel.component';

import DotBadgesContainer from  './dot-badges-container/dot-badges-container.component';
import IconBadgesContainer from './icon-badges-container/icon-badges-container.component';

const ElementTimelines = () => {
    return (
        <CustomTabsWrapper>
            <CustomTabPanel data-key='dot-badges' title='Dot Badges'>
                <DotBadgesContainer/>
            </CustomTabPanel>
            <CustomTabPanel data-key='icon-badges' title='Icon Badges'>
                <IconBadgesContainer/>
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default ElementTimelines;