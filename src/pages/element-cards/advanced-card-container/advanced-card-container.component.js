import React from 'react';
import { Typography } from 'antd';

import { CustomCard, CustomCardHeader, CustomCardBody, CustomCardFooter } from  '../../../components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from '../../../components/custom-card/custom-card-header-with-image.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

const { Title } = Typography;

const AdvancedCardContainer = () => {
    return (
        <div className='grid-2-gap-30'>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardHeaderWithImage imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                        <Title level={4} className='white'>HEADER CARD WITH IMAGE</Title>
                    </CustomCardHeaderWithImage>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton variant='solid' color='primary'> 
                            Follow Up
                        </CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardHeader>Header</CustomCardHeader>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton variant='solid' color='success'> 
                            Save
                        </CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard contained='dark' className='mb-30'>
                    <CustomCardHeader>Header</CustomCardHeader>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton variant='solid' color='warning'> 
                            Save
                        </CustomButton>
                    </CustomCardFooter>
                </CustomCard>
            </div>
            <div>
                <CustomCard hover className='mb-30'>
                    <CustomCardHeader>Shadow Hover Card</CustomCardHeader>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, 
                            pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                            fringilla vel, aliquet nec, vulputate eget, arcu.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        <CustomButton variant='solid' color='primary'> 
                            Submit
                        </CustomButton>
                    </CustomCardFooter>
                </CustomCard>
                <CustomCard contained='success'>
                    <CustomCardHeader>Header</CustomCardHeader>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        </p>
                    </CustomCardBody>
                    <CustomCardFooter>
                        Footer
                    </CustomCardFooter>
                </CustomCard>
            </div>
        </div>
    )
}

export default AdvancedCardContainer;