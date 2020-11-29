import React from 'react';

import CustomTabsWrapper from 'Components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from 'Components/custom-tab-panel/custom-tab-panel.component';

import DashboardCommerceVariation1 from './dashboard-commerce-var-1/dashboard-commerce-var-1.component';
import DashboardCommerceVariation2 from './dashboard-commerce-var-2/dashsboard-commerce-var-2.component';

const DashboardCommerce = () => {
    return (
        <CustomTabsWrapper>
            <CustomTabPanel data-key='variation1' title='Variation 1'>
                <DashboardCommerceVariation1/>
            </CustomTabPanel>
            <CustomTabPanel data-key='variation2' title='Variation 2'>
                <DashboardCommerceVariation2/>
            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default DashboardCommerce;