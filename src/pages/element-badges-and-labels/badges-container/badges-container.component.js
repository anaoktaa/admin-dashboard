import React from 'react';

import { LaptopOutlined, PictureOutlined, ShoppingOutlined,
         CrownOutlined, AlertOutlined, BugOutlined, DatabaseOutlined, MessageOutlined,
         BulbOutlined, RocketOutlined, TrophyOutlined,  CameraOutlined,
         ThunderboltOutlined  } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from 'Components/custom-card/custom-card.styles';
import CustomBadges from 'Components/custom-badges/custom-badges.component';
import CustomButton from 'Components/custom-button/custom-button.component';

const BadgesContainer = () => {
    return (
        <div className='grid-2-gap-30'>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        WITH BUTTONS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomButton className='mrb-10' color='primary' variant='solid'>
                            Primary
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='secondary' variant='solid'>
                            Secondary
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='info' variant='solid'>
                            Info
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='success' variant='solid'>
                            Success
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='warning' variant='solid'>
                            Warning
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='danger' variant='solid'>
                            Danger
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='alt' variant='solid'>
                            Alt
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='light' variant='solid'>
                            Light
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='dark' variant='solid'>
                            Dark
                            <CustomBadges className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomBadges color='primary' className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomBadges color='success' className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomBadges color='danger' className='ml-5' number={2}/>
                        </CustomButton>
                        <CustomButton className='mrb-10' color='link' variant='solid'>
                            Link
                            <CustomBadges color='warning' className='ml-5' number={2}/>
                        </CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        BADGE DOTS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div className='grid-3-gap-10'>
                            <div>
                                <CustomBadges className='mrb-5' color='primary' dot/>
                                <CustomBadges className='mrb-5' color='secondary' dot/>
                                <CustomBadges className='mrb-5' color='success' dot/>
                                <CustomBadges className='mrb-5' color='info' dot/>
                                <CustomBadges className='mrb-5' color='warning' dot/>
                                <CustomBadges className='mrb-5' color='danger' dot/>
                                <CustomBadges className='mrb-5' color='alt' dot/>
                                <CustomBadges className='mrb-5' color='light' dot/>
                                <CustomBadges className='mrb-5' color='dark' dot/>
                            </div>
                            <div>
                                <CustomBadges size={7} className='mrb-5' color='primary' dot/>
                                <CustomBadges size={7} className='mrb-5' color='secondary' dot/>
                                <CustomBadges size={7} className='mrb-5' color='success' dot/>
                                <CustomBadges size={7} className='mrb-5' color='info' dot/>
                                <CustomBadges size={7} className='mrb-5' color='warning' dot/>
                                <CustomBadges size={7} className='mrb-5' color='danger' dot/>
                                <CustomBadges size={7} className='mrb-5' color='alt' dot/>
                                <CustomBadges size={7} className='mrb-5' color='light' dot/>
                                <CustomBadges size={7} className='mrb-5' color='dark' dot/>
                            </div>
                            <div>
                                <CustomBadges size={10} className='mrb-5' color='primary' dot/>
                                <CustomBadges size={10} className='mrb-5' color='secondary' dot/>
                                <CustomBadges size={10} className='mrb-5' color='success' dot/>
                                <CustomBadges size={10} className='mrb-5' color='info' dot/>
                                <CustomBadges size={10} className='mrb-5' color='warning' dot/>
                                <CustomBadges size={10} className='mrb-5' color='danger' dot/>
                                <CustomBadges size={10} className='mrb-5' color='alt' dot/>
                                <CustomBadges size={10} className='mrb-5' color='light' dot/>
                                <CustomBadges size={10} className='mrb-5' color='dark' dot/>
                            </div>
                        </div>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        BADGE NUMBER
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div>
                            <CustomBadges className='mrb-5' color='primary' number={2}/>
                            <CustomBadges className='mrb-5' color='secondary' number={2}/>
                            <CustomBadges className='mrb-5' color='success' number={2}/>
                            <CustomBadges className='mrb-5' color='info' number={2}/>
                            <CustomBadges className='mrb-5' color='warning' number={2}/>
                            <CustomBadges className='mrb-5' color='danger' number={2}/>
                            <CustomBadges className='mrb-5' color='alt' number={2}/>
                            <CustomBadges className='mrb-5' color='dark' number={2}/>
                            <CustomBadges className='mrb-5' color='light' number={2}/>
                        </div>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        BADGE DOTS WITH BUTTON
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomBadges className='mrb-10' color='secondary' size={12} dot>
                            <CustomButton color='primary' variant='solid'>
                                Primary
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='primary' size={12} dot>
                            <CustomButton color='secondary' variant='solid'>
                                Secondary
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='success' size={12} dot>
                            <CustomButton color='success' variant='solid'>
                                Success
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='info' size={12} dot>
                            <CustomButton color='info' variant='solid'>
                                Info
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='warning' size={12} dot>
                            <CustomButton color='warning' variant='solid'>
                                Warning
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='dark' size={12} dot>
                            <CustomButton color='danger' variant='solid'>
                                Danger
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='alt' size={12} dot>
                            <CustomButton color='alt' variant='solid'>
                                Alt
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='success' size={12} dot>
                            <CustomButton color='light' variant='solid'>
                                Light
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges className='mrb-10' color='primary' size={12} dot>
                            <CustomButton color='dark' variant='solid'>
                                Dark
                            </CustomButton>
                        </CustomBadges>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard>
                    <CustomCardTitleText>
                        ICON WITH BADGES
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomBadges className='mrb-20' color='secondary' size={12} dot>
                            <LaptopOutlined style={style.iconStyle} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='warning' size={12} dot>
                            <PictureOutlined style={style.iconStyle} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='danger' size={12} dot>
                            <ShoppingOutlined style={style.iconStyle} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='secondary' number={3}>
                            <LaptopOutlined style={style.iconStyle} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='warning' number={99}>
                            <PictureOutlined style={style.iconStyle} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='danger' size={12} dot>
                            <ShoppingOutlined style={style.iconStyle} />
                        </CustomBadges>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        ICON BUTTONS GRID I
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div className='grid-menu-3-col align-items-center justify-content-center'>
                            <div className='grid-row-for-3-col'>
                                <CustomBadges color='secondary' size={12} dot>
                                    <CustomButton square iconType='vertical' block color='primary' variant='no-outlined' icon={<CrownOutlined />}>
                                        Primary
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomBadges color='warning' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='success' variant='no-outlined' icon={<AlertOutlined />}>
                                        Success
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomBadges color='primary' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='danger' variant='no-outlined' icon={<TrophyOutlined />}>
                                        Danger
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomBadges color='success' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='warning' variant='no-outlined' icon={<RocketOutlined />}>
                                        Warning
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomBadges color='alt' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='info' variant='no-outlined' icon={<BulbOutlined />}>
                                        Info
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomBadges color='dark' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='secondary' variant='no-outlined' icon={<BugOutlined />}>
                                        Secondary
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                        </div>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        ICON BUTTONS GRID II
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomBadges color='secondary' size={12} dot>
                                    <CustomButton square iconType='vertical' block color='primary' variant='no-outlined' icon={<CrownOutlined />}>
                                        Primary
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomBadges color='warning' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='success' variant='no-outlined' icon={<AlertOutlined />}>
                                        Success
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomBadges color='primary' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='danger' variant='no-outlined' icon={<TrophyOutlined />}>
                                        Danger
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomBadges color='success' size={10} dot>
                                    <CustomButton square iconType='vertical' block color='warning' variant='no-outlined' icon={<RocketOutlined />}>
                                        Warning
                                    </CustomButton>
                                </CustomBadges>
                            </div>
                        </div>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard>
                    <CustomCardTitleText>
                        ICON BUTTONS GRID III
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomBadges color='success' className='mrb-10' size={10} dot>
                            <CustomButton iconType='vertical' color='primary' variant='outlined' icon={<CrownOutlined />}>
                                Primary
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='primary' className='mrb-10' size={10} dot>
                            <CustomButton iconType='vertical' color='secondary' variant='outlined' icon={<AlertOutlined />}>
                                Secondary
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='warning' className='mrb-10' size={10} dot>
                            <CustomButton iconType='vertical' color='success' variant='outlined' icon={<CameraOutlined />}>
                                Success
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='danger' className='mrb-10' size={10} dot>             
                            <CustomButton iconType='vertical' color='info' variant='outlined' icon={<BugOutlined />}>
                                Info
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='alt' className='mrb-10' size={10} dot>             
                            <CustomButton iconType='vertical' color='warning' variant='outlined' icon={<BulbOutlined />}>
                                Warning
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='info' className='mrb-10' size={10} dot>             
                            <CustomButton iconType='vertical' color='danger' variant='outlined' icon={<DatabaseOutlined />}>
                                Danger
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='secondary' className='mrb-10' size={10} dot>             
                            <CustomButton iconType='vertical' color='alt' variant='outlined' icon={<MessageOutlined />}>
                                Alt
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='dark' className='mrb-10' size={10} dot>             
                            <CustomButton iconType='vertical' color='light' variant='outlined' icon={<RocketOutlined />}>
                                Light
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='light' className='mrb-10' size={10} dot>             
                            <CustomButton iconType='vertical' color='dark' variant='outlined' icon={<ThunderboltOutlined />}>
                                Dark
                            </CustomButton>
                        </CustomBadges>
                        <CustomBadges color='primary' className='mrb-10' size={10} dot>             
                            <CustomButton iconType='vertical' color='link' variant='outlined' icon={<TrophyOutlined />}>
                                Link
                            </CustomButton>
                        </CustomBadges>                 
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};


const style =  {
    iconStyle: {
        fontSize: 30, color: '#545cd8'
    }
}
export default BadgesContainer;