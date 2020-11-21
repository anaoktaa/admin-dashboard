import React from 'react';

import CustomButton from 'Components/custom-button/custom-button.component';
import { CustomCard, CustomCardBody, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';

const OutlinedButtonContainer = () => {
    return (
        <div className='grid-2'>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    COLOR STATES
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='outlined' color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='dark'>Dark</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='link'>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    ACTIVE STATES
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' active >Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='secondary' active>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='success' active>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='info' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='warning' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='danger' active>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='alt' active>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='light' active>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='dark' active>Dark</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='link' active>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    WIDER
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' size='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' size='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' size='small'>Small</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    SIZING
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' wide='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' wide='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' wide='small'>Small</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    DISABLED STATES
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='dark'>Dark</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='link'>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    BLOCK LEVEL
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' block>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='secondary' block>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='success' block>Success</CustomButton>
                </CustomCardBody>
            </CustomCard>
        </div>
    )
};

export default OutlinedButtonContainer;