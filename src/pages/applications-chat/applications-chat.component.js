import React from 'react';
import { Avatar, Typography,  Input  } from 'antd';
import { SearchOutlined, SettingOutlined } from '@ant-design/icons';

import CustomButton from '../../components/custom-button/custom-button.component';
import CustomBadges from '../../components/custom-badges/custom-badges.component';
import CustomMenu from '../../components/custom-menu/custom-menu.component';
import CustomLabelBadges from '../../components/custom-label-badge/custom-label-badge.component';
import CustomMenuItem from '../../components/custom-menu-item/custom-menu-item.component';
import ChatBallon from '../../components/chat-ballon/chat-ballon.component';
import { CustomMenuItemHeader, CustomMenuDivider } from '../../components/custom-menu-item/custom-menu-item.styles';

import { MailboxData } from '../applications-mailbox/application-mailbox.data';
import { ChatList } from './application-chat.data';

import './applications-chat.styles.css';

const { Text } = Typography;
const { TextArea } = Input;

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
                                    <div className='flex-row justify-content-space-between align-items-start'>
                                        <p className={`${item.activechat? 'chat-profile-name-active' : 'chat-profile-name'}`}>{item.name}</p>
                                        <p className='chat-date'>{item.datechat}</p>
                                    </div>
                                    <div className='flex-row justify-content-space-between align-items-start'>
                                        <p className={`${item.activechat? 'chat-detail-active' : 'chat-detail-list'}`}>
                                            {item.chat}
                                        </p>
                                        {
                                            item.unread?
                                            <CustomLabelBadges color='danger' pill={true}>{item.unread}</CustomLabelBadges> : null
                                        }
                                    </div>
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
                <div className='chat-content-header flex-row justify-content-space-between align-items-center'>
                    <div className='flex-row'>
                        <div className='mr-20'>
                            <CustomBadges position='bottom' color='success' size={13} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                        </div>
                        <div className='active-chat-profile-wrapper'>
                            <p className='active-chat-profile-name'>Silaladungka</p>
                            <Text className='gray'>Last seen online : </Text>
                            <Text type="secondary">10 minutes ago</Text>
                        </div>
                    </div>
                    <CustomButton color='primary' variant='solid' icon={<SettingOutlined />}>
                        Actions
                    </CustomButton>
                </div>
                <div className='chat-list-active-container'>
                    <ChatBallon
                        chatlist={ChatList}
                    />
                    <div className='text-input-chat-container'>
                        <TextArea rows={4} placeholder='Write here and hit enter to send...'/>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default ApplicationChat;