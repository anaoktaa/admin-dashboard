import React from 'react';

import CustomTabsWrapper from 'Components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from 'Components/custom-tab-panel/custom-tab-panel.component';
import DashboardCrmVariation1 from './dashboard-crm-var-1/dashboard-crm-var-1.component';
import DashboardCrmVariation2 from './dashboard-crm-var-2/dasboard-crm-var-2.component';

import './dashboard-crm.styles.css';

const DashboardCrm = () => {
    return  (
        <CustomTabsWrapper>
            <CustomTabPanel data-key='variation1' title='Variation 1'>
               <DashboardCrmVariation1/>
            </CustomTabPanel>
            <CustomTabPanel data-key='variation2' title='Variation 2'>
                <DashboardCrmVariation2/>
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default DashboardCrm;