import React from 'react';
import { Avatar, Checkbox, Typography, Rate,  Input  } from 'antd';
import { TagOutlined, CalendarOutlined, MenuOutlined, SearchOutlined,
        MessageOutlined, WalletOutlined, SettingOutlined, PushpinOutlined,
        HourglassOutlined,  } from '@ant-design/icons';

import CustomButton from '../../components/custom-button/custom-button.component';
import CustomLabelBadge from '../../components/custom-label-badge/custom-label-badge.component';
import CustomBadges from '../../components/custom-badges/custom-badges.component';
import CustomMenu from '../../components/custom-menu/custom-menu.component';
import CustomMenuItem from '../../components/custom-menu-item/custom-menu-item.component';
import { CustomMenuItemHeader, CustomMenuDivider } from '../../components/custom-menu-item/custom-menu-item.styles';

import { MailboxData } from '../applications-mailbox/application-mailbox.data';
import './applications-chat.styles.css';

const ApplicationChat = () => {
    return (
        <div className='chat-apps-container'>
            <div className='chat-inbox-list-container'>
                <div className='width-100 padding-horizontal-20' >
                    <Input addonBefore={<SearchOutlined />} placeholder='Search...' />
                </div>
                <CustomMenu className='padding-top-20' role='secondary'>
                    <CustomMenuItemHeader className='gray'>
                        FRIENDS ONLINE
                    </CustomMenuItemHeader>
                    {
                        MailboxData.map((item) => (
                            <CustomMenuItem activeColor='primary' active={item.activechat} key={item.id} className='chat-list-container'>
                                <CustomBadges href='https://twitter.com' target='_blank' position='bottom' color='success' size={10} dot>
                                    <Avatar size={40} src={item.picture}/>
                                </CustomBadges>
                                <div className='chat-wrapper text-overflow width-100'>
                                    <p className={`${item.activechat? 'chat-profile-name-active' : 'chat-profile-name'}`}>{item.name}</p>
                                    <p className={`${item.activechat? 'chat-detail-active' : 'chat-detail-list'}`}>
                                        {item.chat}
                                    </p>
                                </div>
                            </CustomMenuItem>
                        ))
                    }
                    <CustomMenuDivider/>
                    <CustomMenuItemHeader className='gray'>
                        OFFLINE FRIENDS
                    </CustomMenuItemHeader>
                </CustomMenu>
                <div className='flex-row padding-top-10 justify-content-center flex-wrap'>
                    <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='danger' position='bottom' size={10} dot>
                        <Avatar size={40} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                    </CustomBadges>
                    <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='danger' position='bottom' size={10} dot>
                        <Avatar size={40} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    </CustomBadges>
                    <CustomBadges href='https://twitter.com' target='_blank'className='mrb-10' color='danger' position='bottom' size={10} dot>
                        <Avatar size={40} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    </CustomBadges>
                    <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='danger' position='bottom' size={10} dot>
                        <Avatar size={40} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    </CustomBadges>
                    <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='danger' position='bottom' size={10} dot>
                        <Avatar size={40} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    </CustomBadges>
                </div>
                <div className='padding-top-10'>
                    <CustomButton variant='solid' color='success' pill >Offline Group Conversations</CustomButton>
                </div>
            </div>
            <div className='chat-content-container'>

            </div>
        </div>
    )
};

export default ApplicationChat;