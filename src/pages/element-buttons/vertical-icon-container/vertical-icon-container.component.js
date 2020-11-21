import React from 'react';

import { CrownOutlined, AlertOutlined, CameraOutlined, BugOutlined,
         BulbOutlined, DatabaseOutlined, MessageOutlined, RocketOutlined,
         ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';

import CustomButton from 'Components/custom-button/custom-button.component';
import { CustomCard, CustomCardBody, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';


const VerticalIconContainer = () => {
    return (
        <div className='grid-2'>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        SOLID ICONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton iconType='vertical' className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        COLOR TRANSITION
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton iconType='vertical' className='mrb-10' color='primary' variant='outlined' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='secondary' variant='outlined' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='success' variant='outlined' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='info' variant='outlined' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='warning' variant='outlined' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='danger' variant='outlined' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='alt' variant='outlined' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='light' variant='outlined' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='dark' variant='outlined' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton iconType='vertical' className='mrb-10' color='link' variant='outlined' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        OUTLINE 2X SHADOW ICONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='primary' variant='outlined-2x' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='secondary' variant='outlined-2x' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='success' variant='outlined-2x' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='info' variant='outlined-2x' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='warning' variant='outlined-2x' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='danger' variant='outlined-2x' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='alt' variant='outlined-2x' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='light' variant='outlined-2x' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='dark' variant='outlined-2x' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='link' variant='outlined-2x' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        OUTLINE 2X SHADOW ICONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton block iconType='vertical' className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton block iconType='vertical' className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton block iconType='vertical' className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        SOLID SQUARE ICONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton square iconType='vertical' className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        TRANSITION BUTTONS WIHTOUT BORDER
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton square iconType='vertical' className='mrb-10' color='primary' variant='no-outlined' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='secondary' variant='no-outlined' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='success' variant='no-outlined' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='info' variant='no-outlined' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='warning' variant='no-outlined' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='danger' variant='no-outlined' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='alt' variant='no-outlined' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='light' variant='no-outlined' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='dark' variant='no-outlined' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton square iconType='vertical' className='mrb-10' color='link' variant='no-outlined' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        OUTLINE 2X SHADOW ICONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='primary' variant='dashed' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='secondary' variant='dashed' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='success' variant='dashed' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='info' variant='dashed' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='warning' variant='dashed' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='danger' variant='dashed' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='alt' variant='dashed' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='light' variant='dashed' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='dark' variant='dashed' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton iconType='vertical' shadow className='mrb-10' color='link' variant='dashed' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        GRID MENU HOVER COLOR
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div className='grid-menu-3-col align-items-center justify-content-center'>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='primary' variant='no-outlined' icon={<CrownOutlined />}>
                                    Primary
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='success' variant='no-outlined' icon={<AlertOutlined />}>
                                    Success
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='danger' variant='no-outlined' icon={<TrophyOutlined />}>
                                    Danger
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='warning' variant='no-outlined' icon={<RocketOutlined />}>
                                    Warning
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='info' variant='no-outlined' icon={<BulbOutlined />}>
                                    Info
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='secondary' variant='no-outlined' icon={<BugOutlined />}>
                                    Secondary
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        GRID MENU BIGGER TWO COLUMNS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='primary' variant='no-outlined' icon={<CrownOutlined />}>
                                    Primary
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='success' variant='no-outlined' icon={<AlertOutlined />}>
                                    Success
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='danger' variant='no-outlined' icon={<TrophyOutlined />}>
                                    Danger
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='warning' variant='no-outlined' icon={<RocketOutlined />}>
                                    Warning
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};

export default VerticalIconContainer;