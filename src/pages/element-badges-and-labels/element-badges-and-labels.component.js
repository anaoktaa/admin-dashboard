import React from 'react';

import CustomTabsWrapper from '../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../components/custom-tab-panel/custom-tab-panel.component';

import BadgesContainer from './badges-container/badges-container.component';
import LabelsContainer from './labels-container/labels-container.component';
import AvatarsContainer from './avatars-container/avatars-container.component';

const ElementBadgesAndLabels = () => {
    return (
        <CustomTabsWrapper>
            <CustomTabPanel data-key='badges' title='Badges'>
                <BadgesContainer/>
            </CustomTabPanel>
            <CustomTabPanel data-key='labels' title='Labels'>
                <LabelsContainer/>
            </CustomTabPanel>
            <CustomTabPanel data-key='avatars' title='Avatars'>
                <AvatarsContainer/>
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default ElementBadgesAndLabels;