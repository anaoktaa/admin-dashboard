import React from 'react';
import { Avatar, Checkbox, Typography, Rate   } from 'antd';
import { TagOutlined, CalendarOutlined,
    MessageOutlined, WalletOutlined, SettingOutlined, PushpinOutlined,
    HourglassOutlined,  } from '@ant-design/icons';

import CustomButton from '../../components/custom-button/custom-button.component';
import CustomLabelBadge from '../../components/custom-label-badge/custom-label-badge.component';
import CustomBadges from '../../components/custom-badges/custom-badges.component';
import CustomMenu from '../../components/custom-menu/custom-menu.component';
import CustomMenuItem from '../../components/custom-menu-item/custom-menu-item.component';
import { CustomMenuDivider } from '../../components/custom-menu-item/custom-menu-item.styles';

import { MailboxData } from './application-mailbox.data';
import './applications-mailbox.styles.css';

const { Title, Text } = Typography;

const ApplicationsMailbox = () => {
    return (
        <div className='mailbox-container'>
            <div className='mailbox-menu-container'>
                <CustomButton block pill shadow color='primary' variant='solid'>Write New Email</CustomButton>
                <ul className='nav padding-top-20'>
                    <li className='nav-item'>
                        <p className='nav-item-header'>My Account</p>
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
                                Sent Items
                            </div>
                         </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <div>
                                <SettingOutlined style={style.iconStyle}/>
                                All Messages
                            </div>
                            <CustomLabelBadge className='margin-left-auto' color='success'>NEW</CustomLabelBadge>
                        </a>
                    </li>
                    <li className='nav-item nav-item-divider'>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <div>
                                <HourglassOutlined style={style.iconStyle} />
                                Trash
                            </div>
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            <div>
                                <PushpinOutlined style={style.iconStyle}  />
                                Others
                            </div>
                            <CustomLabelBadge className='margin-left-auto' color='warning'>512</CustomLabelBadge>
                        </a>
                    </li>
                    <li className='nav-item nav-item-divider'>
                    </li>
                    <li className='nav-item'>
                        <p className='nav-item-header'>Online Friends</p>
                    </li>
                    <li>
                        <div className='flex-row padding-top-10 justify-content-center flex-wrap'>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='primary' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='secondary' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank'className='mrb-10' color='success' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='info' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='warning' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='danger' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='alt' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='info' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-10' color='warning' size={10} dot>
                                <Avatar size={40} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <div className='padding-top-10'>
                                <CustomButton variant='solid' color='success' pill >Start New Conversations</CustomButton>
                            </div>
                        </div>
                       
                    </li>
                </ul>
            </div>
            <div className='inbox-container'>
                <Title level={3}>Inbox</Title>
                <div>
                    <CustomMenu role='secondary'>
                        {
                            MailboxData.map((item) => (
                                <div>
                                    <CustomMenuItem key={item.id}>
                                        <div className='inbox-mail-container'>
                                            <div lassName='flex-column align-items-center justify-content-center'>
                                                <Checkbox/>
                                            </div>
                                            <div style={{marginTop: '-5px'}}>
                                                <Rate count={1}/>
                                            </div>
                                            <div lassName='flex-column align-items-center justify-content-center'>
                                                <Avatar size={40} src={item.picture} />
                                            </div>
                                            <div>
                                                <p className='profile-name'>{item.name}</p>
                                            </div>
                                            <div className='text-overflow padding-horizontal-10'>
                                                <Text className='gray'>
                                                {item.email}
                                                </Text>
                                            </div>
                                            <div lassName='flex-column align-items-center justify-content-center'>
                                                <TagOutlined className='gray'/>
                                            </div>
                                            <div className='flex-column align-items-end'>
                                                <Text className='gray'>
                                                    <CalendarOutlined/>
                                                    &nbsp; {item.date}
                                                </Text>
                                            </div>
                                        </div>
                                    </CustomMenuItem>
                                    <CustomMenuDivider/>
                                </div>
                            )) 
                        }
                    </CustomMenu>
                </div>
            </div>
        </div>
    )
};

const style = {
    iconStyle: {
        fontSize: '18px', width: '30px', textAlign: 'left',
    }
}


export default ApplicationsMailbox;