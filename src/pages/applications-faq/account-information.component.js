import React from 'react';
import { Form, Input   } from 'antd';

import CustomButton from 'Components/custom-button/custom-button.component';
 
const AccountInformation = () => {
    return (
        <Form layout='vertical'>
            <Form.Item
                label='Email'
                name='email'
                style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
                <Input placeholder="Type your email here" />
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginLeft: '16px'  }}
            >
                <Input type='password' placeholder="Type your password here" />
            </Form.Item>
            <Form.Item
                label='Address'
                name='address'>
                <Input placeholder="1234 Main Street" />
            </Form.Item>
            <Form.Item
                label='Address 2'
                name='address2'>
                <Input placeholder="Apartment, floor, or building" />
            </Form.Item>
            <Form.Item
                label='City'
                name='city'
                style={{ display: 'inline-block', width: 'calc(50% - 8px)', marginRight: '8px' }}
            >
                <Input placeholder="City" />
            </Form.Item>
            <Form.Item
                label='States'
                name='states'
                style={{ display: 'inline-block', width: 'calc(30% - 16px)', margin: '0 8px'  }}
            >
                <Input  placeholder="State" />
            </Form.Item>
            <Form.Item
                label='Zip'
                name='zip'
                style={{ display: 'inline-block', width: 'calc(20% - 8px)', marginLeft: '8px'  }}
            >
                <Input  placeholder="Zip" />
            </Form.Item>
            <Form.Item className='padding-top-20' colon={false}>
                <CustomButton color='primary' variant='solid'>
                    Submit
                </CustomButton>
            </Form.Item>
        </Form>
    )
};

export default AccountInformation;