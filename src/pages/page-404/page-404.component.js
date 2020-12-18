import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

import './page-404.styles.css';

const Page404 =  () => {
    return (
        <div className='text-align-center margin-top-30'>
            <Title className='color5d' level={3}>Oops, looks like you are looking for something</Title>
            <div className='page-404-image'/>
            <Title className='color5d' level={3}>Page 404</Title>
        </div>
    )
};

export default Page404;