import React from 'react';
import { Typography } from 'antd';
import { InboxOutlined, BookOutlined, FileOutlined, PictureOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText, CustomCardFooter, CustomCardHeader } from  '../../../components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from '../../../components/custom-card/custom-card-header-with-image.component';
import CustomButton from '../../../components/custom-button/custom-button.component';


const { Title } = Typography;
const { Text, Link } = Typography;

const HeaderMenuContainer = () => {
    return (
        <div>
            <CustomCard className='mb-30'>
                <CustomCardTitleText>
                    GRID HEADER MENU
                </CustomCardTitleText>
                <CustomCardBody>
                    <div className='grid-menu-4-col'>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#545cd887' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <Title className='white text-align-center' level={4}>Settings</Title>
                                <span className='white text-align-center'>Manage all of your options</span>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                               
                            </CustomCardBody>
                            <CustomCardFooter>
                                <CustomButton variant='solid' color='primary'> 
                                    Follow Up
                                </CustomButton>
                            </CustomCardFooter>
                        </CustomCard>
                    
                    </div>
                </CustomCardBody>
            </CustomCard>
        </div>
    )
};

export default HeaderMenuContainer;