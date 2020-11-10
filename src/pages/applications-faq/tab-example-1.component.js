import React from 'react';
import { Collapse, Typography } from 'antd';

import AccountInformation from './account-information.component'; 
import CCInformation from './cc-information.component';
import './applications-faq.styles.css';

const { Panel } = Collapse;
const { Title, Text } = Typography;

const TabExample1 = () => {

    const TabExample1Content = [
        {
            id: 1,
            title: 'Account Information',
            description: 'Enter your informations below',
            content: <AccountInformation/>
        },
        {
            id: 2,
            title: 'Credit Card Informations',
            description: 'Enter your informations below',
            content: <CCInformation/>
        },
        {
            id: 3,
            title: 'Personal Details',
            description: 'Enter your informations below',
            content: <CCInformation/>
        }

    ];

    return (
        <Collapse>
            {
            TabExample1Content.map((panel) => (
                <Panel 
                showArrow={false}
                style={{backgroundColor: 'white'}}
                key={panel.id}
                header={
                    <div>
                        <Title className='primary-color' level={4}>{panel.title}</Title>
                    <Text>{panel.description}</Text>
                    </div>
                }>
                    {panel.content}
                </Panel>
            ))
        }
        </Collapse>
    )
};

export default TabExample1;