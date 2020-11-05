import React from 'react';
import { Typography } from 'antd';
import { MessageOutlined, SettingOutlined, HourglassOutlined, WalletOutlined, PushpinOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from  '../../../components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from '../../../components/custom-card/custom-card-header-with-image.component';
import CustomLabelBadge from '../../../components/custom-label-badge/custom-label-badge.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

const { Title } = Typography;
const { Text, Link } = Typography;

const HeaderMenuContainer = () => {
    return (
        <div>
            <CustomCard className='mb-30'>
                <CustomCardTitleText>
                    GRID HEADER MENU
                </CustomCardTitleText>
                <CustomCardBody>
                    <div className='grid-menu-4-col'>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#545cd887' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <Title className='white text-align-center' level={4}>Settings</Title>
                                <span className='white text-align-center'>Manage all of your options</span>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <p className='nav-item-header'>Activity</p>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            Chat
                                            <CustomLabelBadge className='margin-left-auto' color='info' pill={true}>2</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <p className='nav-item-header'>My Acccount</p>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            Settings
                                            <CustomLabelBadge className='margin-left-auto' color='success'>NEW</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            Messages
                                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item nav-item-divider'>
                                    </li>
                                </ul>
                            </CustomCardBody>
                        </CustomCard>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#d92550c4' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <Title className='white text-align-center' level={4}>Settings</Title>
                                <span className='white text-align-center'>Manage all of your options</span>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <p className='nav-item-header'>Activity</p>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <MessageOutlined style={style.iconStyle}/>
                                                Chat
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='info' pill={true}>2</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <p className='nav-item-header'>My Acccount</p>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <SettingOutlined style={style.iconStyle}/>
                                                Settings
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='success'>NEW</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <HourglassOutlined style={style.iconStyle} />
                                                Messages
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item nav-item-divider'>
                                    </li>
                                </ul>
                            </CustomCardBody>
                        </CustomCard>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#3ac47dbf' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <Title className='white text-align-center' level={4}>Settings</Title>
                                <span className='white text-align-center'>Manage all of your options</span>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <p className='nav-item-header'>Activity</p>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <MessageOutlined style={style.iconStyle}/>
                                                Chat
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='info' pill={true}>2</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <p className='nav-item-header'>My Acccount</p>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <SettingOutlined style={style.iconStyle}/>
                                                Settings
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='success'>NEW</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <HourglassOutlined style={style.iconStyle} />
                                                Messages
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item nav-item-divider'>
                                    </li>
                                </ul>
                            </CustomCardBody>
                        </CustomCard>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#30b1ffbf' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <Title className='white text-align-center' level={4}>Settings</Title>
                                <span className='white text-align-center'>Manage all of your options</span>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <MessageOutlined style={style.iconStyle}/>
                                                Chat
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='info' pill={true}>2</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <SettingOutlined style={style.iconStyle}/>
                                                Settings
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='success'>NEW</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <HourglassOutlined style={style.iconStyle} />
                                                Messages
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item nav-item-divider'>
                                    </li>
                                </ul>
                            </CustomCardBody>
                        </CustomCard>
                    </div>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mb-30'>
                <CustomCardTitleText>
                    MENU HEADER BUTTONS SOLID BACKGROUND
                </CustomCardTitleText>
                <CustomCardBody>
                    <div className='grid-menu-3-col grid-gap-20'>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#f7b924' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <Title style={{marginBottom: '0px'}} className='white text-align-center' level={4}>Settings</Title>
                                <span className='white text-align-center'>Manage all of your options</span>
                                <div className='flex-row align-items-center padding-top-20'>
                                    <div className='width-100 padding-top-10 '>
                                        <CustomButton style={style.marginRight10} size='small' variant='solid' color='dark'>Settings</CustomButton>
                                        <CustomButton size='small' variant='solid' color='primary'> <SettingOutlined/></CustomButton>
                                    </div>
                                </div>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <WalletOutlined style={style.iconStyle}/>
                                                Recover Password
                                            </div>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <HourglassOutlined style={style.iconStyle} />
                                                Messages
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                        <div>
                                            <PushpinOutlined style={style.iconStyle}  />
                                            Logs
                                        </div>
                                        </a>
                                    </li>
                                    <li className='nav-item nav-item-divider'>
                                    </li>
                                </ul>
                            </CustomCardBody>
                        </CustomCard>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#444054' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <div className='flex-column align-items-start'>
                                    <Title style={{marginBottom: '0px'}} className='white text-align-center' level={4}>Settings</Title>
                                    <span className='white text-align-center'>Manage all of your options</span>
                                    <div className='flex-space-center padding-top-10'>
                                        <CustomButton style={style.marginRight10} size='small' variant='solid' color='primary'>Settings</CustomButton>
                                        <CustomButton size='small' variant='solid' color='danger'> <SettingOutlined/></CustomButton>
                                    </div>
                                </div>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <WalletOutlined style={style.iconStyle}/>
                                                Recover Password
                                            </div>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <HourglassOutlined style={style.iconStyle} />
                                                Messages
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                        <div>
                                            <PushpinOutlined style={style.iconStyle}  />
                                            Logs
                                        </div>
                                        </a>
                                    </li>
                                    <li className='nav-item nav-item-divider'>
                                    </li>
                                </ul>
                            </CustomCardBody>
                        </CustomCard>
                        <CustomCard noneBoxShadow noneBorderRadius className='mb-30'>
                            <CustomCardHeaderWithImage backgroundColorOverlay='#eee' className='align-items-center flex-column' imgUrl={'https://images.unsplash.com/photo-1602529830051-14d6f235f3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80'}>
                                <div className='flex-row justify-content-space-between align-items-start'>
                                   <div className='flex-column align-items-start'>
                                        <Title style={{marginBottom: '0px', color: 'black !important'}} className='black text-align-center' level={4}>Settings</Title>
                                        <span className='black text-align-center'>Manage all of your options</span>
                                   </div>
                                   <CustomButton size='small' variant='solid' color='warning'> <SettingOutlined/></CustomButton>

                                </div>
                            </CustomCardHeaderWithImage>
                            <CustomCardBody>
                                <ul className='nav'>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <WalletOutlined style={style.iconStyle}/>
                                                Recover Password
                                            </div>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <p className='nav-item-header'>My Account</p>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                            <div>
                                                <HourglassOutlined style={style.iconStyle} />
                                                Messages
                                            </div>
                                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <a href='#' className='nav-link'>
                                        <div>
                                            <PushpinOutlined style={style.iconStyle}  />
                                            Logs
                                        </div>
                                        </a>
                                    </li>
                                    <li className='nav-item nav-item-divider'>
                                    </li>
                                </ul>
                            </CustomCardBody>
                        </CustomCard>
                    </div>
                </CustomCardBody>
            </CustomCard>
        </div>
    )
};

const style = {
    iconStyle: {
        fontSize: '15px', width: '30px', textAlign: 'left',
    },
    marginRight10 : {
        marginRight: '10px'
    }
}

export default HeaderMenuContainer;