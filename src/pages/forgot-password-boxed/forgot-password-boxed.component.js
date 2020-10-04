import React from 'react';

import { Typography, Form, Input, Checkbox, Button  } from 'antd';

const { Title } = Typography;


const ForgotPasswordBoxed = () => {
    return (
        <div className='signin-boxed-container'>
            <div className='signin-page-logo'/>
            <div className='card-container '>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <div className='signin-boxed-form-container'>
                        <div className='flex-start-column'>
                            <Title level={3} className='signin-page-welcome-back'>Forgot your Password</Title>
                            <Title level={5} className='signin-page-please-text'>Use the form below to recover it.</Title>
                        </div>
                        <div className='signin-box-form-wrapper'>
                            <div className='signin-form-wrapper'>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input placeholder='Your email'/>
                                </Form.Item>
                            </div>
                            <div className='flex-start'>
                                <Title level={5} className='signin-page-sign-up-text'>Sign in existing account</Title>
                            </div>     
                        </div>
                    </div>
                    <div className='signin-page-line'></div>
                    <Form.Item>
                        <div className='flex-end signin-footer'>
                            <Button type="primary">Recover Password</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default ForgotPasswordBoxed;