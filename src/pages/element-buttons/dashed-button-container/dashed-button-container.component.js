import React from 'react';

import CustomButton from '../../../components/custom-button/custom-button.component';
import { CustomCard, CustomCardBody, CustomCardTitleText } from '../../../components/custom-card/custom-card.styles';

const DashedButtonContainer = () => {
    return (
        <div className='grid-2'>
           <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    COLOR STATES
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='dashed' color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='dark'>Dark</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='link'>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    ACTIVE STATES
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' active>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='secondary' active>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='success' active>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='info' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='warning' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='danger' active>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='alt' active>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='light' active>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='dark' active>Dark</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='link' active>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    WIDER
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' size='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' size='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' size='small'>Small</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    SIZING
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' wide='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' wide='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' wide='small'>Small</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    DISABLED STATES
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='dark'>Dark</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='link'>Link</CustomButton>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mobile-mb-30'>
                <CustomCardTitleText>
                    BLOCK LEVEL
                </CustomCardTitleText>
                <CustomCardBody>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' block>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='secondary' block>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='success' block>Success</CustomButton>
                </CustomCardBody>
            </CustomCard>
        </div>
    )
};

export default DashedButtonContainer;
