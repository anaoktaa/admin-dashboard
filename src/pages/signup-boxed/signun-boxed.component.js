import React from 'react';
import { Typography, Form, Input, Checkbox, Button  } from 'antd';

import './signup-boxed.styles.css';

const { Title, Text, Link } = Typography;

const SignupBoxed = () => {
    return (
        <div className='signup-boxed-container'>
            <div className='card-container '>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <div className='signin-boxed-form-container'>
                        <div className='flex-start'>
                            <Title level={3} className='signin-page-welcome-back'>Welcome</Title>
                        </div>
                        <div className='flex-start'>
                            <Title level={5} className='signin-page-please-text'>It only takes</Title>
                            <Title level={5} className='signin-page-green-text'> &nbsp;a few seconds&nbsp; </Title>
                            <Title level={5} className='signin-page-please-text'>to create your account</Title>
                        </div>
                        <div className='signin-box-form-wrapper'>
                            <div className='signin-form-wrapper'>
                                <Form.Item
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder='Your email address'/>
                                </Form.Item>
                            </div>
                            <div className='signin-form-wrapper'>
                                <Form.Item
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input placeholder='Your name'/>
                                </Form.Item>
                            </div>
                            <div className='signin-form-wrapper'>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input.Password placeholder='Password here'/>
                                </Form.Item>
                            </div>
                            <div className='signin-form-wrapper'>
                                <Form.Item
                                    name="repeat-password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder='Repeat password here'/>
                                </Form.Item>
                            </div>
                            <div className='signin-form-wrapper'>
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Accept our Term and Conditions</Checkbox>
                                </Form.Item>
                            </div>
                        </div>
                    </div> 
                    <div className='signin-page-line'></div>
                    <div className='flex-start pad-20'>
                        <Text className='signup-have-account-small'>Already have an account? </Text>
                        <Link className='signup-have-account-small' href="https://ant.design" target="_blank">
                            &nbsp;Sign in
                        </Link>
                        <Text className='signup-have-account-small'>&nbsp;|&nbsp; </Text>
                        <Link className='signup-have-account-small' href="https://ant.design" target="_blank">
                            &nbsp;Recover Password
                        </Link>
                    </div>
                    <div className='signin-page-line'></div>
                    <Form.Item>
                        <div className='flex-end signin-footer'>
                            <Button className='bg-round-button' type="primary">Create Account</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default SignupBoxed;