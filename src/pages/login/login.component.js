import React from 'react';
import { Carousel, Typography, Form, Input, Checkbox, Button  } from 'antd';

import './login.styles.css';

const { Title } = Typography;

const LoginPage = () => {
    

    return (
        <div className='login-page-container'>
            <div className='login-page-image-slider'>
                <Carousel autoplay>
                    <div className='login-page-slide-image1'>
                        <div className='login-image-overlay'>
                            <div className='login-overlay-container'>
                                <p className='login-overlay-title-text'>Complex but Lightweight</p>
                                <p className='login-overlay-description-text' >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et magnis dis parturient montes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='login-page-slide-image2'>
                        <div className='login-image-overlay'>
                            <div className='login-overlay-container'>
                                <p className='login-overlay-title-text'>Scalabel, Modular and Consistent</p>
                                <p className='login-overlay-description-text' >
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, 
                                arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='login-page-slide-image3'>
                        <div className='login-image-overlay'>
                            <div className='login-overlay-container'>
                                <p className='login-overlay-title-text'>Complex but Lightweight</p>
                                <p className='login-overlay-description-text' >
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                

                </Carousel>
            </div>
            <div className='login-page-form'>
                <div className='login-page-logo'/>
                <Title level={3} className='login-page-welcome-back'>Welcome Back,</Title>
                <Title level={5} className='login-page-please-text'>Please sign in to your account</Title>
                <div className='flex-start'>
                    <Title level={5} className='login-page-please-text'>No account ?</Title>
                    <Title level={5} className='login-page-sign-up-text'> &nbsp;Sign up now</Title>
                </div>
                <div className='login-page-line'></div>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    >
                    <div className='login-page-form-container'>
                        <div className='login-page-from-part '>
                            <label className='label-input'>Username</label>
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder='Your username'/>
                            </Form.Item>
                        </div>
                        <div className='login-page-from-part '>
                            <label className='label-input'>Password</label>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password placeholder='Your password'/>
                            </Form.Item>
                        </div>
                        <div className='login-page-from-part '>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                        </div>
                    </div>
                    <div className='login-page-line'></div>
                    <Form.Item>
                        <div className='flex-end'>
                            <Button type="link">Recover Password</Button>
                            <Button type="primary">Login to Dashboard</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default LoginPage;