import React from 'react';
import { Carousel, Typography, Form, Input, Checkbox, Button  } from 'antd';

import './login-boxed.styles.css';

const { Title } = Typography;

const LoginBoxedPage = () => {
    return (
        <div className='login-boxed-container'>
            <div className='card-container '>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                >
                    <div className='login-boxed-form-container'>
                        <Title level={3} className='login-page-welcome-back'>Welcome Back,</Title>
                        <Title level={5} className='login-page-please-text'>Please sign in to your account below.</Title>

                        <div className='login-box-form-wrapper'>
                     
                            <div className='login-form-wrapper'>
                                <Form.Item
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input placeholder='Your username'/>
                                </Form.Item>
                            </div>
                            <div className='login-form-wrapper'>
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder='Your password'/>
                                </Form.Item>
                            </div>
                            <div className='login-form-wrapper'>
                                <Form.Item name="remember" valuePropName="checked">
                                    <Checkbox>Keep me logged in</Checkbox>
                                </Form.Item>
                            </div>
                            <div className='flex-start'>
                                <Title level={5} className='login-page-please-text'>No account ?</Title>
                                <Title level={5} className='login-page-sign-up-text'> &nbsp;Sign up now</Title>
                            </div>     
                        </div>
                    </div>
                    <div className='login-page-line'></div>
                    <Form.Item>
                        <div className='flex-end login-footer'>
                            <Button type="link">Recover Password</Button>
                            <Button type="primary">Login to Dashboard</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default LoginBoxedPage;