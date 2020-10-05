import React from 'react';

import CustomTabPanel from '../custom-tab-panel/custom-tab-panel.component';
import CustomTabsWrapper from '../custom-tabs-wrapper/custom-tabs-wrapper.component';

import './custom-tabs.styles.css';

const CustomTabs = () => {
    return (
        <CustomTabsWrapper data-active-key='3'>
            <CustomTabPanel data-key='1' title='Makanan'>
                <h1>Ini adalah makanan yang kamu suka</h1>
                <h2>Makanan ini sungguh enak sekali laah</h2>
            </CustomTabPanel>
            <CustomTabPanel data-key='2' title='Minuman'>
                <h3>Kalo ini isi tab k2  ishh gak tau gimana yaa</h3>
            </CustomTabPanel>
            <CustomTabPanel data-key='3' title='Hmmm enakk lah'>

            </CustomTabPanel>
            <CustomTabPanel data-key='4' title='Aduh apalahh ini ya kan '>

            </CustomTabPanel>
            <CustomTabPanel data-key='5' title='Makanan'>
                <h1>Ini adalah makanan yang kamu suka</h1>
                <h2>Makanan ini sungguh enak sekali laah</h2>
            </CustomTabPanel>
            <CustomTabPanel data-key='6' title='Minuman'>
                <h3>Kalo ini isi tab k2  ishh gak tau gimana yaa</h3>
            </CustomTabPanel>
            <CustomTabPanel data-key='7' title='Hmmm enakk lah'>

            </CustomTabPanel>
            <CustomTabPanel data-key='8' title='Aduh apalahh ini ya kan '>

            </CustomTabPanel>
        </CustomTabsWrapper>
    )
};

export default CustomTabs;