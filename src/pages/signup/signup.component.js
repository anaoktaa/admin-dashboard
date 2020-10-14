import React from 'react';
import { Typography, Form, Input, Checkbox, Button  } from 'antd';

import './signup.styles.css';

const { Title, Text, Link } = Typography;

const SignupPage = () => {
    return (
        <div className='signin-page-container'>
            <div className='signup-page-form'>
                <div className='signin-page-logo'/>
                <Title level={3} className='signin-page-welcome-back'>Welcome</Title>
                <div className='flex-start'>
                    <Title level={5} className='signin-page-please-text'>It only takes</Title>
                    <Title level={5} className='signin-page-green-text'> &nbsp;a few seconds&nbsp; </Title>
                    <Title level={5} className='signin-page-please-text'>to create your account</Title>
                </div>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    >
                    <div className='signin-page-form-container'>
                        <div className='signin-page-from-part '>
                            <label className='label-input'>Username</label>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder='Your email address'/>
                            </Form.Item>
                        </div>
                        <div className='signin-page-from-part '>
                            <label className='label-input'>Name</label>
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input placeholder='Your name'/>
                            </Form.Item>
                        </div>
                        <div className='signin-page-from-part '>
                            <label className='label-input'>Password</label>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input.Password placeholder='Password here'/>
                            </Form.Item>
                        </div>
                        <div className='signin-page-from-part '>
                            <label className='label-input'>Repeat Password</label>
                            <Form.Item
                                name="repeat-password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password placeholder='Repeat password here'/>
                            </Form.Item>
                        </div>
                        <div className='signin-page-from-part2'>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Accept our Term and Conditions</Checkbox>
                            </Form.Item>
                        </div>
                    </div>
                    <div className='flex-start'>
                        <Text className='signup-have-account'>Already have an account? </Text>
                        <Link className='signup-have-account' href="https://ant.design" target="_blank">
                            &nbsp;Sign in
                        </Link>
                    </div>

                    <Form.Item>
                        <div className='flex-end'>
                            <Button className='bg-round-button' type="primary">Create Account</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
            <div className='signup-page-image-slider'>
                <div className='signup-page-slide-image1'>
                    <div className='signin-image-overlay'>
                        <div className='signin-overlay-container'>
                            <p className='signin-overlay-title-text'>Scalabel, Modular and Consistent</p>
                            <p className='signin-overlay-description-text' >
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, 
                            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SignupPage;
