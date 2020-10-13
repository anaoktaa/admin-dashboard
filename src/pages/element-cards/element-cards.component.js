import React from 'react';

import CustomTabsWrapper from '../../components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from '../../components/custom-tab-panel/custom-tab-panel.component';

import BasicCardContainer from './basic-card-container/basic-card-container.component';
import ColorStatesContainer from  './color-states-card-container/color-states-card-container.component';
import AdvancedCardContainer from './advanced-card-container/advanced-card-container.component';

import './element-cards.styles.css';

const ElementCards = () => {
    return (
        <div>
            <CustomTabsWrapper>
                <CustomTabPanel data-key='basic' title='Basic'>
                    <BasicCardContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='color-states' title='Color States'>
                    <ColorStatesContainer/>
                </CustomTabPanel>
                <CustomTabPanel data-key='advanced' title='Advanced'>
                    <AdvancedCardContainer/>
                </CustomTabPanel>
            </CustomTabsWrapper>
        </div>
    )
};

export default ElementCards;