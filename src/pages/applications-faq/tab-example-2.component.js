import React from 'react';
import { Typography } from 'antd';

import './applications-faq.styles.css';

const { Title, Text } = Typography;

const TabExample2 = () => {
    return (
        <div>
            <Title level={3}>Maecenas tempus, tellus</Title>
            <div className='line'/>
            <div className='padding-top-20'>
                <Text className='tab-text-example-content'>
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                </Text>
                <Text className='tab-text-example-content'>
                    No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                </Text>
                <Text className='tab-text-example-content'>
                    Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                </Text>
                <Text className='tab-text-example-content'>
                    To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it?
                </Text>
                <Text className='tab-text-example-content'>
                    But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
                </Text>
                <Text className='tab-text-example-content'>
                    On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                </Text>
            </div>
          
        </div>
    )
};

export default TabExample2;