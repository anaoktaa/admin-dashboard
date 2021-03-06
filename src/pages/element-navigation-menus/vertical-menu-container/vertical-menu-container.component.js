import React from 'react';
import { InboxOutlined, BookOutlined, FileOutlined, PictureOutlined,
         MessageOutlined, WalletOutlined, SettingOutlined, PushpinOutlined,
         HourglassOutlined,  } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from  'Components/custom-card/custom-card.styles';
import CustomLabelBadge from 'Components/custom-label-badge/custom-label-badge.component';
import CustomButton from 'Components/custom-button/custom-button.component';
import CustomMenu from 'Components/custom-menu/custom-menu.component';
import CustomMenuItem from 'Components/custom-menu-item/custom-menu-item.component';
import { CustomMenuItemHeader, CustomMenuDivider } from 'Components/custom-menu-item/custom-menu-item.styles';

const VerticalMenuContainer = () => {
    return (
        <div>
            <CustomCard className='mb-30'>
                <CustomCardTitleText>
                    VERTICAL MENU
                </CustomCardTitleText>
                <CustomCardBody>
                    <div className='grid-2-gap-30'>
                        <div className='mlr-30'>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        Link
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        Link
                                        <CustomLabelBadge className='margin-left-auto' color='success'>NEW</CustomLabelBadge>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        Another Link
                                        <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' disabled className='nav-link'>
                                       Disabled Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='mlr-30'>
                            <ul className='nav'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <div>
                                            <InboxOutlined style={style.iconStyle} />
                                            Inbox
                                        </div>
                                        <CustomLabelBadge className='margin-left-auto' color='secondary' pill>86</CustomLabelBadge>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <div>
                                            <BookOutlined style={style.iconStyle}/>
                                            Book
                                        </div>
                                        <CustomLabelBadge className='margin-left-auto' color='danger' pill>5</CustomLabelBadge>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        <div>
                                            <PictureOutlined style={style.iconStyle}/>
                                            Picture
                                        </div>
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' disabled className='nav-link'>
                                       <div>
                                        <FileOutlined style={style.iconStyle}/>
                                            File Disabled
                                       </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mb-30'>
                <CustomCardTitleText>
                    SEPARATORS AND HEADERS
                </CustomCardTitleText>
                <CustomCardBody>
                    <div className='grid-2-gap-30'>
                        <div className='mlr-30'>
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
                                    <a href='#' className='nav-link'>
                                        Recover Password
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
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>
                                        Logs
                                    </a>
                                </li>
                                <li className='nav-item nav-item-divider'>
                                </li>
                                <li className='nav-item'>
                                    <CustomButton variant='solid' color='danger' shadow>Cancel</CustomButton>
                                </li>
                                <li className='nav-item nav-item-divider'>
                                </li>
                            </ul>
                        </div>
                        <div className='mlr-30'>
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
                                    <a href='#' className='nav-link'>
                                        <div>
                                            <WalletOutlined style={style.iconStyle}/>
                                            Recover Password
                                        </div>
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
                                <li className='nav-item'>
                                    <CustomButton variant='solid' color='success' pill>Save</CustomButton>
                                </li>
                                <li className='nav-item nav-item-divider'>
                                </li>
                            </ul>
                        </div>
                    </div>
                </CustomCardBody>
            </CustomCard>
            <CustomCard className='mb-30'>
                <CustomCardTitleText>
                    MENU HOVER STYLES
                </CustomCardTitleText>
                <CustomCardBody>
                    <div className='grid-4-gap-20'>
                        <div className='flat-card-border padding-vertical-20 '>
                            <CustomMenuItemHeader>
                                Header
                            </CustomMenuItemHeader>
                            <CustomMenu role='primary'>
                                <CustomMenuItem>
                                    Menus
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Settings
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Actions
                                </CustomMenuItem>
                                <CustomMenuDivider/>
                                <CustomMenuItem>
                                    Divider
                                </CustomMenuItem>
                            </CustomMenu>
                        </div>
                        <div className='flat-card-border padding-vertical-20 '>
                            <CustomMenuItemHeader>
                                Header
                            </CustomMenuItemHeader>
                            <CustomMenu role='secondary'>
                                <CustomMenuItem>
                                    Menus
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Settings
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Actions
                                </CustomMenuItem>
                                <CustomMenuDivider/>
                                <CustomMenuItem>
                                    Divider
                                </CustomMenuItem>
                            </CustomMenu>
                        </div>
                        <div className='flat-card-border padding-vertical-20 '>
                            <CustomMenuItemHeader>
                                Header
                            </CustomMenuItemHeader>
                            <CustomMenu>
                                <CustomMenuItem>
                                    Menus
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Settings
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Actions
                                </CustomMenuItem>
                                <CustomMenuDivider/>
                                <CustomMenuItem>
                                    Divider
                                </CustomMenuItem>
                            </CustomMenu>
                        </div>
                        <div className='flat-card-border padding-vertical-20 '>
                            <CustomMenuItemHeader>
                                Header
                            </CustomMenuItemHeader>
                            <CustomMenu role='primary' pill={true}>
                                <CustomMenuItem>
                                    Menus
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Settings
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Actions
                                </CustomMenuItem>
                                <CustomMenuDivider/>
                                <CustomMenuItem>
                                    Divider
                                </CustomMenuItem>
                            </CustomMenu>
                        </div>
                        <div className='flat-card-border padding-vertical-20 '>
                            <CustomMenuItemHeader>
                                Header
                            </CustomMenuItemHeader>
                            <CustomMenu role='secondary' pill={true}>
                                <CustomMenuItem>
                                    Menus
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Settings
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    Actions
                                </CustomMenuItem>
                                <CustomMenuDivider/>
                                <CustomMenuItem>
                                    Divider
                                </CustomMenuItem>
                            </CustomMenu>
                        </div>
                        <div className='flat-card-border padding-vertical-20 '>
                            <CustomMenuItemHeader>
                                Header
                            </CustomMenuItemHeader>
                            <CustomMenu>
                                <CustomMenuItem>
                                    <InboxOutlined style={style.iconStyle} /> Menus
                                </CustomMenuItem>
                                <CustomMenuItem>
                                    <BookOutlined style={style.iconStyle}/> Settings
                                </CustomMenuItem>
                                <CustomMenuItem>    
                                    <PictureOutlined style={style.iconStyle}/> Actions
                                </CustomMenuItem>
                                <CustomMenuDivider/>
                                <CustomMenuItem>
                                    <FileOutlined style={style.iconStyle}/> Divider
                                </CustomMenuItem>
                            </CustomMenu>
                        </div>
                    </div>
                </CustomCardBody>
            </CustomCard>
        </div>
    )
};

const style = {
    iconStyle: {
        fontSize: '18px', width: '30px', textAlign: 'left',
    }
}

export default VerticalMenuContainer;