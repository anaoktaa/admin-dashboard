import React from 'react';
import { Typography, Form, Input, Checkbox, Button  } from 'antd';

import './signin-boxed.styles.css';
import '../signin/signin.styles.css';

const { Title } = Typography;

const SigninBoxedPage = () => {
    return (
        <div className='signin-boxed-container'>
            <div className='signin-page-logo-white'/>
            <div className='card-container '>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <div className='signin-boxed-form-container'>
                        <Title level={3} className='signin-page-welcome-back'>Welcome Back,</Title>
                        <Title level={5} className='signin-page-please-text'>Please sign in to your account below.</Title>

                        <div className='signin-box-form-wrapper'>
                     
                            <div className='signin-form-wrapper'>
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder='Your username'/>
                                </Form.Item>
                            </div>
                            <div className='signin-form-wrapper'>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder='Your password'/>
                                </Form.Item>
                            </div>
                            <div className='signin-form-wrapper'>
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Keep me logged in</Checkbox>
                                </Form.Item>
                            </div>
                            <div className='flex-start'>
                                <Title level={5} className='signin-page-please-text'>No account ?</Title>
                                <Title level={5} className='signin-page-sign-up-text'> &nbsp;Sign up now</Title>
                            </div>     
                        </div>
                    </div>
                    <div className='signin-page-line'></div>
                    <Form.Item>
                        <div className='flex-end signin-footer'>
                            <Button type="link">Recover Password</Button>
                            <Button type="primary">Signin to Dashboard</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default SigninBoxedPage;