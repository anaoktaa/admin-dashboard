import React from 'react';

import CustomButton from '../../../components/custom-button/custom-button.component';

const OutlinedButtonContainer = () => {
    return (
        <div className='grid-2'>
            <div className='card-element'>
                <p className='card-title-text'>COLOR STATES</p>
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
                <p className='card-title-text'>ACTIVE STATES</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' active >Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='secondary' active>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='success' active>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='info' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='warning' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='danger' active>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='alt' active>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='light' active>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='dark' active>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>WIDER</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' size='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' size='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' size='small'>Small</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>SIZING</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' wide='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' wide='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' wide='small'>Small</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>DISABLED STATES</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' disabled color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>BLOCK LEVEL</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined' color='primary' block>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='secondary' block>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined' color='success' block>Success</CustomButton>
                </div>
            </div>
        </div>
    )
};

export default OutlinedButtonContainer;