import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from '../../../components/custom-card/custom-card.styles';
import CustomLabelBadge from '../../../components/custom-label-badge/custom-label-badge.component';
import CustomBadges from '../../../components/custom-badges/custom-badges.component';

const AvatarsContainer = () => {
    return (
        <div>
            <CustomCard>
                <CustomCardTitleText>
                    BADGES AVATARS
                </CustomCardTitleText>
                <CustomCardBody>
                    <div>
                        <CustomBadges className='mrb-20' color='danger' size={14} dot>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='primary' size={11} dot>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='warning' size={8} dot>
                            <Avatar icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='success' size={6} dot>
                            <Avatar size="small" icon={<UserOutlined />} />
                        </CustomBadges>
                    </div>
            
                    <div>
                        <CustomBadges className='mrb-20' color='danger' size={14} dot>
                            <Avatar shape="square" size={64} icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='primary' size={11} dot>
                            <Avatar shape="square" size="large" icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='warning' size={8} dot>
                            <Avatar shape="square" icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges className='mrb-20' color='success' size={6} dot>
                            <Avatar shape="square" size="small" icon={<UserOutlined />} />
                        </CustomBadges>
                    </div>
                    <div>
                        <CustomBadges position='bottom' className='mrb-20' color='danger' size={14} dot>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges position='bottom' className='mrb-20' color='primary' size={11} dot>
                            <Avatar size="large" icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges position='bottom' className='mrb-20' color='warning' size={8} dot>
                            <Avatar icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges position='bottom' className='mrb-20' color='success' size={6} dot>
                            <Avatar size="small" icon={<UserOutlined />} />
                        </CustomBadges>
                    </div>
            
                    <div>
                        <CustomBadges position='bottom' className='mrb-20' color='danger' size={14} dot>
                            <Avatar shape="square" size={64} icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges position='bottom' className='mrb-20' color='primary' size={11} dot>
                            <Avatar shape="square" size="large" icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges position='bottom' className='mrb-20' color='warning' size={8} dot>
                            <Avatar shape="square" icon={<UserOutlined />} />
                        </CustomBadges>
                        <CustomBadges position='bottom' className='mrb-20' color='success' size={6} dot>
                            <Avatar shape="square" size="small" icon={<UserOutlined />} />
                        </CustomBadges>
                    </div>
                </CustomCardBody>
            </CustomCard>
        </div>
    )
};

export default AvatarsContainer;