import React from 'react';
import { CrownOutlined, AlertOutlined, CameraOutlined, BugOutlined,
         BulbOutlined, DatabaseOutlined, MessageOutlined, RocketOutlined,
         ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';

import CustomButton from '../../../components/custom-button/custom-button.component';
import { CustomCard, CustomCardBody, CustomCardTitleText } from '../../../components/custom-card/custom-card.styles';

const HorizontalIconContainer = () => {
    return (
        <div className='grid-2'>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        SOLID ICONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        OUTLINE PILL ICONS BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton pill className='mrb-10' color='primary' variant='outlined' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='secondary' variant='outlined' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='success' variant='outlined' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='info' variant='outlined' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='warning' variant='outlined' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='danger' variant='outlined' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='alt' variant='outlined' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='light' variant='outlined' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='dark' variant='outlined' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='link' variant='outlined' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        DASH SHADOW ICONS BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton shadow className='mrb-10' color='primary' variant='dashed' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='secondary' variant='dashed' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='success' variant='dashed' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='info' variant='dashed' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='warning' variant='dashed' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='danger' variant='dashed' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='alt' variant='dashed' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='light' variant='dashed' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='dark' variant='dashed' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='link' variant='dashed' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        BLOCK ICONS BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton block className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton block shadow className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton block shadow className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        SIZE ICONS BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton size='large' className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Large Size
                        </CustomButton>
                        <CustomButton size='normal' shadow className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Normal Size
                        </CustomButton>
                        <CustomButton size='small' shadow className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Small Size
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        SIZE ICONS BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton iconPosition='right' pill size='large' className='mrb-10' color='warning' variant='solid' icon={<CrownOutlined />}>
                            Large Size
                        </CustomButton>
                        <CustomButton  iconPosition='right' pill shadow size='normal' shadow className='mrb-10' color='success' variant='outlined' icon={<AlertOutlined />}>
                            Normal Size
                        </CustomButton>
                        <CustomButton iconPosition='right' pill size='small' className='mrb-10' color='danger' variant='dashed' icon={<CameraOutlined />}>
                            Small Size
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        ICONS SQUARE BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton square className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton square className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        OUTLINED 2X SHADOW ICONS BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton shadow className='mrb-10' color='primary' variant='outlined-2x' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='secondary' variant='outlined-2x' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='success' variant='outlined-2x' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='info' variant='outlined-2x' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='warning' variant='outlined-2x' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='danger' variant='outlined-2x' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='alt' variant='outlined-2x' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='light' variant='outlined-2x' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='dark' variant='outlined-2x' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton shadow className='mrb-10' color='link' variant='outlined-2x' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        SOLID ICONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton pill className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}>
                            Primary
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}>
                            Secondary
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}>
                            Success
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}>
                            Info
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}>
                            Warning
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}>
                            Danger
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}>
                            Alt
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}>
                            Light
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}>
                            Dark
                        </CustomButton>
                        <CustomButton pill className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}>
                            Link
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        ICONS ONLY
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}/>
                        <CustomButton className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}/>
                        <CustomButton className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}/>
                        <CustomButton className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}/>
                        <CustomButton className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}/>
                        <CustomButton className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}/>
                        <CustomButton className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}/>
                        <CustomButton className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}/>
                        <CustomButton className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}/>
                        <CustomButton className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}/>
                    </CustomCardBody>
                    <div className='line'/>
                    <CustomCardBody>
                        <CustomButton pill className='mrb-10' color='primary' variant='outlined' icon={<CrownOutlined />}/>
                        <CustomButton pill className='mrb-10' color='secondary' variant='outlined' icon={<AlertOutlined />}/>
                        <CustomButton pill className='mrb-10' color='success' variant='outlined' icon={<CameraOutlined />}/>
                        <CustomButton pill className='mrb-10' color='info' variant='outlined' icon={<BugOutlined />}/>
                        <CustomButton pill className='mrb-10' color='warning' variant='outlined' icon={<BulbOutlined />}/>
                        <CustomButton pill className='mrb-10' color='danger' variant='outlined' icon={<DatabaseOutlined />}/>
                        <CustomButton pill className='mrb-10' color='alt' variant='outlined' icon={<MessageOutlined />}/>
                        <CustomButton pill className='mrb-10' color='light' variant='outlined' icon={<RocketOutlined />}/>
                        <CustomButton pill className='mrb-10' color='dark' variant='outlined' icon={<ThunderboltOutlined />}/>
                        <CustomButton pill className='mrb-10' color='link' variant='outlined' icon={<TrophyOutlined />}/>
                    </CustomCardBody>
                    <div className='line'/>
                    <CustomCardBody>
                        <CustomButton shadow className='mrb-10' color='primary' variant='dashed' icon={<CrownOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='secondary' variant='dashed' icon={<AlertOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='success' variant='dashed' icon={<CameraOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='info' variant='dashed' icon={<BugOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='warning' variant='dashed' icon={<BulbOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='danger' variant='dashed' icon={<DatabaseOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='alt' variant='dashed' icon={<MessageOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='light' variant='dashed' icon={<RocketOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='dark' variant='dashed' icon={<ThunderboltOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='link' variant='dashed' icon={<TrophyOutlined />}/>
                    </CustomCardBody>
                    <div className='line'/>
                    <CustomCardBody>
                        <CustomButton square className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}/>
                        <CustomButton square className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}/>
                        <CustomButton square className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}/>
                        <CustomButton square className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}/>
                        <CustomButton square className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}/>
                        <CustomButton square className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}/>
                        <CustomButton square className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}/>
                        <CustomButton square className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}/>
                        <CustomButton square className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}/>
                        <CustomButton square className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}/>
                    </CustomCardBody>
                    <div className='line'/>
                    <CustomCardBody>
                        <CustomButton shadow className='mrb-10' color='primary' variant='outlined-2x' icon={<CrownOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='secondary' variant='outlined-2x' icon={<AlertOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='success' variant='outlined-2x' icon={<CameraOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='info' variant='outlined-2x' icon={<BugOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='warning' variant='outlined-2x' icon={<BulbOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='danger' variant='outlined-2x' icon={<DatabaseOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='alt' variant='outlined-2x' icon={<MessageOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='light' variant='outlined-2x' icon={<RocketOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='dark' variant='outlined-2x' icon={<ThunderboltOutlined />}/>
                        <CustomButton shadow className='mrb-10' color='link' variant='outlined-2x' icon={<TrophyOutlined />}/>
                    </CustomCardBody>
                    <div className='line'/>
                    <CustomCardBody>
                        <CustomButton pill className='mrb-10' color='primary' variant='solid' icon={<CrownOutlined />}/>
                        <CustomButton pill className='mrb-10' color='secondary' variant='solid' icon={<AlertOutlined />}/>
                        <CustomButton pill className='mrb-10' color='success' variant='solid' icon={<CameraOutlined />}/>
                        <CustomButton pill className='mrb-10' color='info' variant='solid' icon={<BugOutlined />}/>
                        <CustomButton pill className='mrb-10' color='warning' variant='solid' icon={<BulbOutlined />}/>
                        <CustomButton pill className='mrb-10' color='danger' variant='solid' icon={<DatabaseOutlined />}/>
                        <CustomButton pill className='mrb-10' color='alt' variant='solid' icon={<MessageOutlined />}/>
                        <CustomButton pill className='mrb-10' color='light' variant='solid' icon={<RocketOutlined />}/>
                        <CustomButton pill className='mrb-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}/>
                        <CustomButton pill className='mrb-10' color='link' variant='solid' icon={<TrophyOutlined />}/>
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};

export default HorizontalIconContainer;