import React from 'react';
import { CrownOutlined, AlertOutlined, BugOutlined,
         BulbOutlined, RocketOutlined,TrophyOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from  'Components/custom-card/custom-card.styles';
import CustomButton from 'Components/custom-button/custom-button.component';


const GridMenuContainer = () => {
    return (
        <div className='grid-2-gap-30'>
            <div>
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
                        GIRD MENU BIGGER
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div className='grid-menu-3-col align-items-center justify-content-center'>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<CrownOutlined style={style.iconStyleBigger}/>}>
                                    Primary
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<AlertOutlined style={style.iconStyleBigger}/>}>
                                    Success
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<TrophyOutlined style={style.iconStyleBigger}/>}>
                                    Danger
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<RocketOutlined style={style.iconStyleBigger}/>}>
                                    Warning
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<BulbOutlined style={style.iconStyleBigger}/>}>
                                    Info
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-3-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<BugOutlined style={style.iconStyleBigger}/>}>
                                    Secondary
                                </CustomButton>
                            </div>
                        </div>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        GRID MENU TWO COLUMNS
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
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        GIRD MENU BIGGER TWO COLUMNSS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div className='grid-menu-2-col'>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<CrownOutlined style={style.iconStyleBigger}/>}>
                                    Primary
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<AlertOutlined style={style.iconStyleBigger}/>}>
                                    Success
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<TrophyOutlined style={style.iconStyleBigger}/>}>
                                    Danger
                                </CustomButton>
                            </div>
                            <div className='grid-row-for-2-col'>
                                <CustomButton square iconType='vertical' block color='link' variant='no-outlined' icon={<RocketOutlined style={style.iconStyleBigger}/>}>
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

const style = {
    iconStyleBigger: {
        fontSize: '32px'
    }
}

export default GridMenuContainer;