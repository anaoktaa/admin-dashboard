import React from 'react';
import { InboxOutlined, BookOutlined, FileOutlined, PictureOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from  '../../../components/custom-card/custom-card.styles';
import CustomButton from '../../../components/custom-button/custom-button.component';
import CustomLabelBadge from '../../../components/custom-label-badge/custom-label-badge.component';
import CustomMenu from '../../../components/custom-menu/custom-menu.component';
import CustomMenuItem from '../../../components/custom-menu-item/custom-menu-item.component';
import { CustomMenuItemHeader, CustomMenuDivider } from '../../../components/custom-menu-item/custom-menu-item.styles';

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
                            <ul className='nav flex-column'>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#'>Link</a>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#'>Link</a>
                                    <CustomLabelBadge color='success'>NEW</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#'>Another Link</a>
                                    <CustomLabelBadge color='warning'>512</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' disabled>Disabled Link</a>
                                </li>
                            </ul>
                        </div>
                        <div className='mlr-30'>
                            <ul className='nav flex-column'>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' className='flex-align-center'>
                                        <InboxOutlined style={style.iconStyle} />
                                        Inbox
                                    </a>
                                    <CustomLabelBadge color='secondary' pill>86</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' className='flex-align-center'>
                                        <BookOutlined style={style.iconStyle}/>
                                        Book
                                    </a>
                                    <CustomLabelBadge color='danger' pill>5</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' className='flex-align-center'>
                                        <PictureOutlined style={style.iconStyle}/>
                                        Picture
                                    </a>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a disabled href='#' className='flex-align-center'>
                                        <FileOutlined style={style.iconStyle}/>
                                        File Disabled
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
                            <ul className='nav flex-column'>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#'>Link</a>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#'>Link</a>
                                    <CustomLabelBadge color='success'>NEW</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#'>Another Link</a>
                                    <CustomLabelBadge color='warning'>512</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' disabled>Disabled Link</a>
                                </li>
                            </ul>
                        </div>
                        <div className='mlr-30'>
                            <ul className='nav flex-column'>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' className='flex-align-center'>
                                        <InboxOutlined style={style.iconStyle} />
                                        Inbox
                                    </a>
                                    <CustomLabelBadge color='secondary' pill>86</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' className='flex-align-center'>
                                        <BookOutlined style={style.iconStyle}/>
                                        Book
                                    </a>
                                    <CustomLabelBadge color='danger' pill>5</CustomLabelBadge>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a href='#' className='flex-align-center'>
                                        <PictureOutlined style={style.iconStyle}/>
                                        Picture
                                    </a>
                                </li>
                                <li className='nav-item algn-center-just-space-between'>
                                    <a disabled href='#' className='flex-align-center'>
                                        <FileOutlined style={style.iconStyle}/>
                                        File Disabled
                                    </a>
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
                        <div className='flat-card-border padding-vertical-20'>
                            <CustomMenu role='primary'>
                                <CustomMenuItemHeader>Header</CustomMenuItemHeader>
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
                        <div className='flat-card-border padding-vertical-20'>
                            <CustomMenu role='link'>
                                <CustomMenuItemHeader>Header</CustomMenuItemHeader>
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
                        <div className='flat-card-border padding-vertical-20'>
                            <CustomMenu role='secondary'>
                                <CustomMenuItemHeader>Header</CustomMenuItemHeader>
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
                        <div className='flat-card-border padding-vertical-20'>
                            <CustomMenu role='secondary' pill={true}>
                                <CustomMenuItemHeader>Header</CustomMenuItemHeader>
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
                        <div className='flat-card-border padding-vertical-20'>
                            <CustomMenu role='primary' pill={true}>
                                <CustomMenuItemHeader>Header</CustomMenuItemHeader>
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
                    </div>
                </CustomCardBody>
            </CustomCard>
        </div>
    )
};

const style = {
    iconStyle: {
        fontSize: '18px', width: '30px', textAlign: 'left', color: '#babac5'
    }
}

export default VerticalMenuContainer;