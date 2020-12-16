import React from 'react';

import CustomTabsWrapper from 'Components/custom-tabs-wrapper/custom-tabs-wrapper.component';
import CustomTabPanel from 'Components/custom-tab-panel/custom-tab-panel.component';

import DashboardAnalyticVariation1 from './dashboard-analytic-var-1/dashboard-analytic-var-1.component';
import DashboardAnalyticVariation2 from './dashboard-analytic-var-2/dashboard-analytic-var-2.component';

import './dashboard-analytic.styles.css';

const DashboardAnalytic = () => {
  return (
    <CustomTabsWrapper>
      <CustomTabPanel data-key="variation1" title="Variation 1">
        <DashboardAnalyticVariation1 />
      </CustomTabPanel>
      <CustomTabPanel data-key="variation2" title="Variation 2">
        <DashboardAnalyticVariation2 />
      </CustomTabPanel>
    </CustomTabsWrapper>
  );
};

export default DashboardAnalytic;
