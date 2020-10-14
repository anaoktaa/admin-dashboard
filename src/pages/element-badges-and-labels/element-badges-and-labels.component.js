import React from 'react';

import CustomTabsWrapper from '../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../components/custom-tab-panel/custom-tab-panel.component';

import BadgesContainer from './badges-container/badges-container.component';

import './element-badges-and-labels.styles.css';

const ElementBadgesAndLabels = () => {
    return (
        <CustomTabsWrapper>
            <CustomTabPanel data-key='badges' title='Badges'>
                <BadgesContainer/>
            </CustomTabPanel>
            <CustomTabPanel data-key='labels' title='Labels'>
                <BadgesContainer/>
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default ElementBadgesAndLabels;