import React from 'react';

import CustomButton from '../../../components/custom-button/custom-button.component';

const SolidButtonContainer = () => {
    return (
        <div className='grid-2'>
            <div className='card-element'>
                <p className='card-title-text'>SOLID</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='solid' color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>COLOR TRANSITION</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined' color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>COLOR TRANSITION NO BORDER</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='no-outlined' color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='no-outlined' color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>DISABLED STATE</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='solid' color='primary' disabled>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='secondary' disabled>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='success' disabled>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='info' disabled>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='warning' disabled>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='danger' disabled>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='alt' disabled>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='light' disabled>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='dark' disabled>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>BLOCK LEVEL</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='solid' color='primary' block>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='secondary' block>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='solid' color='success' block>Success</CustomButton>
                </div>
            </div>
            <div>
                <div className='card-element mb-30'>
                    <p className='card-title-text'>WIDER</p>
                    <div className='button-container-card'>
                        <CustomButton className='mrb-10' variant='solid' color='primary' size='large'>Large</CustomButton>
                        <CustomButton className='mrb-10' variant='solid' color='primary' size='normal'>Normal</CustomButton>
                        <CustomButton className='mrb-10' variant='solid' color='primary' size='small'>Small</CustomButton>
                    </div>
                </div>
                <div className='card-element'>
                    <p className='card-title-text'>SIZING</p>
                    <div className='button-container-card'>
                        <CustomButton className='mrb-10' variant='solid' color='primary' wide='large'>Large</CustomButton>
                        <CustomButton className='mrb-10' variant='solid' color='primary' wide='normal'>Normal</CustomButton>
                        <CustomButton className='mrb-10' variant='solid' color='primary' wide='small'>Small</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SolidButtonContainer;