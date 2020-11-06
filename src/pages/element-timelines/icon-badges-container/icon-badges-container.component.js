import React from 'react';
import { Typography } from 'antd';
import { IdcardOutlined, SettingOutlined, CloudOutlined } from '@ant-design/icons';

import CustomTimeline from '../../../components/custom-timeline/custom-timeline.component';
import CustomTimelineItem from  '../../../components/custom-timeline-item/custom-timeline-item.component';
import CustomLabelBadge from '../../../components/custom-label-badge/custom-label-badge.component';

import { CustomCard, CustomCardBody, CustomCardTitleText } from  '../../../components/custom-card/custom-card.styles';

const { Text } = Typography;

const IconBadgesContainer = () => {
    return (
        <CustomCard>
            <CustomCardTitleText>
                Basics
            </CustomCardTitleText>
            <CustomCardBody>
                <CustomTimeline size='small'>
                    <CustomTimelineItem
                        dot={<IdcardOutlined />}
                        color='danger'
                    >
                        <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                        <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                    </CustomTimelineItem>
                    <CustomTimelineItem
                        dot={<SettingOutlined spin={true}/>}
                        color='warning'
                    >
                        <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                        <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                    </CustomTimelineItem>
                    <CustomTimelineItem
                        dot={<CloudOutlined />}
                        color='success'
                    >
                        <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                        <p className='no-margin-no-padding'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                        </p>
                    </CustomTimelineItem>
                    <CustomTimelineItem
                        dot={<IdcardOutlined />}
                        color='primary'
                    >
                        <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                        <p className='no-margin-no-padding'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                        </p>
                    </CustomTimelineItem>
                    <CustomTimelineItem
                        dot={<IdcardOutlined />}
                        color='danger'
                        fill={true}
                    >
                        <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                        <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                    </CustomTimelineItem>
                    <CustomTimelineItem
                        dot={<SettingOutlined spin={true}/>}
                        color='warning'
                        fill={true}
                    >
                        <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                        <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                    </CustomTimelineItem>
                    <CustomTimelineItem
                        dot={<CloudOutlined />}
                        color='success'
                        fill={true}
                    >
                        <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                        <p className='no-margin-no-padding'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                        </p>
                    </CustomTimelineItem>
                    <CustomTimelineItem
                        dot={<IdcardOutlined />}
                        color='primary'
                        fill={true}
                    >
                        <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                        <p className='no-margin-no-padding'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                        </p>
                    </CustomTimelineItem>
                </CustomTimeline>
            </CustomCardBody>
        </CustomCard>
         
    )
};

export default IconBadgesContainer;