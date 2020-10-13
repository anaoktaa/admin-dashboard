import React from 'react';

import CustomButton from '../../../components/custom-button/custom-button.component';

const Outlined2xButtonContainer = () => {
    return (
        <div className='grid-2'>
            <div className='card-element'>
                <p className='card-title-text'>COLOR STATES</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>ACTIVE STATES</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' active>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='secondary' active>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='success' active>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='info' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='warning' active>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='danger' active>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='alt' active>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='light' active>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='dark' active>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element mb-30'>
                <p className='card-title-text'>WIDER</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' size='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' size='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' size='small'>Small</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>SIZING</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' wide='large'>Large</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' wide='normal'>Normal</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' wide='small'>Small</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>DISABLED STATES</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='primary'>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='secondary'>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='success'>Success</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='info'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='warning'>Info</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='danger'>Danger</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='alt'>Alt</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='light'>Light</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' disabled color='dark'>Dark</CustomButton>
                </div>
            </div>
            <div className='card-element'>
                <p className='card-title-text'>BLOCK LEVEL</p>
                <div className='button-container-card'>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='primary' block>Primary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='secondary' block>Secondary</CustomButton>
                    <CustomButton className='mrb-10' variant='outlined-2x' color='success' block>Success</CustomButton>
                </div>
            </div>
        </div>
    )
};

export default Outlined2xButtonContainer;