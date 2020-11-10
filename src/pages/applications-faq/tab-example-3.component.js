import React from 'react';
import { Typography } from 'antd';

import './applications-faq.styles.css';

const { Title, Text } = Typography;

const TabExample3 = () => {
    return (
        <div>
            <Title level={3}>Maecenas tempus, tellus</Title>
            <div className='line'/>
            <div className='padding-top-20'>
                <Text className='tab-text-example-content'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                </Text>
                <Text className='tab-text-example-content'>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                </Text>
                <Text className='tab-text-example-content'>
                    Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                </Text>
                <Text className='tab-text-example-content'>
                    Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                </Text>
                <Text className='tab-text-example-content'>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
                </Text>
                <Text className='tab-text-example-content'>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                </Text>
                <Text className='tab-text-example-content'>
                    Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                </Text>
                <Text className='tab-text-example-content'>
                    Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
                </Text>
            </div>
        </div>
    )
};

export default TabExample3;