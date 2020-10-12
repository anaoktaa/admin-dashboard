import React from 'react';

import CustomButton from '../../../components/custom-button/custom-button.component';

const DashedButtonContainer = () => {
    return (
        <div className='grid-2'>
            <div className='card-element'>
                <p className='card-title-text'>COLOR STATES</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='dashed' color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>DISABLED STATES</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' disabled color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>BLOCK LEVEL</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='dashed' color='primary' block>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='secondary' block>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='dashed' color='success' block>Success</CustomButton>
                </div>
            </div>
            <div>
                <div className='card-element mb-30'>
                    <p className='card-title-text'>WIDER</p>
                    <div className='button-container-card'>
                        <CustomButton className='mrb-10' variant='dashed' color='primary' size='large'>Large</CustomButton>
                        <CustomButton className='mrb-10' variant='dashed' color='primary' size='normal'>Normal</CustomButton>
                        <CustomButton className='mrb-10' variant='dashed' color='primary' size='small'>Small</CustomButton>
                    </div>
                </div>
                <div className='card-element'>
                    <p className='card-title-text'>SIZING</p>
                    <div className='button-container-card'>
                        <CustomButton className='mrb-10' variant='dashed' color='primary' wide='large'>Large</CustomButton>
                        <CustomButton className='mrb-10' variant='dashed' color='primary' wide='normal'>Normal</CustomButton>
                        <CustomButton className='mrb-10' variant='dashed' color='primary' wide='small'>Small</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashedButtonContainer;
