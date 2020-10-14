import React from 'react';

import { LaptopOutlined, PictureOutlined, ShoppingOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from '../../../components/custom-card/custom-card.styles';
import CustomBadges from '../../../components/custom-badges/custom-badges.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

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
        </div>
    )
};


const style =  {
    iconStyle: {
        fontSize: 30, color: '#545cd8'
    }
}
export default BadgesContainer;