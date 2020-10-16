import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardTitleText } from '../../../components/custom-card/custom-card.styles';
import CustomLabelBadge from '../../../components/custom-label-badge/custom-label-badge.component';
import CustomBadges from '../../../components/custom-badges/custom-badges.component';

const AvatarsContainer = () => {
    return (
        <div className='grid-2-gap-30'>
            <div>
                <CustomCard>
                    <CustomCardTitleText>
                        BASIC AVATARS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div>
                            <Avatar className='mrb-20' size={35} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            <Avatar className='mrb-20' size={35} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={35} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={35} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={35} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />                    
                            <Avatar className='mrb-20' size={35} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={35} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />   
                        </div>
                        <div>
                            <Avatar shape='square' className='mrb-20' size={35} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            <Avatar shape='square' className='mrb-20' size={35} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={35} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={35} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={35} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />                    
                            <Avatar shape='square' className='mrb-20' size={35} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={35} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                        </div>

                        <div>
                            <Avatar className='mrb-20' size={45} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            <Avatar className='mrb-20' size={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />                    
                            <Avatar className='mrb-20' size={45} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            <Avatar className='mrb-20' size={45} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />   
                        </div>
                        <div>
                            <Avatar shape='square' className='mrb-20' size={45} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            <Avatar shape='square' className='mrb-20' size={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />                    
                            <Avatar shape='square' className='mrb-20' size={45} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            <Avatar shape='square' className='mrb-20' size={45} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                        </div>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        BADGES AVATARS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div>
                            <CustomBadges className='mrb-20' color='primary' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='secondary' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='success' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='info' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='warning' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='danger' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='alt' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                        </div>
                        <div>
                            <CustomBadges className='mrb-20' color='primary' size={10} dot>
                                <Avatar shape='square'size={35} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='secondary' size={10} dot>
                                <Avatar shape='square' size={35} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='success' size={10} dot>
                                <Avatar shape='square' size={35} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='info' size={10} dot>
                                <Avatar shape='square' size={35} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='warning' size={10} dot>
                                <Avatar shape='square' size={35} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='danger' size={10} dot>
                                <Avatar shape='square' size={35} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='alt' size={10} dot>
                                <Avatar shape='square' size={35} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                            </CustomBadges>
                         </div>
                         <div>
                            <CustomBadges className='mrb-20' color='primary' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='secondary' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='success' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='info' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='warning' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='danger' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='alt' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                        </div>
                        <div>
                            <CustomBadges className='mrb-20' color='primary' size={10} dot>
                                <Avatar shape='square'size={45} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='secondary' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='success' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='info' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='warning' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='danger' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges className='mrb-20' color='alt' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                            </CustomBadges>
                         </div>
                         <div>
                            <CustomBadges position='bottom' className='mrb-20' color='primary' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='secondary' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='success' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='info' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='warning' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='danger' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='alt' size={10} dot>
                                <Avatar size={45} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                        </div>
                        <div>
                            <CustomBadges position='bottom' className='mrb-20' color='primary' size={10} dot>
                                <Avatar shape='square'size={45} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='secondary' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='success' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='info' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='warning' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='danger' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges position='bottom' className='mrb-20' color='alt' size={10} dot>
                                <Avatar shape='square' size={45} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />  
                            </CustomBadges>
                         </div>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard>
                    <CustomCardTitleText>
                        LINK BADGES AVATARS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <div>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-20' color='primary' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-20' color='secondary' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank'className='mrb-20' color='success' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-20' color='info' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-20' color='warning' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-20' color='danger' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                            <CustomBadges href='https://twitter.com' target='_blank' className='mrb-20' color='alt' size={10} dot>
                                <Avatar size={35} src="https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                            </CustomBadges>
                        </div>
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};

export default AvatarsContainer;