import React from 'react';

import { Carousel, Typography, Form, Input, Checkbox, Button  } from 'antd';

import './forgot-password.styles.css';

const { Title } = Typography;

const ForgotPassword = () => {
    return (
        <div className='signin-page-container'>
            <div className='signin-page-image-slider'>
                <Carousel autoplay>
                    <div className='signin-page-slide-image1'>
                        <div className='signin-image-overlay'>
                            <div className='signin-overlay-container'>
                                <p className='signin-overlay-title-text'>Complex but Lightweight</p>
                                <p className='signin-overlay-description-text' >
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                                    Aenean commodo ligula eget dolor. Aenean massa. 
                                    Cum sociis natoque penatibus et magnis dis parturient montes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='signin-page-slide-image2'>
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
                    <div className='signin-page-slide-image3'>
                        <div className='signin-image-overlay'>
                            <div className='signin-overlay-container'>
                                <p className='signin-overlay-title-text'>Complex but Lightweight</p>
                                <p className='signin-overlay-description-text' >
                                Nullam dictum felis eu pede mollis pretium. Integer tincidunt. 
                                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                </p>
                            </div>
                        </div>
                    </div>
                

                </Carousel>
            </div>
            <div className='signin-page-form'>
                <div className='signin-page-logo'/>
                <Title level={3} className='signin-page-welcome-back'>Forgot your Password?</Title>
                <Title level={5} className='signin-page-please-text'>Use the form below to recover it.</Title>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    >
                    <div className='signin-page-form-container'>
                        <div className='signin-page-from-part2'>
                            <label className='label-input'>Email</label>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder='Your username'/>
                            </Form.Item>
                        </div>
                    </div>
                 
                    <Title level={5} className='signin-page-sign-up-text'>Sign in existing account</Title>

                    <Form.Item>
                        <div className='flex-end'>
                            <Button type="primary">Recover Password</Button>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default ForgotPassword;