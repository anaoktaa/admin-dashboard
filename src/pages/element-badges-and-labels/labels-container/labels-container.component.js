import React from 'react';

import { CustomCard, CustomCardBody, CustomCardTitleText } from '../../../components/custom-card/custom-card.styles';
import CustomLabelBadge from '../../../components/custom-label-badge/custom-label-badge.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

const LabelsContainer = () => {
    return (
        <div className='grid-2-gap-30'>
            <div>
                <CustomCard>
                    <CustomCardTitleText>
                        COLORS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomLabelBadge className='mrb-10' color='primary'>
                            Primary
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='secondary'>
                            Secondary
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='info'>
                            Info
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='success'>
                            Success
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='warning'>
                            Warning
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='danger'>
                            Danger
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='alt'>
                            Alt
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='light'>
                            Light
                        </CustomLabelBadge>
                        <CustomLabelBadge className='mrb-10' color='dark'>
                            Dark
                        </CustomLabelBadge>
                    </CustomCardBody>
                    <div className='line'/>  
                    <CustomCardTitleText>
                        PILLS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomLabelBadge pill className='mrb-10' color='primary'>
                            Primary
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='secondary'>
                            Secondary
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='info'>
                            Info
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='success'>
                            Success
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='warning'>
                            Warning
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='danger'>
                            Danger
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='alt'>
                            Alt
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='light'>
                            Light
                        </CustomLabelBadge>
                        <CustomLabelBadge pill className='mrb-10' color='dark'>
                            Dark
                        </CustomLabelBadge>
                    </CustomCardBody>
                    <div className='line'/>
                    <CustomCardTitleText>
                        LINKS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomLabelBadge className='mrb-10' link href='https://twitter.com' target='_blank' className='mrb-10' color='primary'>
                            Primary
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='secondary'>
                            Secondary
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='info'>
                            Info
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='success'>
                            Success
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='warning'>
                            Warning
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='danger'>
                            Danger
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='alt'>
                            Alt
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='light'>
                            Light
                        </CustomLabelBadge>
                        <CustomLabelBadge link className='mrb-10' color='dark'>
                            Dark
                        </CustomLabelBadge>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard>
                    <CustomCardTitleText>
                        WITH BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton className='mrb-10' color='primary' variant='solid'>
                            Primary 
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='secondary' variant='solid'>
                            Secondary
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='success' variant='solid'>
                            Success
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='info' variant='solid'>
                            Info 
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='warning' variant='solid'>
                            Warning 
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='danger' variant='solid'>
                            Danger 
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='alt' variant='solid'>
                            Alt 
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='light' variant='solid'>
                            Light 
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='dark' variant='solid'>
                            Dark
                            <CustomLabelBadge className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomLabelBadge color='primary' className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomLabelBadge color='warning' className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomLabelBadge color='success' className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomLabelBadge color='danger' className='ml-5'>NEW</CustomLabelBadge>
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};

export default LabelsContainer;