import React from 'react';

import CustomButton from 'Components/custom-button/custom-button.component';
import { CustomCard, CustomCardBody, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';

const PillsButtonContainer = () => {
    return (
        <div className='grid-2'>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    SOLID
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton pill className='mrb-10' variant='solid' color='primary'>Primary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='secondary'>Secondary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='success'>Success</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='info'>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='warning'>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='danger'>Danger</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='alt'>Alt</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='light'>Light</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='dark'>Dark</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='link'>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    COLOR TRANSITION
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton pill className='mrb-10' variant='outlined' color='primary'>Primary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='secondary'>Secondary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='success'>Success</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='info'>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='warning'>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='danger'>Danger</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='alt'>Alt</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='light'>Light</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='dark'>Dark</CustomButton>
                    <CustomButton pill className='mrb-10' variant='outlined' color='link'>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    COLOR TRANSITION NO BORDER
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='primary'>Primary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='secondary'>Secondary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='success'>Success</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='info'>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='warning'>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='danger'>Danger</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='alt'>Alt</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='light'>Light</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='dark'>Dark</CustomButton>
                    <CustomButton pill className='mrb-10' variant='no-outlined' color='link'>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    DISABLED STATE
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton pill className='mrb-10' variant='solid' color='primary' disabled>Primary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='secondary' disabled>Secondary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='success' disabled>Success</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='info' disabled>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='warning' disabled>Info</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='danger' disabled>Danger</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='alt' disabled>Alt</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='light' disabled>Light</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='dark' disabled>Dark</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='link' disabled>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    BLOCK LEVEL
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton pill className='mrb-10' variant='solid' color='primary' block>Primary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='secondary' block>Secondary</CustomButton>
                    <CustomButton pill className='mrb-10' variant='solid' color='success' block>Success</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        WIDER
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton pill className='mrb-10' variant='solid' color='primary' size='large'>Large</CustomButton>
                        <CustomButton pill className='mrb-10' variant='solid' color='primary' size='normal'>Normal</CustomButton>
                        <CustomButton pill className='mrb-10' variant='solid' color='primary' size='small'>Small</CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard>
                    <CustomCardTitleText>
                        SIZING
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton pill className='mrb-10' variant='solid' color='primary' wide='large'>Large</CustomButton>
                        <CustomButton pill className='mrb-10' variant='solid' color='primary' wide='normal'>Normal</CustomButton>
                        <CustomButton pill className='mrb-10' variant='solid' color='primary' wide='small'>Small</CustomButton>
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};

export default PillsButtonContainer;